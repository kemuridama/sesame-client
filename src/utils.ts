import { URL } from "url";
import { generateAesCmac } from "@kemuridama/aes-cmac";
import { GetHistoryResponse, History } from "./types";
import { Type } from "./constants";
import { Command, CommandOption, Commands } from "./constants";

export const extractSecretKey = (qrCodePayload: string): string => {
  const url = new URL(qrCodePayload);
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

export const generateSign = (secretKey: string): Buffer => {
  const date = Math.floor(Date.now() / 1000);
  const dateDate = Buffer.alloc(4);
  dateDate.writeUInt32LE(date);
  return generateAesCmac(Buffer.from(secretKey, "hex"), dateDate.slice(1, 4));
};

export const parseCommand = (cmd: CommandOption): Command => {
  switch (cmd) {
    case "lock":
      return Commands.LOCK;
    case "unlock":
      return Commands.UNLOCK;
    case "toggle":
      return Commands.TOGGLE;
  }
};

export const parseGetHistoryResponse = (
  history: GetHistoryResponse
): History => ({
  id: history.recordID,
  type: history.type as Type,
  timestamp: new Date(history.timeStamp),
  username: history.historyTag
    ? Buffer.from(history.historyTag, "base64").toString()
    : undefined,
});
