export const generateHexToRgba = (hex: string, opacity: number): string => {
	// Remove the '#' character if it's present
	hex = hex.replace('#', '');

	// Convert the hex value to RGB values
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// Create the RGBA string
	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
