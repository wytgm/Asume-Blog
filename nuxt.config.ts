// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // pixi配置
  app: {
    head: {
      script: [
        // {src: 'https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js'},
        // {src: 'https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js'}
        { src: '/js/live2dcubismcore.min.js' },
        { src: '/js/live2d.min.js' },
      ]
    }
  }, 
  ssr: false,
  compatibilityDate: '2024-04-03',
  // 开发工具，显示页面毫秒数
  devtools: { enabled: false },
  // 如果你已启用了 接管模式 或安装了 TypeScript Vue 插件（Volar），你可以在你的 nuxt.config.ts 文件中禁用生成 *.vue 文件的 shim：
  typescript: {
    shim: false
  }, 
  //  publicDir: 'public',确保 public 目录包含静态资源
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
  // 配置axios等第三方插件
  plugins: [
    '~/plugins/axios.ts',
     '~/plugins/vue-lazyload.client.js'
  ],
  
  //其他配置 。。。。
  nitro: {
    serveStatic: true,
    devServer: {
      watch: [
        'public/**/*'
      ]
    },
    routeRules: {
      '/**': {
        headers: {
          'Content-Type': 'application/javascript'
        }
      }
    }
  }
})
