import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import People from './views/People.vue'
import Planets from './views/Planets.vue'
import Starships from './views/Starships.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/people', component: People },
  { path: '/planets', component: Planets },
  { path: '/starships', component: Starships }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
