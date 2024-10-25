<template>
  <div style="padding: 50px">
    <span>Choose the Date:</span>
    <n-date-picker
        v-model:value="range" type="daterange" clearable :on-update-show="getDayNr"
    size="large"/>

    <div style="display: flex">
      <span>From day</span>
      <n-input-number v-model:value="dayNr[0]" clearable placeholder="Day" size="large"
                      style="display: inline-block;flex: 1" :show-button="false"/>
      <span>To day</span>
      <n-input-number v-model:value="dayNr[1]" clearable placeholder="Day" size="large"
                      style="display: inline-block; flex: 1" :show-button="false"/>
      <span>In year</span>
      <n-input-number v-model:value="yearNumber" clearable placeholder="Year" size="large"
                      style="display: inline-block; flex: 1" :show-button="false"/>
    </div>
    <span>Mean day number: {{MDayNr}}</span>
<span>Plot name</span>
    <n-input v-model:value="plotName"
        type="text" placeholder="No side spaces!" clearable size="large" :allow-input="noSideSpace"/>

    <span>Pot ID</span>
    <n-input-number v-model:value="potID" clearable placeholder="ID" size="large"
                    style="display: inline-block; flex: 1" :show-button="false"/>
    <span>Biomass</span>
    <n-input-number v-model:value="biomass" clearable placeholder="Number" size="large"
                    style="display: inline-block; flex: 1" :show-button="false"/>
    <span>Location Type</span>
    <n-input-number v-model:value="locateType" clearable placeholder="Type by number" size="large"
                    style="display: inline-block; flex: 1" :show-button="false"/>
    <span>East Longitude</span>
    <n-input-number v-model:value="ENumber" clearable placeholder="Number" size="large"
                    style="display: inline-block; flex: 1" :show-button="false"/>

    <span>North Latitude</span>
    <n-input-number v-model:value="NNumber" clearable placeholder="Number" size="large"
                    style="display: inline-block; flex: 1" :show-button="false"/>



    <n-button type="info" style="color: white;font-size: 23px"
              size="large" @click="writeData">Add</n-button>
    <n-button type="info" style="color: white;font-size: 23px"
              size="large" @click="resetData">Reset</n-button>

  </div>
</template>

<script>
import {NDatePicker,NInputNumber,NButton,NInput} from "naive-ui";
import {dataFour} from "@/store/store.js";
export default {
  components: {
    NDatePicker,
    NInputNumber,
    NButton,
    NInput
  },
  data() {
    return {
      dataFour,
      range: null,
      dateText: [null,null],


      dayNr: [null,null],
      potID: null,
      locateType: null,
      ENumber: null,
      NNumber: null,
      MDayNr: null,
      yearNumber: null,
      biomass: null,
      plotName: null,

    }
  },
  methods: {
    noSideSpace(value){
return !value.startsWith(" ") && !value.endsWith(" ")
    },
    getYear(timestamp) {
  const date = new Date(timestamp);
  return date.getFullYear();
},
    getDate(timestamp) {
      const date = new Date(timestamp);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      return `${day}-${month}`;
    },
    getDayOfYear(timestamp) {
      const date = new Date(timestamp);
      const startOfYear = new Date(date.getFullYear(), 0, 1);
      const diff = date - startOfYear;
      const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
      return Math.floor(diff / oneDay) + 1;
    },
    getDayNr(show){
      if(!show && this.range!==null){
        this.dayNr = this.range.map(this.getDayOfYear);
        this.yearNumber = this.getYear(this.range[0])
        this.MDayNr = (this.dayNr[0]+this.dayNr[1])/2
        this.dateText[0]=this.getDate(this.range[0])
        this.dateText[1]=this.getDate(this.range[1])
      }
    },

    writeData(){
      const row = []
      if(this.plotName === null){this.plotName = 'NA'}
      if(this.yearNumber === null){this.yearNumber = 'NA'}
      if(this.dateText[0] === null){this.dateText[0] = 'NA'}
      if(this.dateText[1] === null){this.dateText[1] = 'NA'}
      if(this.dayNr[0] === null){this.dayNr[0] = 'NA'}
      if(this.dayNr[1] === null){this.dayNr[1] = 'NA'}
      if(this.biomass === null){this.biomass = 'NA'}
      if(this.potID === null){this.potID = 'NA'}
      if(this.ENumber === null){this.ENumber = 'NA'}
      if(this.NNumber === null){this.NNumber = 'NA'}
      if(this.locateType === null){this.locateType = 'NA'}
      if(this.MDayNr === null){this.MDayNr = 'NA'}
      row.push(this.plotName);
      row.push(this.yearNumber);
      row.push(this.dateText[0]);
      row.push(this.dateText[1]);
      row.push(this.dayNr[0]);
      row.push(this.dayNr[1]);
      row.push(this.biomass);
      row.push(this.potID);
      row.push(this.ENumber);
      row.push(this.NNumber);
      row.push(this.locateType);
      row.push(this.MDayNr);
      this.dataFour.addRow(row)
      this.resetData()
    },
    resetData(){
      this.range = null
      this.plotName = null;
      this.yearNumber = null;
      this.dateText[0] = null;
      this.dateText[1] = null;
      this.dayNr[0] = null;
      this.dayNr[1] = null;
      this.biomass = null;
      this.potID = null;
      this.ENumber = null;
      this.NNumber = null;
      this.locateType = null;
      this.MDayNr = null;
    }
  },
};
</script>
