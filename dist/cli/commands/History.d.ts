import yargs from "yargs";
interface Arguments {
    uuid: string;
    apiKey?: string;
    page?: number;
    limit?: number;
}
export declare const builder: (argv: yargs.Argv) => yargs.Argv<Arguments>;
export declare const handler: (args: Arguments) => Promise<void>;
export {};
