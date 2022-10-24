import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ViteImages from 'vite-plugin-vue-images'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/data',
        'src/stores',
        'src/hooks/',
        'src/types',
        'src/stores/plugins',
        'src/assets/img',
      ],
      vueTemplate: true,
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      types: fileURLToPath(new URL('./src/types/', import.meta.url)),
    },
  },
})
