import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeListComponent } from './jokelist.component';
import { JokeComponent } from './joke.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
