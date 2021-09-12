import yargs from "yargs";
import { Sesame } from "../../Sesame";
import { CommandOption, CommandOptions } from "../../constants";
import { parseCommand } from "../../utils";

interface Arguments {
  uuid: string;
  command: CommandOption;
  apiKey?: string;
  secretKey?: string;
}

export const builder = (argv: yargs.Argv): yargs.Argv<Arguments> =>
  argv
    .positional("uuid", { type: "string", demandOption: true })
    .positional("command", { choices: CommandOptions, demandOption: true })
    .option("apiKey", { type: "string" })
    .option("secretKey", { type: "string" });

export const handler = async (args: Arguments): Promise<void> => {
  const apiKey = args.apiKey || process.env.API_KEY;
  const secretKey = args.secretKey || process.env.SECRET_KEY;
  if (!apiKey || !secretKey) {
    throw new Error("Require both API key and secret key.");
  }

  const sesame = new Sesame(args.uuid, apiKey, { secretKey });
  const command = parseCommand(args.command);
  await sesame.executeCommand(command);
};
