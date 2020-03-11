# @webb/config-nyc

> Opinionated Istanbul configuration



## Install

```sh
# Install this module, with Istanbul's CLI and other
# necessary modules
$ npm i nyc source-map-support ts-node @webb/config-nyc  -D
```



## Usage

### .nycrc

```json
{
  extends: "@webb/config-nyc"
}
```

### package.json

```json
{
  "nyc": {
    "extends": "@webb/config-nyc"
  }
}
```



## Note

This configuration is focused on TypeScript development. It should still work for ES5 projects, just specify the file extensions you wish to target for code coverage.
