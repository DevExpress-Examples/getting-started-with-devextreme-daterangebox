import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDateRangeBoxModule } from 'devextreme-angular/ui/date-range-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDateRangeBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
