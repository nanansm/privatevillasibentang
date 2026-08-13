// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Domain induk kampungsumberalam.com dibeli klien; Sibentang jalan di subdomain ini.
  site: 'https://sibentang.kampungsumberalam.com',
  // Astro membangun URL bergaya direktori (/link/index.html), jadi canonical
  // yang dihasilkan selalu berakhiran garis miring. Dikunci di sini supaya
  // dev, preview, dan produksi tidak berbeda dan hreflang tidak menunjuk
  // varian tanpa garis miring yang lalu kena redirect.
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Halaman tautan bio sengaja noindex, dan /pratinjau cuma buat review internal.
      // Keduanya jangan masuk sitemap — sitemap yang memuat halaman noindek itu sinyal rancu.
      filter: (page) =>
        !page.includes('/link') && !page.includes('/pratinjau'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', id: 'id-ID' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // CSS-nya kecil (satu halaman, satu huruf, empat warna); inline penuh
    // menghapus satu round-trip render-blocking di jalur kritis LCP.
    inlineStylesheets: "always",
  },
});
