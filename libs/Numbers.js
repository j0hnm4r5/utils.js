/**
 * Converts a value from one range to another
 */
export function convertRange(value, oldMin, oldMax, newMin, newMax) {
	return (value - oldMin) / (oldMax - oldMin) * (newMax - newMin) + newMin;
}
