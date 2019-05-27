export interface IRunnable {
    run(): void | Promise<void>;
}

export interface IConnector {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

export interface IContainer {
    get(someClass: any): any;
}

export interface Class<T = object, P = any> extends Function {
    new (...args: P[]): T;
}

export type Parameterized<T extends Object, S extends Object> = T & { params: S };
