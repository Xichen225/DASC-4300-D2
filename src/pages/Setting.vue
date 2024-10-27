<script>
import {NButton} from "naive-ui";
import {dataFour, settings, dataFive} from "@/store/store.js";
import ExportChart from "@/components/ExportChart.vue";

export default {
  name: "Setting",
  components:{
    NButton,
    ExportChart
  },
  data(){
    return{
      settings,
      dataFour,
      dataFive
    }
  }
}
</script>

<template>
  <div style="align-items: center;justify-content: center;display: flex;
   flex-direction: column;padding-top: 170px">
    <span style="font-size: 30px;font-weight: bolder">Settings</span>
    <div>1) You are now collecting the data for
      <span style="color: #228bec;font-weight: bolder;font-size: 30px">
        {{settings.collectionMode}}
      </span>
    </div>

    <n-button @click="settings.changeMode()" size="large" type="warning"
    style="color: white;font-size: 23px">Switch</n-button>

    <div style="margin-top: 50px">2) Export the csv file</div>

    <export-chart :dataset="settings.cMode? dataFour.dataset:dataFive.dataset"></export-chart>
  </div>
</template>

