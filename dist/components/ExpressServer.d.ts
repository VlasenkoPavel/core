import * as express from 'express';
import * as path from 'path';
import { Logger } from 'log4js';
import { createExpressServer } from 'routing-controllers';
import { Server } from 'http';
import { IContainer } from '../types';

import { ServerConfig } from './config-validators/ServerConfig';

export declare class ExpressServer {
    readonly express: express.Application;

    constructor(
        config: ServerConfig,
        middlewares: string[] | Function[],
        logger: Logger,
        container?: IContainer
    );

    start(): Promise<void>;
    getHttpServer(): Server;
    stop(): void;
}
