"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class DbConnector {
    constructor(config, logger) {
        this.config = config;
        this.logger = logger;
    }
    async connect() {
        this.connection = await typeorm_1.createConnection(Object.assign({}, this.config, { logger: this.logger }));
    }
    async disconnect() {
        await this.connection.close();
    }
}
exports.DbConnector = DbConnector;
//# sourceMappingURL=DbConnector.js.map