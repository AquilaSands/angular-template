const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment')
	.default;

class CustomEnvironment extends PlaywrightEnvironment {
	async setup() {
		await super.setup();
		// Your setup
	}

	async teardown() {
		// Your teardown
		await super.teardown();
	}

	async handleTestEvent(event) {
		// Grab screenshot when test fails
		if (event.name === 'test_done' && event.test.errors.length > 0) {
			const parentName = event.test.parent.name.replace(/\W/g, '-');
			const specName = event.test.name.replace(/\W/g, '-');
			const { browserName, device } = this._config;
			const deviceName = typeof device === 'string' ? device : device.name;

			await this.global.page.screenshot({
				path: `e2e/test-results/screenshots/${browserName}/${deviceName}/${parentName}_${specName}.png`,
			});
		}
	}
}

module.exports = CustomEnvironment;
