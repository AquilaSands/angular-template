import { RouterTestingModule } from '@angular/router/testing';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let spectator: Spectator<AppComponent>;
	const createComponent = createRoutingFactory({
		component: AppComponent,
		imports: [RouterTestingModule],
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should create the app', () => {
		const app = spectator.component;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'tailwind-app'`, () => {
		const app = spectator.component;
		expect(app.title).toEqual('tailwind-app');
	});

	it('should render title', () => {
		expect(spectator.query('.content span')).toHaveText(
			'tailwind-app app is running!'
		);
	});
});
