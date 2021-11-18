import {
  defineConfig,
  loadEnv
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({
  command,
  mode
}) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: env.VITE_PUBLIC_PATH, // 打包路径
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
  }
}