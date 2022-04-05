import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParOuImparComponent } from './par-ou-impar/par-ou-impar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParOuImparComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
