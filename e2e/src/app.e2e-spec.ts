beforeAll(async () => {
	await page.goto('http://localhost:4200/');
});
describe('app home page', () => {
	it('should display a media object with a title', async () => {
		const content = await page.textContent(
			'app-media-object:first-of-type >> h3'
		);
		expect(content).toBe('Media Object Title');
	});

	it('should have a title', async () => {
		// This test should fail and cause playwright to take a screenshot
		const title = await page.textContent(
			'app-media-object:first-of-type >> h3'
		);
		expect(title).toBe('XXXXXXXXX');
	});
});
