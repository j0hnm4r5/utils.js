/**
 * Converts a value from one range to another
 *
 * @param {number} value - Original value to convert
 * @param {number} oldMin - Minimum value in the original value's range
 * @param {number} oldMax - Maximum value in the original value's range
 * @param {number} [newMin=0] - Minimum value in the converted value's range
 * @param {number} [newMax=1] - Maximum value in the converted value's range
 *
 * @returns {number} The converted value
 */
// eslint-disable-next-line max-params
module.exports.convertRange = (value, oldMin, oldMax, newMin = 0, newMax = 1) => {
	return (value - oldMin) / (oldMax - oldMin) * (newMax - newMin) + newMin;
};

/**
 * Get a random number from [0..<1]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 *
 * @returns {number} A random number from [0..<1]
 */
module.exports.getRandom = () => {
	return Math.random();
};

/**
 * Get a random number from [min..<max]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 *
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 *
 * @returns {number} A random number from [min..<max]
 */
module.exports.getRandomArbitrary = (min, max) => {
	return Math.random() * (max - min) + min;
};

/**
 * Get a random integer from [min..<max]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 *
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 *
 * @returns {number} A random integer from [min..<max]
 */
module.exports.getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Get a random integer from [min...max]
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 *
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 *
 * @returns {number} A random integer from [min...max]
 */
module.exports.getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
