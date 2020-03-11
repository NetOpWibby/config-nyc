# @webb/config-nyc

> Opinionated Istanbul configuration



## Install

```sh
# Install this module, with Istanbul's CLI
$ npm i nyc @webb/config-nyc  -D
```



## Usage

### .nycrc

```json
{
  "extends": "@webb/config-nyc"
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



## Notes

- This configuration is focused on TypeScript development. It should still work for ES5 projects, just specify the file extensions you wish to target for code coverage.
- You should enable sourcemaps in your `tsconfig.json` file.
