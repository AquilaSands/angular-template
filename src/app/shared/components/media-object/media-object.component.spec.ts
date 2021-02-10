import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaObjectComponent } from './media-object.component';

describe('MediaObjectComponent', () => {
	let component: MediaObjectComponent;
	let fixture: ComponentFixture<MediaObjectComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MediaObjectComponent],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MediaObjectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
