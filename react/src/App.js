import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import './App.css';

import { DateRangeBox } from 'devextreme-react/date-range-box';

class App extends React.Component {
  startDate = new Date();
  endDate = new Date(new Date().setDate(new Date().getDate() + 7)); 
  minDate = new Date(new Date().setDate(new Date().getDate() - 14));
  maxDate = new Date(new Date().setDate(new Date().getDate() + 14));

  constructor(props) {
    super(props);
    this.valueChanged = this.onValueChanged.bind(this);
  }   
  
  onValueChanged = (e) => {
    console.log(e.previousValue);
    console.log(e.value);
  }  
  
  render() {
    return (
      <div className="App">
        <DateRangeBox
            startDate={this.startDate}
            endDate={this.endDate}
            min={this.minDate}
            max={this.maxDate}
            startDateLabel="Start"
            endDateLabel="End"
            labelMode="floating"
            displayFormat="EEEE, d 'of' MMM"
            useMaskBehavior={true}
            showClearButton={true}
            openOnFieldClick={false}
            onValueChanged={this.onValueChanged}
        />
      </div>
    );    
  }

}

export default App;
