import { reactive } from 'vue'


export const settings = reactive({
  collectionMode: "s004",
  cMode:'true',
  changeMode(){
    if(this.collectionMode === "s004"){
      this.collectionMode = "s005"
      this.cMode = false
    }
    else{
      this.collectionMode = "s004"
      this.cMode = true
    }
  }
})
export const dataFour = reactive({
  dataset: {
    "head": [
      "plot",
      "year",
      "from",
      "to",
      "from.daynr",
      "to.daynr",
      "biomass",
      "potID",
      "E",
      "N",
      "location.type",
      "mean.daynr"
    ],
    "body": [[1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1]]
  },
  addRow(row){
    this.dataset.body.push(row)
  },
  deleteRow(rowIndex) {
    if (rowIndex >= 0 && rowIndex < this.dataset.body.length) {
      this.dataset.body.splice(rowIndex, 1);
    } else {
    }
  }
})

export const dataFive = reactive({
  dataset: {
    "head" : [
      'potID',
      'plot',
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
    "body": []
  },
  addRow(row){
    this.dataset.body.push(row)
  },
  deleteRow(rowIndex) {
    if (rowIndex >= 1 && rowIndex < this.dataset.body.length) {
      this.dataset.body.splice(rowIndex, 1);
    } else {
    }
  }
})
