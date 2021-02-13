beforeAll(async () => {
	await page.goto('http://localhost:4200/');
});

it('should display a media object with a title', async () => {
	const content = await page.textContent(
		'app-media-object:first-of-type >> h3'
	);
	expect(content).toBe('Media Object Title');
});
