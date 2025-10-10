$(() => {
  const dateRangeBox = $('#date-range-box').dxDateRangeBox({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    min: new Date(new Date().setDate(new Date().getDate() - 14)),
    max: new Date(new Date().setDate(new Date().getDate() + 14)),
    startDateLabel: 'Start',
    endDateLabel: 'End',
    labelMode: 'floating',
    displayFormat: 'EEEE, MMM d',
    useMaskBehavior: true,
    showClearButton: true,
    openOnFieldClick: false,
    onValueChanged: (e) => {
      if (e.value && e.value.length === 2) {
        DevExpress.ui.notify('Date range selected successfully', 'success', 2000);
      }
      // console.log('Current value:', e.value);
      // console.log('Previous value:', e.previousValue);
    },
  }).dxDateRangeBox('instance');
});
