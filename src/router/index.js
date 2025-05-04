import { createRouter, createWebHistory } from 'vue-router';
import CurrentTime from '../views/CurrentTime.vue';
import Practice from '../views/Practice.vue';

const routes = [
  {
    path: '/',
    name: 'current-time',
    component: CurrentTime
  },
  {
    path: '/practice',
    name: 'practice',
    component: Practice
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;