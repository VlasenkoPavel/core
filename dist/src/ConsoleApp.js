"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleApp {
    constructor(connector) {
        this.connector = connector;
    }
    async run(runnable) {
        await this.connector.connect();
        try {
            await runnable.run();
        }
        finally {
            await this.end();
        }
    }
    async end() {
        await this.connector.disconnect();
    }
}
exports.ConsoleApp = ConsoleApp;
//# sourceMappingURL=ConsoleApp.js.map