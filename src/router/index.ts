import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import NProgress from 'nprogress'
import '../assets/css/nprogress.css'
=======
import AboutView from '../views/AboutView.vue'
>>>>>>> 1a849e340e48e0f2c80df648eabc3531a7693a89

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
<<<<<<< HEAD
      component: HomeView,
=======
      component: HomeView
>>>>>>> 1a849e340e48e0f2c80df648eabc3531a7693a89
    },
    {
      path: '/about',
      name: 'about',
<<<<<<< HEAD
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
=======
      component: AboutView
    }
  ]
})

export default router 
>>>>>>> 1a849e340e48e0f2c80df648eabc3531a7693a89
