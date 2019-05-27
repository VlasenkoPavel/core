"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeContexts = (target, source) => {
    Object.assign(target, source);
    const sourcePrototype = Object.getPrototypeOf(source);
    const keys = Object.getOwnPropertyNames(sourcePrototype).filter(key => key != 'constructor');
    keys.forEach(key => {
        const getter = Object.getOwnPropertyDescriptor(sourcePrototype, key);
        Object.defineProperty(Object.getPrototypeOf(target), key, getter);
    });
    return target;
};
//# sourceMappingURL=mergeContexts.js.map