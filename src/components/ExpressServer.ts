import * as express from 'express';
import { Logger } from 'log4js';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Server } from 'http';

import { ServerConfig } from '@chaika/config';
import { IContainer } from '../types';

export class ExpressServer {
    public readonly express: express.Application;
    private logger: Logger;
    private server: Server;
    private config: ServerConfig;

    constructor(
        config: ServerConfig,
        middlewares: string[] | Function[],
        logger: Logger,
        container?: IContainer
    ) {
        this.logger = logger;
        this.config = config;

        if (container) {
            useContainer(container);
        }

        this.express = createExpressServer({
            controllers: [this.config.controllers],
            middlewares,
            defaultErrorHandler: false
        });
    }

    public async start(): Promise<void> {
        const { host, port } = this.config;

        try {
            await new Promise<void>((resolve, reject) => {
                this.server = this.express.listen(port, host, (err: any) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                })
                .on('error', err => {
                    reject(err);
                });
            });
        } catch (e) {
            this.logger.error(e);
            process.exitCode = 1;
            await this.start();

            return;
        }

        this.logger.info(`Server started at http://${host}:${port}`);
    }

    public getHttpServer(): Server {
        if (!this.server) {
            throw new Error('Server not started');
        }

        return this.server;
    }

    public stop(): void {
        this.server.close();
    }
}
