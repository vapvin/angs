import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test } from './components/test.component';
import { Test2 } from './components/test/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    Test,
    Test2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
