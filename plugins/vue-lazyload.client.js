import VueLazyload from 'vue-lazyload';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3, // 预加载高度比例调整为1.5
   // error: '/images/error.png',  加载失败时显示的图片
   //  loading: '/images/loading.gif', 加载中时显示的图片
    attempt: 2, // 重试次数调整为2次
    listenEvents: ['scroll', 'resize'], // 只监听滚动和窗口大小变化事件
    observer: true, // 启用 IntersectionObserver
    observerOptions: {
      rootMargin: '10px',
      threshold: 0.5
    }
  });
});