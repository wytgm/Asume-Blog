// plugins/live2d.client.ts
export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        src: '/assets/js/live2dcubismcore.min.js', // 确保路径正确
        body: true,
      }as any,
      {
        src: '/assets/js/live2d.min.js', // 确保路径正确
        body: true,
      }as any,
    ],
  });
});