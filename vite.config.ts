import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Այսպիսով Vite-ը կլսի բոլոր IP հասցեների վրա
    port: 3000, // Կամ այլ պորտ, եթե պետք է
  },
  
})

