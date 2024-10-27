<template>
  <div class="table-container">
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th v-for="(header, index) in dataset.head" :key="index">{{ header }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in dataset.body" :key="rowIndex">
        <td>{{ rowIndex + 1 }}</td>
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    dataset: {
      type: Object,
      required: true
    }
  },
};
</script>

<style>
.table-container {
  overflow-x: auto;
  overflow-y: auto;
  max-height: 500px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  white-space: nowrap; /* 确保单元格内容不换行 */
}
</style>
