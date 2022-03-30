import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatFact from '../views/CatFact.vue'
import SimpleForm from '../views/SimpleForm.vue'
import UniversityApi from '../views/UniversityApi.vue'
import SimpleSearch from '../views/SimpleSearch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catfact',
    name: 'CatFact',
    component: CatFact
  },
  {
    path: '/simpleform',
    name: 'SimpleForm',
    component: SimpleForm
  },
  {
    path: '/univerapi',
    name: 'UniverityApi',
    component: UniversityApi
  },
  {
    path: '/search',
    name: 'SimpleSearch',
    component: SimpleSearch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
