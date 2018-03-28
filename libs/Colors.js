/**
 * Generate a random hex color string
 *
 * @see {@link https://stackoverflow.com/a/1484514}
 *
 * @param {string} [letters=0123456789ABCDEF] - The characters to randomly select from. This can be used to create primarily light or dark colors.
 * @returns {string} Hex color string
 */
export function randomHexColor(letters = "0123456789ABCDEF") {
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}

	return color;
}

/**
 * Converts a color from the HSV color space to the RGB color space
 *
 * @see {@link https://stackoverflow.com/a/17243070}
 *
 * @param {number} h - Hue [0..1] or {h: [0..1], s: [0..1], v: [0..1]}
 * @param {number} [s] - Saturation [0..1]
 * @param {number} [v] - Value [0..1]
 *
 * @returns {object} An object containing the converted RGB values: {r: [0..255], g: [0..255], b: [0..255]}
 */
export function HSVtoRGB(h, s, v) {
	var r, g, b, i, f, p, q, t;
	if (arguments.length === 1) {
		(s = h.s), (v = h.v), (h = h.h);
	}
	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0:
			(r = v), (g = t), (b = p);
			break;
		case 1:
			(r = q), (g = v), (b = p);
			break;
		case 2:
			(r = p), (g = v), (b = t);
			break;
		case 3:
			(r = p), (g = q), (b = v);
			break;
		case 4:
			(r = t), (g = p), (b = v);
			break;
		case 5:
			(r = v), (g = p), (b = q);
			break;
	}
	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255),
	};
}

/**
 * Converts a color from the RGB color space to the HSV color space
 *
 * @see {@link https://stackoverflow.com/a/17243070}
 *
 * @param {number} r - Red [0..255] or {h: [0..255], s: [0..255], v: [0..255]}
 * @param {number} [g] - Green [0..255]
 * @param {number} [b] - Blue [0..255]
 *
 * @returns {object} An object containing the converted HSV values: {h: [0..1], s: [0..1], v: [0..1]}
 */
export function RGBtoHSV(r, g, b) {
	if (arguments.length === 1) {
		(g = r.g), (b = r.b), (r = r.r);
	}
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b),
		d = max - min,
		h,
		s = max === 0 ? 0 : d / max,
		v = max / 255;

	switch (max) {
		case min:
			h = 0;
			break;
		case r:
			h = g - b + d * (g < b ? 6 : 0);
			h /= 6 * d;
			break;
		case g:
			h = b - r + d * 2;
			h /= 6 * d;
			break;
		case b:
			h = r - g + d * 4;
			h /= 6 * d;
			break;
	}

	return {
		h: h,
		s: s,
		v: v,
	};
}

/**
 * Converts a color from the HSV color space to the HSL color space
 *
 * @see {@link https://stackoverflow.com/a/17243070}
 *
 * @param {number} h - Hue [0..1] or {h: [0..1], s: [0..1], v: [0..1]}
 * @param {number} [s] - Saturation [0..1]
 * @param {number} [v] - Value [0..1]
 *
 * @returns {object} An object containing the converted HSL values: {h: [0..1], s: [0..1], l: [0..1]}
 */
export function HSVtoHSL(h, s, v) {
	if (arguments.length === 1) {
		(s = h.s), (v = h.v), (h = h.h);
	}
	var _h = h,
		_s = s * v,
		_l = (2 - s) * v;
	_s /= _l <= 1 ? _l : 2 - _l;
	_l /= 2;

	return {
		h: _h,
		s: _s,
		l: _l,
	};
}

/**
 * Converts a color from the HSL color space to the HSV color space
 *
 * @see {@link https://stackoverflow.com/a/17243070}
 *
 * @param {number} h - Hue [0..1] or {h: [0..1], s: [0..1], v: [0..1]}
 * @param {number} [s] - Saturation [0..1]
 * @param {number} [l] - Lightness [0..1]
 *
 * @returns {object} An object containing the converted HSV values: {h: [0..1], s: [0..1], v: [0..1]}
 */
export function HSLtoHSV(h, s, l) {
	if (arguments.length === 1) {
		(s = h.s), (l = h.l), (h = h.h);
	}
	var _h = h,
		_s,
		_v;

	l *= 2;
	s *= l <= 1 ? l : 2 - l;
	_v = (l + s) / 2;
	_s = 2 * s / (l + s);

	return {
		h: _h,
		s: _s,
		v: _v,
	};
}
