<script>
import {NButton,NCard} from "naive-ui";
export default{
  components:{NButton, NCard},
  methods:{
    goPages(page){
      const pagePath = '/'+page
      this.$router.push(pagePath)
    }
  },
  computed:{
    routeName(){
      return this.$route.fullPath
    }
  }

}
</script>
<template>
  <div>
    <n-card style="background-color: #ffffff;height: 60px; display: flex;
     width: 100vw; position: fixed; align-items: center; justify-content: center">

      <div style="display: inline-block" :class="{'choose-line':(routeName === '/')}">
        <v-btn size="x-large" variant="text" @click="goPages('')">
          Home
        </v-btn>
      </div>
      <div style="display: inline-block" :class="{'choose-line':(routeName === '/instruct'),'text-tag':true}">
        <v-btn size="x-large" variant="text"  @click="goPages('instruct')">
          Instruction
        </v-btn>
      </div>
      <div style="display: inline-block" :class="{'choose-line':(routeName === '/vision'),'text-tag':true}">
        <v-btn size="x-large" variant="text" @click="goPages('vision')">
          Check Chart
        </v-btn>
      </div>
      <div style="display: inline-block" :class="{'choose-line':(routeName === '/setting'),'text-tag':true}">
        <v-btn size="x-large" variant="text" @click="goPages('setting')">
          Save
        </v-btn>
      </div>
    </n-card>

    <main style="width: 100vw;height: 100vh;background-color: rgba(248,255,248,0.8);padding-top: 60px">
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
.text-tag{
  margin-left: 80px;
}
.choose-line{
  border-bottom: solid 5px #228bec;
}
</style>
