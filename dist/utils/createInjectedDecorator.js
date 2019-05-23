"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInjectedDecorator = (context) => (target) => {
    const original = target;
    class Alternate {
        constructor(constructor, args) {
            const inst = new constructor;
            Object.assign(this, inst);
            const keys = Object.getOwnPropertyNames(inst);
            keys.forEach(key => {
                if (!this[key]) {
                    this[key] = context[key];
                }
            });
            this.__proto__ = constructor.prototype;
        }
    }
    const newConstructor = (...args) => new Alternate(original, args);
    newConstructor.prototype = original.prototype;
    return newConstructor;
};
//# sourceMappingURL=createInjectedDecorator.js.map