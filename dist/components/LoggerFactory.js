"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
class LoggerFactory {
    constructor(consfig) {
        this.isLoggerLibInitialized = false;
        this.logConfig = consfig;
    }
    create(category) {
        if (!this.isLoggerLibInitialized) {
            this.initializeLoggerLib();
        }
        return log4js.getLogger(category);
    }
    initializeLoggerLib() {
        if (this.isLoggerLibInitialized) {
            return;
        }
        log4js.configure(this.getLoggerLibConfig());
        this.isLoggerLibInitialized = true;
    }
    getLoggerLibConfig() {
        return {
            appenders: {
                everything: this.getAppenderFromConfig(this.logConfig.main),
                access: this.getAppenderFromConfig(this.logConfig.access),
            },
            categories: {
                default: { appenders: ['everything'], level: this.logConfig.main.level },
                db: { appenders: ['everything'], level: this.logConfig.main.level },
                access: { appenders: ['access'], level: this.logConfig.access.level },
            },
        };
    }
    getAppenderFromConfig(categoryConfig) {
        const appenderConfigMap = {
            file: {
                type: 'file',
                filename: categoryConfig.filename,
                maxLogSize: 50 * 1024 * 1024,
                backups: 10,
                compress: true,
            },
            dateFile: {
                type: 'dateFile',
                filename: categoryConfig.filename,
                daysToKeep: 10,
                compress: true,
            },
            console: {
                type: 'console',
            },
        };
        if (undefined === appenderConfigMap[categoryConfig.type]) {
            throw new Error(`Appender config of type ${categoryConfig.type} is not defined`);
        }
        return appenderConfigMap[categoryConfig.type];
    }
}
exports.LoggerFactory = LoggerFactory;
//# sourceMappingURL=LoggerFactory.js.map