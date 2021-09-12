import yargs from "yargs";
import { extractSecretKey } from "../../utils";

interface Arguments {
  payload: string;
}

export const builder = (argv: yargs.Argv): yargs.Argv<Arguments> =>
  argv.positional("payload", { type: "string", demandOption: true });

export const handler = (args: Arguments): void => {
  const secretKey = extractSecretKey(args.payload);
  console.log(secretKey);
};
