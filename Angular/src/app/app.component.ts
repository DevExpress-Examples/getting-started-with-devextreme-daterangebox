import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxDateRangeBoxTypes } from 'devextreme-angular/ui/date-range-box';
import { DateRangeData, DateRangeOptions } from './app.types';

import { DxDateRangeBoxModule } from 'devextreme-angular/ui/date-range-box';

@Component({
    selector: 'app-root',
    imports: [DxDateRangeBoxModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dateRangeData: DateRangeData = {
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    minDate: new Date(new Date().setDate(new Date().getDate() - 14)),
    maxDate: new Date(new Date().setDate(new Date().getDate() + 14)),
  };

  dateRangeOptions: DateRangeOptions = {
    startDateLabel: 'Start',
    endDateLabel: 'End',
    labelMode: 'floating',
    displayFormat: 'EEEE, MMM d',
    useMaskBehavior: true,
    showClearButton: true,
    openOnFieldClick: false,
  };

  onValueChanged(e: DxDateRangeBoxTypes.ValueChangedEvent): void {
    if (e.value && e.value.length === 2) {
      notify('Date range selected successfully', 'success', 2000);
    }
  }
}
