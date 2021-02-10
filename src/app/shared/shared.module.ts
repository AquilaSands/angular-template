import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaObjectComponent } from './components/media-object/media-object.component';

@NgModule({
	declarations: [MediaObjectComponent],
	imports: [CommonModule],
	exports: [CommonModule, MediaObjectComponent],
})
export class SharedModule {}
