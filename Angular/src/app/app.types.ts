export interface DateRangeData {
  startDate: Date;
  endDate: Date;
  minDate: Date;
  maxDate: Date;
}

export interface DateRangeOptions {
  startDateLabel: string;
  endDateLabel: string;
  labelMode: 'floating' | 'static' | 'outside' | 'hidden';
  displayFormat: string;
  useMaskBehavior: boolean;
  showClearButton: boolean;
  openOnFieldClick: boolean;
}
