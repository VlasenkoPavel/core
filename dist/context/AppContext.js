"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const index_1 = require("../index");
const config_1 = require("@chaika/config");
class AppContext {
    constructor() {
        this.configs = {};
    }
    get configFileChain() {
        return new config_1.ConfigFileChain(this.makePath('../config'), process.env.SM_ENV);
    }
    get configFactory() {
        return new config_1.ConfigFactory(this.configFileChain);
    }
    get loggerFactory() {
        return new index_1.LoggerFactory(this.configs.log);
    }
    get typeOrmLogger() {
        return new index_1.TypeormLogger(this.loggerFactory.create('db'));
    }
    get dbConnector() {
        return new index_1.DbConnector(this.configs.postgres, this.typeOrmLogger);
    }
    async configure() {
        this.configs.log = await this.configFactory.create(config_1.LogConfig);
        await this.configurePostgres();
    }
    makePath(filePath) {
        return path.resolve(__dirname, '../../../../', filePath);
    }
    async configurePostgres() {
        this.configs.postgres = await this.configFactory.create(config_1.PostgresConfig);
        this.configs.postgres.entities = this.configs.postgres.entities.map(this.makePath);
        this.configs.postgres.migrations = this.configs.postgres.migrations.map(this.makePath);
    }
}
exports.AppContext = AppContext;
//# sourceMappingURL=AppContext.js.map