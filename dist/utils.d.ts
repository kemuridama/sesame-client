/// <reference types="node" />
import { GetHistoryResponse, History } from "./types";
import { Command, CommandOption } from "./constants";
export declare const extractSecretKey: (qrCodePayload: string) => string;
export declare const generateSign: (secretKey: string) => Buffer;
export declare const parseCommand: (cmd: CommandOption) => Command;
export declare const parseGetHistoryResponse: (history: GetHistoryResponse) => History;
