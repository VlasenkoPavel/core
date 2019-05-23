import * as path from 'path';

import { DbConnector, TypeormLogger, LoggerFactory } from '../';
import { PostgresConfig, ConfigFileChain, ConfigFactory, LogConfig } from '@chaika/config';

export abstract class CommonAppContext {
    public static pathPrefix =  '../../../../';
    public static configDir = './config';

    protected configs: {
        log?: LogConfig,
        postgres?: PostgresConfig
    } = {};

    get configFileChain(): ConfigFileChain {
        return new ConfigFileChain(this.makePath(CommonAppContext.configDir), process.env.SM_ENV as string);
    }

    get configFactory(): ConfigFactory {
        return new ConfigFactory(this.configFileChain);
    }

    get loggerFactory(): LoggerFactory {
        return new LoggerFactory(this.configs.log);
    }

    get typeOrmLogger(): TypeormLogger {
        return new TypeormLogger(this.loggerFactory.create('db'));
    }

    get dbConnector(): DbConnector {
        return new DbConnector(this.configs.postgres, this.typeOrmLogger);
    }

    public async configure(): Promise<void> {
        this.configs.log = await this.configFactory.create(LogConfig);
        await this.configurePostgres();
    }

    protected makePath(filePath: string) {
        return path.resolve(__dirname, '../../../../../', filePath);
    }

    private async configurePostgres(): Promise<void> {
        this.configs.postgres = await this.configFactory.create(PostgresConfig);
        this.configs.postgres.entities = this.configs.postgres.entities.map(path => this.makePath(path));
        this.configs.postgres.migrations = this.configs.postgres.migrations.map(path => this.makePath(path));
    }
}
