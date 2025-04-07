import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Այսպիսով Vite-ը կլսի բոլոր IP հասցեների վրա
    port: 3000, // Կամ այլ պորտ, եթե պետք է
    allowedHosts: [
      '29ac-45-143-205-149.ngrok-free.app',
      'localhost', // Եթե ուզում եք նաև թույլատրել localhost-ից կապը
    ],
  },
  
})

