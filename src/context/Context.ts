import { mergeContexts } from 'utils/mergeContexts';
import { Parameterized } from 'types';

export abstract class CommonAppContext {
    public merge<T extends object>(context: T): this & T {
        return mergeContexts(this, context);
    }

    public with<T extends Object>(source: T): this & T {
        const extendedContext = Object.create(this);
        Object.assign(extendedContext, source);

        return extendedContext;
    }

    public withPrams<T extends Object>(source: Object): Parameterized<this, T> {
        const extendedContext = Object.create(this);

        return extendedContext.params = source as  Parameterized<this, T>;
    }
}
