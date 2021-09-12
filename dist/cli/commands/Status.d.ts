import yargs from "yargs";
interface Arguments {
    uuid: string;
    apiKey?: string;
}
export declare const builder: (argv: yargs.Argv) => yargs.Argv<Arguments>;
export declare const handler: (args: {
    uuid: string;
    apiKey?: string;
}) => Promise<void>;
export {};
