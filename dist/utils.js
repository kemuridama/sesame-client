"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGetHistoryResponse = exports.parseCommand = exports.generateSign = exports.extractSecretKey = void 0;
const url_1 = require("url");
const aes_cmac_1 = require("@kemuridama/aes-cmac");
const constants_1 = require("./constants");
const extractSecretKey = (qrCodePayload) => {
    const url = new url_1.URL(qrCodePayload);
    if (url.protocol !== "ssm:") {
        throw new Error("Invalid protocol.");
    }
    const sk = url.searchParams.get("sk");
    if (sk === null) {
        throw new Error("Invalid query parameter.");
    }
    const buffer = Buffer.from(sk, "base64");
    if (buffer.length !== 98) {
        throw new Error("Invalid payload.");
    }
    return buffer.slice(1, 17).toString("hex");
};
exports.extractSecretKey = extractSecretKey;
const generateSign = (secretKey) => {
    const date = Math.floor(Date.now() / 1000);
    const dateDate = Buffer.alloc(4);
    dateDate.writeUInt32LE(date);
    return aes_cmac_1.generateAesCmac(Buffer.from(secretKey, "hex"), dateDate.slice(1, 4));
};
exports.generateSign = generateSign;
const parseCommand = (cmd) => {
    switch (cmd) {
        case "lock":
            return constants_1.Commands.LOCK;
        case "unlock":
            return constants_1.Commands.UNLOCK;
        case "toggle":
            return constants_1.Commands.TOGGLE;
    }
};
exports.parseCommand = parseCommand;
const parseGetHistoryResponse = (history) => ({
    id: history.recordID,
    type: history.type,
    timestamp: new Date(history.timeStamp),
    username: history.historyTag
        ? Buffer.from(history.historyTag, "base64").toString()
        : undefined,
});
exports.parseGetHistoryResponse = parseGetHistoryResponse;
