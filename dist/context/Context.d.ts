import { Parameterized } from 'types';
export declare abstract class Context {
    merge<T extends object>(context: T): this & T;
    with<T extends Object>(source: T): this & T;
    withPrams<T extends Object>(source: Object): Parameterized<this, T>;
}
