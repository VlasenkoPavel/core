export declare class ComponentCache<T extends object> implements ProxyHandler<T> {
    private cache;
    get(target: T, propName: PropertyKey, receiver: any): any;
}
