# @j0hnm4r5/utils.js

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://prettier.io/)
![code size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg)
[![gitmoji](https://img.shields.io/badge/gitmoji-%F0%9F%98%9C%F0%9F%98%8D-yellow.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)
![license](https://img.shields.io/npm/l/express.svg)

A collection of Javascript utility functions.

## Usage

Either import the entire library:

```javascript
import * as utils from "@j0hnm4r5/utils.js";

utils.convertRange(10, 0, 100, 0, 1000);
new utils.Noise();
utils.randomHexColor();
```

Or import select functions:

```javascript
import { convertRange, Noise, randomHexColor } from "@j0hnm4r5/utils.js";

convertRange(10, 0, 100, 0, 1000);
new Noise();
randomHexColor();
```
