import test from "ava";
import { expect } from "chai";
import chalk from "chalk";

import * as utils from "../libs/Noise";

var noise = new utils.Noise();

(function(val) {
	test(`Noise.simplex2(): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(noise.simplex2(0.05, 0.05));

(function(val) {
	test(`Noise.simplex3(): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(noise.simplex3(0.005, 0.005, 0.005));

(function(val) {
	test(`Noise.perlin2(): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(noise.perlin2(0.05, 0.05));

(function(val) {
	test(`Noise.perlin3(): ${chalk.blue(val)}`, () => {
		expect(val).to.be.a("number");
	});
})(noise.perlin3(0.05, 0.05, 0.05));
