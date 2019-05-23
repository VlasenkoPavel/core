interface Constructor extends Function { new (...args: any[]): any; }

export const createInjectedDecorator = (context: Object): ClassDecorator =>
<TFunction extends Function>(target: TFunction): any => {
    const original: Constructor = target as unknown as Constructor;

    class Alternate {
        constructor(constructor: Constructor, args: any[]) {
            const inst = new constructor;
            Object.assign(this, inst);
            const keys = Object.getOwnPropertyNames(inst);

            keys.forEach(key => {
                if (!this[key]) {
                    this[key] = context[key];
                }
            });

            (this as any).__proto__ = constructor.prototype;
        }
    }

    const newConstructor = (...args: any[]) => new Alternate(original, args);
    newConstructor.prototype = original.prototype;

    return newConstructor;
};
