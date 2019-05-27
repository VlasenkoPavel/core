"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeContexts_1 = require("utils/mergeContexts");
class CommonAppContext {
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
exports.CommonAppContext = CommonAppContext;
//# sourceMappingURL=Context.js.map