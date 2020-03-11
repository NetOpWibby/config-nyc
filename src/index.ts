


//  I M P O R T

import { defaults } from "@istanbuljs/schema";

//  U T I L

const { nyc } = defaults;



//  E X P O R T

export = {
  all: true,
  cache: false,
  "check-coverage": true,
  exclude: [
    "coverage",
    "dist",
    "src"
  ],
  extension: [
    ".ts",
    ".tsx"
  ],
  parserPlugins: nyc.parserPlugins.concat("typescript")
};
