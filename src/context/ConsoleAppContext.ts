
import { ConsoleApp } from '../';
import { CommonAppContext } from './CommonAppContext';

export class ConsoleAppContext extends CommonAppContext {
    get consoleApp(): ConsoleApp {
        return new ConsoleApp(this.dbConnector);
    }
}
