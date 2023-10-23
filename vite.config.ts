import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig(({ mode }) => {
  return {
    build: {
      target: 'esnext'
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, 'node_modules')
      }
    },
    plugins: [
      vue(),
      VitePWA({
        manifest: {
          name: "Amharic Flashcards",
          short_name: "መማር",
          description: "Install this flashcard for quick reference on the go! \nAvoid loading this again and again; train your mind whenever you feel like it, even when you don't have an internet connection.",
          icons: [
            {
              src: "/16x16.png",
              sizes: "16x16",
              type: "image/png",
              purpose: ""
            },
            {
              src: "/32x32.png",
              sizes: "32x32",
              type: "image/png",
              purpose: ""
            },
            {
              src: "/192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: ""
            },
            {
              src: "/512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: ""
            }
          ],
          screenshots:[
            {
              src: "/narrow-screenshot.jpg",
              sizes: "438x822",
              type: "image/jpg",
              form_factor: "narrow"
            },
            {
              src: "/wide-screenshot.png",
              sizes: "1290x676",
              type: "image/png",
              form_factor: "wide"
            },
          ],
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone"
        }
      })
    ]
  }
})
