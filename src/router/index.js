import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import QuizPage from '../pages/QuizPage.vue'
import ResultPage from '../pages/ResultPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/quiz/:category', component: QuizPage },
  { path: '/result', component: ResultPage },
]

const router = createRouter({
  history: createWebHistory('/Dan09_QuizApp/'),
  routes,
})

export default router
