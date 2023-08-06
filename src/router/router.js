import { createRouter, createWebHistory } from "vue-router";

import MainComponent from '../components/MainComponent.vue'

export const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/planet/Mercury' },
    { path: '/planet/:name', component: MainComponent },
  ]
});