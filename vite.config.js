import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {

  //一个加载（node端的env配置），一个导出（确保browser端也能获取env）
  //Node.js在项目的根目录运行，vite会从此开始去寻找.env的工作文件
  //所以vite.package.json如果放在其他文件夹下，需要通过resolve来拼出根目录
  const env = loadEnv(mode, process.cwd(), '');
  if (env) {
    console.log('你加载成功了环境变量')
  } else {
    console.log('你连环境变量都没加载进去')
  }

  if (command === 'serve') {
    console.log('启动开发环境')
  } else if (command === 'build') {
    console.log('启动生产环境')
  } else {
    console.log('你并未学会vite的script启动方法', 'comand为', command)
  }

  console.log("__dirname是",__dirname)

  return {
    envPrefix: 'VITE_',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),],
    server: {
      port: 3000,
      proxy: {
        "/api360": {
          target: "https://www.360.com",
          changeOrigin: 1,
          rewrite: (path) => path.replace(/^\/api360/, '')
        },
        "/apibd": {
          target: "https://www.baidu.com",
          changeOrigin: 1,
          rewrite: (path) => path.replace(/^\/apibd/, '')
        }
      }
    },
    resolve: {
      alias: {
        //path.resolve的参数问题
        //绝对根目录+相对路径（可以./ or 可以不写）
        //注意：函数使用,分隔  不能写成/src（绝对路径）
        "@": path.resolve(__dirname , './src'),
        "@business": path.resolve(__dirname,'src/components/business'),
        "@common":path.resolve(__dirname,'src/components/common'),
        "@Login":path.resolve(__dirname,'src/views/Login')
      }
    },
    build: {
      outDir: "dist"
    }
  }
})
