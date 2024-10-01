import { createRouter, createWebHistory } from 'vue-router';

import PrincipalPagina from '@/modules/landing/PrincipalPagina.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PrincipalPagina',
      component: PrincipalPagina
    },
    {
      path: '/RegistroPagina',
      name: 'RegistroPagina',
      component: () => import('@/modules/landing/RegistroPagina.vue')
    },
    {
      path: '/CorreoPagina',
      name: 'CorreoPagina',
      component: () => import('@/modules/landing/CorreoPagina.vue')
    },
    {
      path: '/AdivinaPokemon',
      name: 'AdivinaPokemon',
      component: () => import('@/modules/landing/AdivinaPokemon.vue')
    }
  ]
});

export default router;
