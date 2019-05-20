import { Logger } from 'log4js';
export declare class AccessLogMiddlewareFactory {
    protected logger: Logger;
    constructor(logger: Logger);
    create(): any;
}
