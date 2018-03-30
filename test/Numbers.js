import test from "ava";
import { expect } from "chai";
import chalk from "chalk";

import * as utils from "../libs/Numbers";

(function(val) {
	test(`convertRange(5, 0, 10, 0, 100): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(utils.convertRange(5, 0, 10, 0, 100));

(function(val) {
	test(`getRandom(): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(utils.getRandom());

(function(val) {
	test(`getRandomArbitrary(0, 100): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(utils.getRandomArbitrary(0, 100));

(function(val) {
	test(`getRandomInt(0, 100): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(utils.getRandomInt(0, 100));

(function(val) {
	test(`getRandomIntInclusive(0, 100): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(utils.getRandomIntInclusive(0, 100));
