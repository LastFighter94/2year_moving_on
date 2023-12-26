import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process': {
      env: 0
    }
  },
  plugins: [
    vueJsx(),
    vue({ customElement: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: "./src/components/widget/test-widget.js",
      formats: ["es", "cjs"],
      name: "some-name",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs")
    },
    sourcemap: true,
    target: "esnext",
    minify: false
  }
})
