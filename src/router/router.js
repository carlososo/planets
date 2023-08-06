import { createRouter, createWebHistory } from "vue-router";

import MainComponent from '../components/MainComponent.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/planet/mercury' },
    { path: '/planet/:name', component: MainComponent },
  ]
});