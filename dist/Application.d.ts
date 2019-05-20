/// <reference types="node" />
import { ExpressServer } from './components/ExpressServer';
import { IConnector } from './types';
import { Server } from 'http';
export declare class Application {
    private connector;
    private server;
    constructor(connector: IConnector, server: ExpressServer);
    run(): Promise<void>;
    getHttpServer(): Server;
    stop(): Promise<void>;
    private beforeRunHook;
}
