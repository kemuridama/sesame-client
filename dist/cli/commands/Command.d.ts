import yargs from "yargs";
import { CommandOption } from "../../constants";
interface Arguments {
    uuid: string;
    command: CommandOption;
    apiKey?: string;
    secretKey?: string;
}
export declare const builder: (argv: yargs.Argv) => yargs.Argv<Arguments>;
export declare const handler: (args: Arguments) => Promise<void>;
export {};
