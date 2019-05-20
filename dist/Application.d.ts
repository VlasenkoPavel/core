import { ExpressServer } from './components/ExpressServer';
import { IConnector } from './types';

export declare class Application {
    constructor(connector: IConnector, server: ExpressServer);

    run(): Promise<void>;
    getHttpServer(): Server;
    stop(): Promise<void>;
}
