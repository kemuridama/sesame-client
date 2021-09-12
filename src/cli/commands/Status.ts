import yargs from "yargs";
import { Sesame } from "../../Sesame";

interface Arguments {
  uuid: string;
  apiKey?: string;
}

export const builder = (argv: yargs.Argv): yargs.Argv<Arguments> =>
  argv
    .positional("uuid", { type: "string", demandOption: true })
    .option("apiKey", { type: "string" });

export const handler = async (args: {
  uuid: string;
  apiKey?: string;
}): Promise<void> => {
  const apiKey = args.apiKey || process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Require a API key.");
  }

  const sesame = new Sesame(args.uuid, apiKey);
  const response = await sesame.getStatus();
  console.log(response);
};
