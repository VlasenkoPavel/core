"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInjectDecorator = (ctx) => (target, key) => {
    target[key] = ctx[key];
};
//# sourceMappingURL=createInjectDecorator.js.map