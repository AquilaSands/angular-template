module.exports = {
	browsers: ['chromium', 'firefox', 'webkit'],
	devices: [
		'iPhone 7',
		'Pixel 2',
		'Nexus 7',
		{
			name: 'Medium',
			viewport: {
				width: 768,
				height: 1024,
			},
			deviceScaleFactor: 1,
			isMobile: false,
			hasTouch: false,
		},
		{
			name: 'Medium HiDPI',
			viewport: {
				width: 768,
				height: 1024,
			},
			deviceScaleFactor: 2,
			isMobile: false,
			hasTouch: false,
		},
		{
			name: 'Large',
			viewport: {
				width: 1024,
				height: 768,
			},
			deviceScaleFactor: 1,
			isMobile: false,
			hasTouch: false,
		},
		{
			name: 'Large HiDPI',
			viewport: {
				width: 1024,
				height: 768,
			},
			deviceScaleFactor: 2,
			isMobile: false,
			hasTouch: false,
		},
		{
			name: 'XLarge',
			viewport: {
				width: 1920,
				height: 1080,
			},
			deviceScaleFactor: 1,
			isMobile: false,
			hasTouch: false,
		},
		{
			name: 'XLarge HiDPI',
			viewport: {
				width: 1920,
				height: 1080,
			},
			deviceScaleFactor: 2,
			isMobile: false,
			hasTouch: false,
		},
	],
	useDefaultBrowserType: true,
};
