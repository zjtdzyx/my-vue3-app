import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default defineConfig({
  base: '/my-vue3-app/',
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => `element-plus/theme-chalk/${name}.css`,
          resolveComponent: (name) => `element-plus/lib/${name}`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          `@use "element-plus/theme-chalk/src/common/var.scss" as *; $--color-primary: #0fa4b3;`,
      },
    },
  },
})