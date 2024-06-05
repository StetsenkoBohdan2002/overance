import { createRouter, createWebHistory } from 'vue-router';
import FormBlock from '@/components/Form/FormBlock.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/form',
      name: 'form',
      component: FormBlock
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/form') {
    next('/form');
  } else {
    next();
  }
});

export default router;
