// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      cors: true,
      allowedHosts: ['6c42cdef58fe.ngrok-free.app', 'localhost'],
    },
  },
});

// Importing Tailwind CSS for styling