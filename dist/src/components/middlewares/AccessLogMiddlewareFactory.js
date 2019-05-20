"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
class AccessLogMiddlewareFactory {
    constructor(logger) {
        this.logger = logger;
    }
    create() {
        return log4js_1.connectLogger(this.logger, {
            level: 'auto',
            /* tslint:disable:max-line-length */
            format: ':remote-addr - - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent" :response-time'
            /* tslint:enable:max-line-length */
        });
    }
}
exports.AccessLogMiddlewareFactory = AccessLogMiddlewareFactory;
//# sourceMappingURL=AccessLogMiddlewareFactory.js.map