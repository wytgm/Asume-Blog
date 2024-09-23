// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // 开发工具，显示页面毫秒数
  devtools: { enabled: true },
  // 如果你已启用了 接管模式 或安装了 TypeScript Vue 插件（Volar），你可以在你的 nuxt.config.ts 文件中禁用生成 *.vue 文件的 shim：
  typescript: {
    shim: false
  }, 
  // 配置tailwindcss
  css: [
    '~/assets/css/tailwind.css'
  ],
 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // 配置axios、Live2D渲染引擎PIXIJS、
  plugins: [
    '~/plugins/axios.ts',
  ],
  
  // 其他配置...
})
