import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import SettingView from './pages/Setting.vue'
import InstructionView from "./pages/Instruction.vue";
import VisionView from "./pages/VisionCharts.vue"

const routes = [
  { path: '/', component: HomeView },
  { path: '/setting', component: SettingView },
  {path: '/instruct', component: InstructionView},
  {path: '/vision', component: VisionView}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router
