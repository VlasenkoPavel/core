import { Logger } from 'typeorm';
import { IConnector } from '../types';
import { PostgresConfig } from '@chaika/config';
export declare class DbConnector implements IConnector {
    private config;
    private connection;
    private logger?;
    constructor(config: PostgresConfig, logger?: Logger);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}
