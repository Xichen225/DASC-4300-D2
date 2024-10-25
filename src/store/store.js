import { reactive } from 'vue'

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
    "body": [[1,1,1,1,1,1,1,1,1,1,1,1]]
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
