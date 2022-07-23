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
import viteEslint from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
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
    chunkSizeWarningLimit: 1500 // chunk 大小警告的限制（以 kbs 为单位）
  }
});
