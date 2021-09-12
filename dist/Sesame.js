"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sesame = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
const DEFAULT_OPTIONS = {
    baseUrl: "https://app.candyhouse.co",
    clientName: "SESAME RESTful API",
};
class Sesame {
    uuid;
    options;
    client;
    constructor(uuid, apiKey, options) {
        this.uuid = uuid;
        this.options = { ...DEFAULT_OPTIONS, ...options };
        this.client = axios_1.default.create({
            baseURL: this.options.baseUrl,
            headers: { "X-API-KEY": apiKey },
        });
    }
    getStatus = async () => {
        const response = await this.client.get(`/api/sesame2/${this.uuid}`);
        return response.data;
    };
    getHistory = async (params = {}) => {
        const defaultParams = { page: 1, lg: 20 };
        const response = await this.client.get(`/api/sesame2/${this.uuid}/history`, { params: { ...defaultParams, ...params } });
        return response.data.map((history) => utils_1.parseGetHistoryResponse(history));
    };
    executeCommand = (command) => {
        if (!this.options.secretKey) {
            throw new Error("Require secret key.");
        }
        return this.client.post(`/api/sesame2/${this.uuid}/cmd`, {
            cmd: command,
            sign: utils_1.generateSign(this.options.secretKey),
            history: Buffer.from(this.options.clientName).toString("base64"),
        });
    };
}
exports.Sesame = Sesame;
