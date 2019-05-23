"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const CommonAppContext_1 = require("./CommonAppContext");
class ConsoleAppContext extends CommonAppContext_1.CommonAppContext {
    get consoleApp() {
        return new __1.ConsoleApp(this.dbConnector);
    }
}
exports.ConsoleAppContext = ConsoleAppContext;
//# sourceMappingURL=ConsoleAppContext.js.map