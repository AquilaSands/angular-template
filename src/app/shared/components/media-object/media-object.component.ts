import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-media-object',
	templateUrl: './media-object.component.html',
	styleUrls: ['./media-object.component.css'],
})
export class MediaObjectComponent {
	@Input() reverse = false;

	@Input() mediaVerticalAlignment: 'top' | 'center' | 'bottom' = 'top';
}
