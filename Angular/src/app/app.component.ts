import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  startDate: Date = new Date();
  endDate: Date = new Date(new Date().setDate(new Date().getDate() + 7)); 
  minDate: Date = new Date(new Date().setDate(new Date().getDate() - 14));
  maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 14));

  valueChanged = (e) => {
    console.log(e.value);
    console.log(e.previousValue);
  }
}
