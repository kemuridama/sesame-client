"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = void 0;
const utils_1 = require("../../utils");
const builder = (argv) => argv.positional("payload", { type: "string", demandOption: true });
exports.builder = builder;
const handler = (args) => {
    const secretKey = utils_1.extractSecretKey(args.payload);
    console.log(secretKey);
};
exports.handler = handler;
