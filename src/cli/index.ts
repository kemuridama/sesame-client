/* eslint-disable @typescript-eslint/no-misused-promises */
import yargs from "yargs";
import { Command, ExtractSecretKey, Status, History } from "./commands";

export const cli = async (): Promise<void> => {
  await yargs
    .command(
      "extract-secret-key <payload>",
      "Extract a secret key from a QR code payload",
      ExtractSecretKey.builder,
      ExtractSecretKey.handler
    )
    .command(
      "status <uuid>",
      "Show SESAME status.",
      Status.builder,
      Status.handler
    )
    .command(
      "history <uuid>",
      "Show histories of operations.",
      History.builder,
      History.handler
    )
    .command(
      "command <command> <uuid>",
      "Command SESAME",
      Command.builder,
      Command.handler
    )
    .parse();
};
