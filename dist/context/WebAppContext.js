"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const config_1 = require("@chaika/config");
const CommonAppContext_1 = require("./CommonAppContext");
class WebAppContext extends CommonAppContext_1.CommonAppContext {
    constructor() {
        super(...arguments);
        this.components = new Map();
    }
    /** for routing-controllers */
    get(identifier) {
        return this.components.get(identifier);
    }
    get expressServer() {
        const logger = this.loggerFactory.create('app');
        __1.ErrorHandlingMiddleware.setLogger(logger);
        const server = new __1.ExpressServer(this.configs.server, [__1.ErrorHandlingMiddleware], logger);
        return server;
    }
    get consoleApp() {
        return new __1.ConsoleApp(this.dbConnector);
    }
    get application() {
        return new __1.Application(this.dbConnector, this.expressServer);
    }
    get postgresConfig() {
        return this.configs.postgres;
    }
    get errorHandlingMiddleware() {
        return new __1.ErrorHandlingMiddleware();
    }
    /** for routing-controllers */
    addComponentsAsClasses(...components) {
        components.forEach(component => this.components.set(component, new component()));
    }
    /** for routing-controllers */
    addComponentsAsInstances(...components) {
        components.forEach(component => this.components.set(component.__proto__.constructor, component));
    }
    async configure() {
        await super.configure();
        this.configs.server = await this.configFactory.create(config_1.ServerConfig);
    }
}
exports.WebAppContext = WebAppContext;
//# sourceMappingURL=WebAppContext.js.map