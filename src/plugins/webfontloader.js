/**
 * plugins/webfontloader.js
 */

import WebFont from 'webfontloader';

export function loadFonts() {
	WebFont.load({
		google: {
			families: ['Roboto:100,300,400,500,700,900&display=swap'],
		},
	});
}
