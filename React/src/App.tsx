import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DateRangeBox from 'devextreme-react/date-range-box';
import type { DateRangeBoxTypes } from 'devextreme-react/date-range-box';
import notify from 'devextreme/ui/notify';

function App(): JSX.Element {
  const [startDate] = useState<Date>(new Date());
  const [endDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() + 7)));
  const [minDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() - 14)));
  const [maxDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() + 14)));

  const onValueChanged = useCallback((e: DateRangeBoxTypes.ValueChangedEvent) => {
    if (e.value && e.value.length === 2) {
      notify('Date range selected successfully', 'success', 2000);
    }
  }, []);

  return (
    <div id="app-container">
      <DateRangeBox
        startDate={startDate}
        endDate={endDate}
        min={minDate}
        max={maxDate}
        startDateLabel="Start"
        endDateLabel="End"
        labelMode="floating"
        displayFormat="EEEE, MMM d"
        useMaskBehavior={true}
        showClearButton={true}
        openOnFieldClick={false}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}

export default App;
