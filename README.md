# Jamli

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://lbesson.mit-license.org/)
[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

Refer to [TSDX](https://github.com/jaredpalmer/tsdx) repository if you want to change any config file (jest, rollup,...) or just learn more.

### Development

> `yarn start`

Runs the project in development/watch mode. Project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

### Build

> `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### Testing

> `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### Committing

When committing changes please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.
