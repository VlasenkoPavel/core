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
