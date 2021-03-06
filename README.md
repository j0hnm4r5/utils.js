# @j0hnm4r5/utils.js

[![CircleCI](https://img.shields.io/circleci/project/github/j0hnm4r5/utils.js.svg?style=flat-square)](https://circleci.com/gh/j0hnm4r5/utils.js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
![code size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg?style=flat-square)
[![gitmoji](https://img.shields.io/badge/gitmoji-%F0%9F%98%9C%F0%9F%98%8D-yellow.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)
![license](https://img.shields.io/npm/l/express.svg?style=flat-square)

A collection of Javascript utility functions.

## Installation

**Yarn** (preferred):

`yarn add @j0hnm4r5/utils.js`

or **NPM**:

`npm install @j0hnm4r5/utils.js`

## Usage

Either import the entire library:

```javascript
import * as utils from "@j0hnm4r5/utils.js";

utils.convertRange(10, 0, 100, 0, 1000);
new utils.Noise();
utils.randomHexColor();
```

or import select functions:

```javascript
import { convertRange, Noise, randomHexColor } from "@j0hnm4r5/utils.js";

convertRange(10, 0, 100, 0, 1000);
new Noise();
randomHexColor();
```

## Development

### Testing

Run all tests at once with `yarn test`, develop your tests with `yarn test:watch`

### TODO

*   [ ] Add Documentation with JSDoc
