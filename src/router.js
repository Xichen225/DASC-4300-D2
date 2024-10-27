import {createRouter, createWebHistory} from 'vue-router'

import HomeView from './pages/Home.vue'
import SettingView from './pages/Setting.vue'
import InstructionView from "./pages/Instruction.vue";
import CheckChart from "./pages/CheckChart.vue";

const routes = [
  { path: '/', component: HomeView},
  { path: '/setting', component: SettingView},
  {path: '/instruct', component: InstructionView},
  {path: '/vision', component: CheckChart}
]

const router = createRouter({
  history: createWebHistory('/DASC-4300-D2/'),
  routes,
})
export default router
