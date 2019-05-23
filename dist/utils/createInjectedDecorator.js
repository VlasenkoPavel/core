"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInjectedDecorator = (context) => (target) => {
    const original = target;
    class Alternate {
        constructor(constructor, args) {
            const instance = new constructor(...args);
            Object.assign(this, instance);
            const keys = Object.getOwnPropertyNames(instance);
            keys.forEach(key => {
                if (!this[key]) {
                    this[key] = context[key];
                }
            });
            this.__proto__ = constructor.prototype;
        }
    }
    const newConstructor = function (...args) {
        return new Alternate(original, args);
    };
    newConstructor.prototype = original.prototype;
    return newConstructor;
};
//# sourceMappingURL=createInjectedDecorator.js.map