interface Constructor extends Function { new (...args: any[]): any; }

export const createInjectedDecorator = (context: Object): ClassDecorator =>
<TFunction extends Function>(target: TFunction): any => {
    const original: Constructor = target as unknown as Constructor;

    class Alternate {
        constructor(constructor: Constructor, args: any[]) {
            const instance = new constructor(...args);
            Object.assign(this, instance);
            const keys = Object.getOwnPropertyNames(instance);

            keys.forEach(key => {
                if (!this[key]) {
                    this[key] = context[key];
                }
            });
        }
    }

    Alternate.prototype = original.prototype;

    const newConstructor = function(...args: any[]) {
        return new Alternate(original, args);
    };

    newConstructor.prototype = original.prototype;

    return newConstructor;
};
