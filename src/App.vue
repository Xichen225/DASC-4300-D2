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
    <n-card style="background-color: #ffffff;height: 60px; display: flex;z-index: 999;
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
          Check Table
        </v-btn>
      </div>
      <div style="display: inline-block" :class="{'choose-line':(routeName === '/setting'),'text-tag':true}">
        <v-btn size="x-large" variant="text" @click="goPages('setting')">
          Settings
        </v-btn>
      </div>
    </n-card>

    <main style="width: 100vw;background-color: rgb(255,255,255);padding-top: 60px">
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>

.choose-line{
  border-bottom: solid 5px #228bec;
}
</style>
