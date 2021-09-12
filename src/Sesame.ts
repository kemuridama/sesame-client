import Axios, { AxiosInstance } from "axios";
import { Command } from "./constants";
import { GetHistoryResponse, GetStatusResponse, History } from "./types";
import { generateSign, parseGetHistoryResponse } from "./utils";

type Options = {
  baseUrl: string;
  clientName: string;
  secretKey?: string;
};

const DEFAULT_OPTIONS: Options = {
  baseUrl: "https://app.candyhouse.co",
  clientName: "SESAME RESTful API",
};

export class Sesame {
  private options: Options;
  private client: AxiosInstance;

  constructor(public uuid: string, apiKey: string, options?: Partial<Options>) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.client = Axios.create({
      baseURL: this.options.baseUrl,
      headers: { "X-API-KEY": apiKey },
    });
  }

  getStatus = async (): Promise<GetStatusResponse> => {
    const response = await this.client.get<GetStatusResponse>(
      `/api/sesame2/${this.uuid}`
    );
    return response.data;
  };

  getHistory = async (
    params: { page?: number; lg?: number } = {}
  ): Promise<History[]> => {
    const defaultParams = { page: 1, lg: 20 };
    const response = await this.client.get<GetHistoryResponse[]>(
      `/api/sesame2/${this.uuid}/history`,
      { params: { ...defaultParams, ...params } }
    );
    return response.data.map((history: GetHistoryResponse) =>
      parseGetHistoryResponse(history)
    );
  };

  executeCommand = (command: Command): Promise<void> => {
    if (!this.options.secretKey) {
      throw new Error("Require secret key.");
    }

    return this.client.post(`/api/sesame2/${this.uuid}/cmd`, {
      cmd: command,
      sign: generateSign(this.options.secretKey),
      history: Buffer.from(this.options.clientName).toString("base64"),
    });
  };
}
