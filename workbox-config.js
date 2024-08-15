module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,png,ico,html,txt,css,js,ttf}'
	],
	swDest: 'y',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^source/
	]
};