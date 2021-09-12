import { Command } from "./constants";
import { GetStatusResponse, History } from "./types";
declare type Options = {
    baseUrl: string;
    clientName: string;
    secretKey?: string;
};
export declare class Sesame {
    uuid: string;
    private options;
    private client;
    constructor(uuid: string, apiKey: string, options?: Partial<Options>);
    getStatus: () => Promise<GetStatusResponse>;
    getHistory: (params?: {
        page?: number;
        lg?: number;
    }) => Promise<History[]>;
    executeCommand: (command: Command) => Promise<void>;
}
export {};
