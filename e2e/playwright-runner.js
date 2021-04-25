const PlaywrightRunner = require('jest-playwright-preset/lib/PlaywrightRunner')
	.default;

class CustomRunner extends PlaywrightRunner {
	constructor(...args) {
		super(...args);
	}

	async runTests(tests, watcher, onStart, onResult, onFailure, options) {
		options.serial = false;
		await super.runTests(tests, watcher, onStart, onResult, onFailure, options);
	}
}

module.exports = CustomRunner;
