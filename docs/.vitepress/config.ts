import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue PWA",
  description: "Complemento",
  base: '/vue-pwa/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'Vue PWA',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'PWA para Vite',
        path: '/pwa-for-vite/',
        idebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Introducción', link: '/pwa-for-vite/intro' },
          { text: 'Crear Sitio Web', link: '/pwa-for-vite/create-website' },
          { text: 'Uso del Complemento', link: '/pwa-for-vite/plugin-usage' },
          { text: 'Requisitos Mínimos', link: '/pwa-for-vite/minimal-requirements' },
          { text: 'Caché de Recursos Externos', link: '/pwa-for-vite/cache-external-resources' },
          { text: 'Notificaciones', link: '/pwa-for-vite/notification' },      
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/vue-pwa' }
    ]
  }
})

 
