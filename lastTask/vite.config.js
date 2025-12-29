// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// 🚨 svgr 플러그인 import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // 하드 코딩된 속성을 제거하여 CSS로 제어 가능하게 함
        componentConfig: {
          icon: true, // 아이콘임을 명시
          removeAttrs: ['stroke', 'fill'], // SVG 내부의 stroke 및 fill 속성을 제거
        }
      }
    })
    
  ],
  base: "/",
})

