import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { OptionComponent } from './option/option.component';
import { ChoiceDirective } from './choice.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
	StoryComponent,
	OptionComponent,
	ChoiceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
