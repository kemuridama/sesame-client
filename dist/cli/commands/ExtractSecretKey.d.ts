import yargs from "yargs";
interface Arguments {
    payload: string;
}
export declare const builder: (argv: yargs.Argv) => yargs.Argv<Arguments>;
export declare const handler: (args: Arguments) => void;
export {};
