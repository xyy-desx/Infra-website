import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React plugin with compiler
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    // Tailwind plugin (Vite integration)
    tailwindcss(),
  ],
})
