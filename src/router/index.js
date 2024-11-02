import { createRouter, createWebHistory } from 'vue-router'

import { route as modulesRoute } from '../modules'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...modulesRoute],
})

export default router
