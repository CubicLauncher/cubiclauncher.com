import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NProgress from 'nprogress'
import '../assets/css/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

NProgress.configure({ showSpinner: true }) // oculta el spinner si quieres

// Inicia NProgress antes de cada navegación
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// Finaliza NProgress cuando la navegación ha terminado
router.afterEach(() => {
  NProgress.done()
})

export default router
