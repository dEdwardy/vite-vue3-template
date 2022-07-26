import { defineConfig } from 'vite';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// import viteCompression from 'vite-plugin-compression'
// import viteImagemin from 'vite-plugin-imagemin'
import { visualizer } from 'rollup-plugin-visualizer';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
// import mkcert from 'vite-plugin-mkcert';
import viteEslint from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const config = defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@images': resolve(__dirname, 'src/assets/images'),
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      vue(),
      vueSetupExtend(),
      vueJsx(),
      viteEslint(),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: false })]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(__dirname, 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[name]'
      }),
      // viteCompression({
      //   ext: '.gz',
      //   algorithm: 'gzip',
      //   deleteOriginFile: false
      // }),
      // viteImagemin({
      //   gifsicle: {
      //     optimizationLevel: 7,
      //     interlaced: false
      //   },
      //   optipng: {
      //     optimizationLevel: 7
      //   },
      //   mozjpeg: {
      //     quality: 20
      //   },
      //   pngquant: {
      //     quality: [0.8, 0.9],
      //     speed: 4
      //   },
      //   svgo: {
      //     plugins: [
      //       {
      //         name: 'removeViewBox'
      //       },
      //       {
      //         name: 'removeEmptyAttrs',
      //         active: false
      //       }
      //     ]
      //   }
      // }),
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    ],
    build: {
      outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
      // 类型: boolean | 'esbuild' | 'terser'
      // 默认为 `esbuild`
      minify: 'esbuild',
      // 产物目标环境
      // target: 'modules',
      target: 'es6', // 兼容低版本浏览器
      // 不过在需要兼容安卓端微信的 webview 时，我们需要将 build.cssTarget 设置为 chrome61，
      // 以防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式，出现样式问题。
      cssTarget: 'chrome61',
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': [
              'vue',
              'vue-router',
              'pinia',
              'pinia-plugin-persistedstate',
              'vue-i18n',
              '@vueuse/core'
            ],
            'element-plus': ['element-plus'],
            echarts: ['echarts']
          }
        }
      }
    }
  });
  // if (mode === 'development') {
  //   config.server = { https: true };
  //   config.plugins.push(mkcert());
  // }
  return config;
};
