import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
import testimonialView from "@/views/TestimonialView.vue";
import blogView from "@/views/BlogView.vue";
import FishView from "@/views/FishView.vue";


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
    {
      path: '/fish',
      name: 'fish',
      component: FishView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: blogView,
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component: testimonialView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
  ],
})

export default router
