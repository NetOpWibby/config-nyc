


//  E X P O R T

export = {
  all: true,
  "check-coverage": true,
  exclude: [
    "coverage",
    "dist",
    "src"
  ],
  extends: "@istanbuljs/nyc-config-typescript",
  extension: [
    ".ts",
    ".tsx"
  ]
};
