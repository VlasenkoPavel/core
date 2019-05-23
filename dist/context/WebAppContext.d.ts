import { ExpressServer, ErrorHandlingMiddleware, Application, ConsoleApp, IContainer, Class } from '..';
import { ServerConfig, LogConfig, PostgresConfig } from '@chaika/config';
import { CommonAppContext } from './CommonAppContext';
export declare class WebAppContext extends CommonAppContext implements IContainer {
    protected configs: {
        log: LogConfig;
        postgres: PostgresConfig;
        server: ServerConfig;
    };
    protected components: Map<Class<any>, object>;
    /** for routing-controllers */
    get(identifier: any): any;
    readonly expressServer: ExpressServer;
    readonly consoleApp: ConsoleApp;
    readonly application: Application;
    readonly postgresConfig: PostgresConfig;
    readonly errorHandlingMiddleware: ErrorHandlingMiddleware;
    /** for routing-controllers */
    addComponentsAsClasses(...components: Class<any>[]): void;
    /** for routing-controllers */
    addComponentsAsInstances(...components: object[]): void;
    configure(): Promise<void>;
}
