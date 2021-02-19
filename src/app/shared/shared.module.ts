import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MediaObjectComponent } from './components/media-object/media-object.component';

@NgModule({
	declarations: [MediaObjectComponent],
	imports: [CommonModule, FontAwesomeModule],
	exports: [CommonModule, FontAwesomeModule, MediaObjectComponent],
})
export class SharedModule {}
