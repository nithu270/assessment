import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue' 
import SignupPage from '../components/SignupPage.vue'
import LoginPage from '../components/LoginPage.vue'
import CourseAvailability from '@/components/CourseAvailability.vue'
import DashboardPage from '../components/DashboardPage'
import MycoursePage from '../components/MycoursePage'
import AptitudePage from '../components/AptitudePage'


const routes = [
  { path: '/', component: HelloWorld },           
  { path: '/signup', component: SignupPage },     
  { path: '/LoginPage', component: LoginPage},
{ path: '/Course', component: CourseAvailability},
{ path: '/Dashboard', component: DashboardPage},
{ path: '/mycourse', component: MycoursePage},
{ path: '/apti', component: AptitudePage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
