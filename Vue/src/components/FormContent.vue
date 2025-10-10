<script setup lang="ts">
import type { DateRangeData } from '../types';
import { DxDateRangeBox } from 'devextreme-vue/date-range-box';
import type { DxDateRangeBoxTypes } from 'devextreme-vue/date-range-box';
import notify from 'devextreme/ui/notify';

const dateRangeData: DateRangeData = {
  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
  minDate: new Date(new Date().setDate(new Date().getDate() - 14)),
  maxDate: new Date(new Date().setDate(new Date().getDate() + 14)),
};

const onValueChanged = (e: DxDateRangeBoxTypes.ValueChangedEvent): void => {
  if (e.value && e.value.length === 2) {
    notify('Date range selected successfully', 'success', 2000);
  }
};
</script>

<template>
  <div id="app-container">
    <DxDateRangeBox
      :start-date="dateRangeData.startDate"
      :end-date="dateRangeData.endDate"
      :min="dateRangeData.minDate"
      :max="dateRangeData.maxDate"
      start-date-label="Start"
      end-date-label="End"
      label-mode="floating"
      display-format="EEEE, MMM d"
      :use-mask-behavior="true"
      :show-clear-button="true"
      :open-on-field-click="false"
      @value-changed="onValueChanged"
    />
  </div>
</template>

<style scoped>
#app-container {
  width: 900px;
  position: relative;
  padding: 30px;
  border: 1px solid #ddd;
  margin: 50px auto;
}
</style>
