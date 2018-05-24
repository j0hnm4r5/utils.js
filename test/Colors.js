import test from "ava";
import { expect } from "chai";
import chalk from "chalk";

import * as utils from "../libs/colors";

(function(val) {
	test.serial(`randomHexColor(): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("string");
	});
})(utils.randomHexColor());

(function(val) {
	test.serial(`randomHexColor("0A"): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("string");
	});
})(utils.randomHexColor("0A"));

(function(val) {
	test.serial(`HSVtoRGB(0.5, 0.5, 0.5): ${chalk.blue(JSON.stringify(val))}`, () => {
		expect(val).to.be.an("object");
	});
})(utils.HSVtoRGB(0.5, 0.5, 0.5));

(function(val) {
	test.serial(
		`HSVtoRGB({ h: 0.5, s: 0.5, v: 0.5 }): ${chalk.blue(JSON.stringify(val))}`,
		() => {
			expect(val).to.be.an("object");
		}
	);
})(utils.HSVtoRGB({ h: 0.5, s: 0.5, v: 0.5 }));
