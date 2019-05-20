"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const routing_controllers_1 = require("routing-controllers");
class ExpressServer {
    constructor(config, middlewares, logger, container) {
        this.logger = logger;
        this.config = config;
        const controllers = [this.makePath(this.config.controllers)];
        this.express = routing_controllers_1.createExpressServer({
            controllers,
            middlewares,
            defaultErrorHandler: false
        });
    }
    async start() {
        const { host, port } = this.config;
        try {
            await new Promise((resolve, reject) => {
                this.server = this.express.listen(port, host, (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                })
                    .on('error', err => {
                    reject(err);
                });
            });
        }
        catch (e) {
            this.logger.error(e);
            process.exitCode = 1;
            await this.start();
            return;
        }
        this.logger.info(`Server started at http://${host}:${port}`);
    }
    getHttpServer() {
        if (!this.server) {
            throw new Error('Server not started');
        }
        return this.server;
    }
    stop() {
        this.server.close();
    }
    makePath(filePath) {
        return path.resolve(__dirname, '../../../', filePath);
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=ExpressServer.js.map