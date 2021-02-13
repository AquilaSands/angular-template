module.exports = {
	preset: 'jest-preset-angular',
	verbose: true,
	testURL: 'http://localhost/',
	collectCoverage: true,
	coverageDirectory: 'dist/test-coverage',
	collectCoverageFrom: ['src/app/**/*.ts'],
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
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts', 'jest-extended'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json',
			stringifyContentPathRegex: '\\.html$',
			diagnostics: {
				ignoreCodes: [151001],
			},
		},
	},
};
