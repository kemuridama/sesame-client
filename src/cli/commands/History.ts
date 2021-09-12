import yargs from "yargs";
import { Sesame } from "../../Sesame";

interface Arguments {
  uuid: string;
  apiKey?: string;
  page?: number;
  limit?: number;
}

export const builder = (argv: yargs.Argv): yargs.Argv<Arguments> =>
  argv
    .positional("uuid", { type: "string", demandOption: true })
    .option("apiKey", { type: "string" })
    .option("page", { type: "number" })
    .option("limit", { type: "number" });

export const handler = async (args: Arguments): Promise<void> => {
  const apiKey = args.apiKey || process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Require a API key.");
  }

  const sesame = new Sesame(args.uuid, apiKey);
  const response = await sesame.getHistory({ page: args.page, lg: args.limit });
  console.log(response);
};
