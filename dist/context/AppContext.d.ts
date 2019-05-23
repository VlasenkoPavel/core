import { DbConnector, TypeormLogger, LoggerFactory } from '../index';
import { PostgresConfig, ConfigFileChain, ConfigFactory, LogConfig } from '@chaika/config';
export declare abstract class AppContext {
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
    protected makePath(filePath: string): string;
    private configurePostgres;
}