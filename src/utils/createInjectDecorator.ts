export const createInjectDecorator = <T extends Object>(ctx: T) =>
<T extends Function> (target: Object, key: keyof T): void => {
    target[key as string] = ctx[key as string];
};
