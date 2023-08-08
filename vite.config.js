import { fileURLToPath, URL } from 'node:url'
import compressionBuild from "rollup-plugin-compression";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pversion from './autoPackageVersion.js'
const packdata = pversion()
const option = {
  sourceName: `dist`,
  type: "zip",
  targetName: `/dist/dist-${packdata.name}-${packdata.version}`
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    compressionBuild(option)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{}
  }
})
