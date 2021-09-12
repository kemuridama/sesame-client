"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
const Sesame_1 = require("../../Sesame");
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const builder = (argv) => argv
    .positional("uuid", { type: "string", demandOption: true })
    .positional("command", { choices: constants_1.CommandOptions, demandOption: true })
    .option("apiKey", { type: "string" })
    .option("secretKey", { type: "string" });
exports.builder = builder;
const handler = async (args) => {
    const apiKey = args.apiKey || process.env.API_KEY;
    const secretKey = args.secretKey || process.env.SECRET_KEY;
    if (!apiKey || !secretKey) {
        throw new Error("Require both API key and secret key.");
    }
    const sesame = new Sesame_1.Sesame(args.uuid, apiKey, { secretKey });
    const command = utils_1.parseCommand(args.command);
    await sesame.executeCommand(command);
};
exports.handler = handler;
