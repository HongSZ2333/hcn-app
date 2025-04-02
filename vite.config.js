import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'vue-next' // 关键配置项
        })
      ]
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next' // 关键配置项
        })
      ]
    })
  ]
})