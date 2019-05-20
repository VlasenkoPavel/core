import { IRunnable, IConnector } from './types';

export class ConsoleApp {
    private connector: IConnector;

    constructor(connector: IConnector) {
        this.connector = connector;
    }

    public async run(runnable: IRunnable): Promise<void> {
        await this.connector.connect();

        try {
            await runnable.run();
        } finally {
            await this.end();
        }
    }

    public async end(): Promise<void>  {
        await this.connector.disconnect();
    }
}
