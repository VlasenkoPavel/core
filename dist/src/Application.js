"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Application {
    constructor(connector, server) {
        this.connector = connector;
        this.server = server;
    }
    async run() {
        await this.beforeRunHook();
        await this.connector.connect();
        await this.server.start();
    }
    getHttpServer() {
        return this.server.getHttpServer();
    }
    async stop() {
        await Promise.all([this.connector.disconnect(), this.server.stop()]);
    }
    async beforeRunHook() { }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map