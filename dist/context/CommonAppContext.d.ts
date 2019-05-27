import { DbConnector, TypeormLogger, LoggerFactory } from '../';
import { PostgresConfig, ConfigFileChain, ConfigFactory, LogConfig } from '@chaika/config';
import { Context } from './Context';
export declare abstract class CommonAppContext extends Context {
    static pathRelation: string;
    static configDir: string;
    protected configs: {
        log?: LogConfig;
        postgres?: PostgresConfig;
    };
    readonly configFileChain: ConfigFileChain;
    readonly configFactory: ConfigFactory;
    readonly loggerFactory: LoggerFactory;
    readonly typeOrmLogger: TypeormLogger;
    readonly dbConnector: DbConnector;
    configure(): Promise<void>;
    merge<T extends object>(context: T): this & T;
    protected makePath(filePath: string): string;
    private configurePostgres;
}
