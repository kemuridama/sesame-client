"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
const Sesame_1 = require("../../Sesame");
const builder = (argv) => argv
    .positional("uuid", { type: "string", demandOption: true })
    .option("apiKey", { type: "string" });
exports.builder = builder;
const handler = async (args) => {
    const apiKey = args.apiKey || process.env.API_KEY;
    if (!apiKey) {
        throw new Error("Require a API key.");
    }
    const sesame = new Sesame_1.Sesame(args.uuid, apiKey);
    const response = await sesame.getStatus();
    console.log(response);
};
exports.handler = handler;
