"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeContexts_1 = require("utils/mergeContexts");
class Context {
    merge(context) {
        return mergeContexts_1.mergeContexts(this, context);
    }
    with(source) {
        const extendedContext = Object.create(this);
        Object.assign(extendedContext, source);
        return extendedContext;
    }
    withPrams(source) {
        const extendedContext = Object.create(this);
        return extendedContext.params = source;
    }
}
exports.Context = Context;
//# sourceMappingURL=Context.js.map