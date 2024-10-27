<template>
  <n-button type="success" size="large" style="color: white;font-size: 23px"
      @click="exportToCsv">Export Data</n-button>
</template>

<script>
import {NButton} from "naive-ui";
export default {
  components:{
    NButton
  },
  props: {
    dataset: {
      type: Object,
      required: true
    }
  },
  methods: {
    exportToCsv() {
      const { head, body } = this.dataset;
      let csvContent = '';

      // 添加表头
      csvContent += head.join(',') + '\n';

      // 添加数据行
      body.forEach(row => {
        csvContent += row.join(',') + '\n';
      });

      // 编码 CSV 内容为 data URL
      const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);

      // 创建一个链接元素
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'dataset.csv');
      link.style.visibility = 'hidden';

      if (document.body) {
        // 将链接元素添加到文档中
        document.body.appendChild(link);
        link.click();

        // 移除链接元素
        document.body.removeChild(link);
      }
    }
  }
};
</script>
