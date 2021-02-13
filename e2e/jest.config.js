module.exports = {
	preset: 'jest-playwright-preset',
	verbose: true,
	// testURL: 'http://localhost/',
	collectCoverage: false,
	coverageDirectory: '<rootDir>/test-coverage',
	collectCoverageFrom: ['../src/app/**', '!../src/app/**/*.spec.ts'],
	coveragePathIgnorePatterns: [
		'main.ts',
		'polyfills.ts',
		'public_api.ts',
		'.module.ts',
		'.interface.ts',
		'.guard.ts',
	],
	coverageThreshold: {
		global: {
			statements: 95,
			branches: 92,
			functions: 99,
			lines: 99,
		},
		'./**/*.ts': {
			statements: 95,
			branches: 50,
			functions: 95,
			lines: 95,
		},
	},
	setupFilesAfterEnv: [/*'<rootDir>/jest.setup.ts',*/ 'jest-extended'],
	testMatch: ['<rootDir>/src/**/*.e2e-spec.ts'],
	// testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/src/'],
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.json',
			stringifyContentPathRegex: '\\.html$',
			diagnostics: {
				ignoreCodes: [151001],
			},
		},
	},
};
