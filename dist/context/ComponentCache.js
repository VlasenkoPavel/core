"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentCache {
    constructor() {
        this.cache = new Map();
    }
    get(target, propName, receiver) {
        let cached = this.cache.get(propName);
        if (!cached) {
            cached = target[propName];
            this.cache.set(propName, cached);
        }
        return cached;
    }
}
exports.ComponentCache = ComponentCache;
//# sourceMappingURL=ComponentCache.js.map