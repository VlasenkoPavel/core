import { IRunnable, IConnector } from './types';

export declare class ConsoleApp {
    constructor(connector: IConnector);

    run(runnable: IRunnable): Promise<void>;
    end(): Promise<void>;
}
