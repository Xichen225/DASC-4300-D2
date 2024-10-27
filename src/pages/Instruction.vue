<script>
export default {
  name: "Instruction"
}
</script>

<template>
  <div style="display: flex;align-items: center; flex-direction: column;
padding-top: 50px">
    <span style="color: #228bec;font-weight: bolder;font-size: 30px">Instruction</span>
    <span>1)Collect data at <span style="color: #00c853">Home</span> page</span>
    <span>2)Check the data at <span style="color: #00c853">Check Table</span> page, you can also delete the row as wanted</span>
    <span>3)Change the dataset you want to collect via the <span style="color: #00c853">Setting</span> page</span>
    <span>4)Export data in csv format from <span style="color: #00c853">Setting</span> page</span>
    <span style="color: red; margin-top: 50px">
      Note: The input data will be remove if you didn't click 'Add' button at Home page when you are changing to other pages</span>


  </div>
</template>

