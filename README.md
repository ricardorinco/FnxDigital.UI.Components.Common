# seven.ui.components.common

This is the repository of the seven.ui.components.common library.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Setup / Installation

> Warning: This application requires [Node.js](https://nodejs.org/) to run.

Install the frameworks dependencies:

```sh
  // Angular CLI
  npm install -g @angular/cli@11.2.4

  // Compodoc
  npm install -g @compodoc/compodoc
```

Install the npm packages dependencies:

```sh
  npm install
```

## Code Quality and Security

This project use SonarQube tool for continuously inspecting the quality and security of codebases.

```sh
  // Sonar Scanner
  npm run sonar
```

## Components available

| Project     | Name                     | Import                                                                               |
| ----------- | ------------------------ | ------------------------------------------------------------------------------------ |
| fnx-crypto  | FnxCryptoService         |  import { FnxCryptoService } from '@fnx-components/crypto';                          |
| fnx-storage | FnxSessionStorageService |  import { FnxSessionStorageService } from '@fnx-components/session-storage.service'; |

## Dependencies

AppJornadaCliente uses the following frameworks.

> Waring: Be cautious when upgrading any frameworks.
> Info: Instructions on how to use the frameworks are available in the documentation.

| Package                    | Version | Documentation                                                                                                        |
| -------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| Crypto-JS                  |  4.0.0  | [https://www.npmjs.com/package/crypto-js](https://www.npmjs.com/package/crypto-js)                                   |
