import { generateHexToRgba } from 'common/helpers/generateHexToRgba';

describe('generateHexToRgba', () => {
	test('returns the correct RGBA string with opacity', () => {
		const hex = '#3c5a99';
		const opacity = 0.5;
		const rgba = generateHexToRgba(hex, opacity);
		expect(rgba).toBe('rgba(60, 90, 153, 0.5)');
	});
});
