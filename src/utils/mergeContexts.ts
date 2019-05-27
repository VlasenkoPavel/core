
export const mergeContexts = <T extends Object, S extends Object>(target: T, source: S): T & S => {
    Object.assign(target, source);
    const sourcePrototype = Object.getPrototypeOf(source);
    const keys = Object.getOwnPropertyNames(sourcePrototype).filter(key => key != 'constructor');

    keys.forEach(key => {
        const getter = Object.getOwnPropertyDescriptor(sourcePrototype, key);
        Object.defineProperty(Object.getPrototypeOf(target), key, getter);
    });

    return target as T & S;
};
