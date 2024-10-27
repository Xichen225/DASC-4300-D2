<template>
  <div>
    <div style="padding-right: 50px;padding-left: 50px" v-if="settings.cMode">
      <span>Choose the Date:</span>
      <n-date-picker
          v-model:value="range" type="daterange" clearable :on-update-show="getDayNr"
          size="large"/>
      <span>Mean day number: {{MDayNr}}</span>
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

      <span>Plot name</span>
      <n-input v-model:value="plotName"
               type="text" placeholder="No side spaces!" clearable size="large" :allow-input="noSideSpace"/>

      <span>Pot ID</span>
      <n-input-number v-model:value="potID" clearable placeholder="ID" size="large"
                       :show-button="false"/>
      <span>Biomass</span>
      <n-input-number v-model:value="biomass" clearable placeholder="Number" size="large"
                      :show-button="false"/>
      <span>Location Type</span>
      <n-input-number v-model:value="locateType" clearable placeholder="Type by number" size="large"
                      :show-button="false"/>
      <span>East Longitude</span>
      <n-input-number v-model:value="ENumber" clearable placeholder="Number" size="large"
                      :show-button="false"/>

      <span>North Latitude</span>
      <n-input-number v-model:value="NNumber" clearable placeholder="Number" size="large"
                      :show-button="false"/>


<div style="display: flex;align-items: center;justify-content: center; padding-top: 10px;
padding-bottom: 20px">
  <n-button type="info" style="color: white;font-size: 23px"
            size="large" @click="writeData">Add</n-button>
  <n-button type="warning" style="color: white;font-size: 23px" class="ml-12"
            size="large" @click="resetData">Reset</n-button>
</div>


    </div>



    <div style="padding-right: 50px;padding-left: 50px" v-else>
      <span>Plot name</span>
      <n-input v-model:value="plotName"
               type="text" placeholder="No side spaces!" clearable :allow-input="noSideSpace"/>
      <span>Pot ID</span>
      <n-input-number v-model:value="potID" clearable placeholder="ID"
                      :show-button="false"/>
      <div v-for="(item,itemIndex) in sFiveNames">
        {{item}}
        <n-input-number v-model:value="sFiveData[itemIndex]" clearable :show-button="false"/>
      </div>

      <div style="display: flex;align-items: center;justify-content: center; padding-top: 10px;
padding-bottom: 20px">
      <n-button type="info" style="color: white;font-size: 23px"
                size="large" @click="writeData5">Add</n-button>
      <n-button type="warning" style="color: white;font-size: 23px" class="ml-12"
                size="large" @click="resetData5">Reset</n-button>
      </div>
    </div>
  </div>

</template>

<script>
import {NDatePicker,NInputNumber,NButton,NInput} from "naive-ui";
import {dataFour,dataFive,settings} from "@/store/store.js";
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
      dataFive,
      settings,
      range: null,
      dateText: [null,null],

      plotName: null,
      dayNr: [null,null],
      potID: null,
      locateType: null,
      ENumber: null,
      NNumber: null,
      MDayNr: null,
      yearNumber: null,
      biomass: null,

      sFiveNames : [
        'daynr',
        'year',
        'temperature',
        'precipitation',
        'wind.speed',
        'frostdays',
        'sum.precW',
        'nHerbs',
        'nTrees',
        'Nitrogen',
        'pH',
        'Moisture',
        'Light',
        'ellenTemperature',
        'Arable.land',
        'Forest',
        'Grassland',
        'Water'
      ],
      sFiveData: new Array(18).fill(null),
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
      }
    },
    writeData5(){
      const row = []
      if(this.potID === null){this.potID = 'NA'}
      if(this.plotName === null){this.plotName = 'NA'}
      row.push(this.potID)
      row.push(this.plotName)
      const numCol = this.sFiveData.map(item => item === null ? 'NA' : item);
      numCol.forEach(item => row.push(item));
      this.dataFive.addRow(row)
      this.resetData5()
    },
    resetData5(){
      this.potID=null
      this.plotName=null
      this.sFiveData= new Array(18).fill(null)
    },
    writeData(){
      const row = []
      if(this.range !== null){
        this.dateText[0]=this.getDate(this.range[0])
        this.dateText[1]=this.getDate(this.range[1])
      }
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
