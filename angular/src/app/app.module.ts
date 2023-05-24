import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DxDateRangeBoxModule } from 'devextreme-angular';

@NgModule({
  imports:      [ BrowserModule, DxDateRangeBoxModule, ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
