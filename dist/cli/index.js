"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const yargs_1 = __importDefault(require("yargs"));
const commands_1 = require("./commands");
const cli = async () => {
    await yargs_1.default
        .command("extract-secret-key <payload>", "Extract a secret key from a QR code payload", commands_1.ExtractSecretKey.builder, commands_1.ExtractSecretKey.handler)
        .command("status <uuid>", "Show SESAME status.", commands_1.Status.builder, commands_1.Status.handler)
        .command("history <uuid>", "Show histories of operations.", commands_1.History.builder, commands_1.History.handler)
        .command("command <command> <uuid>", "Command SESAME", commands_1.Command.builder, commands_1.Command.handler)
        .parse();
};
exports.cli = cli;
