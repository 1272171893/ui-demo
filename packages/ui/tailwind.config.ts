import type { Config } from "tailwindcss";
import sharedConfig from "gary-tailwind";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "gary-",
  presets: [sharedConfig],
};

export default config;
