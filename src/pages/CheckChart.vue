<script>
import {NButton, NInputNumber} from "naive-ui";
import {dataFour,dataFive,settings} from "@/store/store.js";
import VisionCharts from "@/components/VisionCharts.vue";
export default {
  name: "CheckChart",
  components:{
    NButton,
    NInputNumber,
    VisionCharts
  },
  data(){
    return{
      dataFour,
      dataFive,
      settings,
      rowId: 0
    }
  },
}
</script>

<template>
  <div>
    <vision-charts :dataset="settings.cMode? dataFour.dataset:dataFive.dataset"></vision-charts>
    <div style="padding: 30px">
      <n-input-number v-model:value="rowId" clearable placeholder="Number" size="large"
                      :show-button="false"/>
    </div>


    <div style="display: flex;align-items: center;justify-content: center;padding-top: 10px">
      <n-button @click="dataFour.deleteRow(rowId-1)" size="large" v-if="settings.cMode" type="error"
                style="color: white;font-weight: bold;font-size: 23px">
        delete row
      </n-button>
      <n-button @click="dataFive.deleteRow(rowId-1)" size="large" v-else type="error"
                style="color: white;font-weight: bold;font-size: 23px">
        delete row
      </n-button>
    </div>
  </div>


</template>

