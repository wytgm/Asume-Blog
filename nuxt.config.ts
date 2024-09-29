// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // pixi配置
  app: {
    head: {
      script: [
        { src: '/js/live2dcubismcore.min.js' },
        { src: '/js/live2d.min.js' },
      ]
    }
  },

  ssr: false,

  //兼容2024-04-03之前的版本
  compatibilityDate: '2024-04-03',

  // 开发工具，显示页面毫秒数
  devtools: { enabled: false },

  // 如果你已启用了 接管模式 或安装了 TypeScript Vue 插件（Volar），你可以在你的 nuxt.config.ts 文件中禁用生成 *.vue 文件的 shim：
  typescript: {
    shim: false
  },

  // 配置tailwindcss
  css: [
    '~/assets/css/tailwind.css',
    'lightgallery/css/lightgallery.css',
    'lightgallery/css/lg-zoom.css',
    'lightgallery/css/lg-thumbnail.css',
  ],
  build: {
    transpile: ['lightgallery'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // 配置axios/vue懒加载等第三方插件
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/vue-lazyload.client.js',
    '~/plugins/aplayer.client.js',
    '~/plugins/vue-waterfall-plugin-next.client.js'
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
  },

  modules: ['@nuxt/content'],
  content: {
    // 配置选项
  }
})