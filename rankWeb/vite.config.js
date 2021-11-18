import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    proxy: {
      '/leetcode/': {
        target: 'https://leetcode-cn.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/leetcode/, '')
      }
    }
  }
})