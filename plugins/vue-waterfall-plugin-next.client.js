import { defineNuxtPlugin } from '#app';
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LazyImg', LazyImg);
  nuxtApp.vueApp.component('Waterfall', Waterfall);
});