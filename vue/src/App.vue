<template>
  <div id="app">
    <DxDateRangeBox
      :start-date="startDate"
      :end-date="endDate" 
      :min="minDate"
      :max="maxDate"
      start-date-label="Start"
      end-date-label="End"
      label-mode="floating"
      display-format="EEEE, d 'of' MMM"
      :use-mask-behavior="true"
      :show-clear-button="true"
      :open-on-field-click="false"
      @value-changed="onValueChanged"
    />
  </div>
</template>

<script>
import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

export default {
  name: 'App',
  components: {
    DxDateRangeBox
  },
  data() {
    return {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
      minDate: new Date(new Date().setDate(new Date().getDate() - 14)),
      maxDate: new Date(new Date().setDate(new Date().getDate() + 14)),
    }
  },
  methods: {
    onValueChanged(e) {
      console.log(e.previousValue);
      console.log(e.value);
    },
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
