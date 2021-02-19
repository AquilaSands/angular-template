import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent, ContentLayoutComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
