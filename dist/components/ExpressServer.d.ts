/// <reference types="node" />
import * as express from 'express';
import { Logger } from 'log4js';
import { Server } from 'http';
import { ServerConfig } from '@chaika/config';
import { IContainer } from '../types';
export declare class ExpressServer {
    readonly express: express.Application;
    private logger;
    private server;
    private config;
    constructor(config: ServerConfig, middlewares: string[] | Function[], logger: Logger, container?: IContainer);
    start(): Promise<void>;
    getHttpServer(): Server;
    stop(): void;
    private makePath;
}
