"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeContexts = (target, source) => {
    Object.assign(target, source);
    const keys = Object.getOwnPropertyNames(source.__proto__).filter(key => key != 'constructor');
    keys.forEach(key => {
        const getter = Object.getOwnPropertyDescriptor(source.__proto__, key);
        Object.defineProperty(target.__proto__, key, getter);
    });
    return target;
};
//# sourceMappingURL=mergeContexts.js.map