"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const __1 = require("../");
const config_1 = require("@chaika/config");
class CommonAppContext {
    constructor() {
        this.configs = {};
    }
    get configFileChain() {
        return new config_1.ConfigFileChain(this.makePath(CommonAppContext.configDir), process.env.SM_ENV);
    }
    get configFactory() {
        return new config_1.ConfigFactory(this.configFileChain);
    }
    get loggerFactory() {
        return new __1.LoggerFactory(this.configs.log);
    }
    get typeOrmLogger() {
        return new __1.TypeormLogger(this.loggerFactory.create('db'));
    }
    get dbConnector() {
        return new __1.DbConnector(this.configs.postgres, this.typeOrmLogger);
    }
    async configure() {
        this.configs.log = await this.configFactory.create(config_1.LogConfig);
        await this.configurePostgres();
    }
    makePath(filePath) {
        return path.resolve(__dirname, CommonAppContext.pathRelation, filePath);
    }
    async configurePostgres() {
        this.configs.postgres = await this.configFactory.create(config_1.PostgresConfig);
        this.configs.postgres.entities = this.configs.postgres.entities.map(path => this.makePath(path));
        this.configs.postgres.migrations = this.configs.postgres.migrations.map(path => this.makePath(path));
    }
}
CommonAppContext.pathRelation = '../../../../../';
CommonAppContext.configDir = './config';
exports.CommonAppContext = CommonAppContext;
//# sourceMappingURL=CommonAppContext.js.map