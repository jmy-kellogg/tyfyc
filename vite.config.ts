import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import express from './express-plugin'

export default defineConfig({
  plugins: [vue(), tailwindcss(),  express('src/server')],
  server: {
    port: 3000,
  },
})
