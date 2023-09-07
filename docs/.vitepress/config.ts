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
      { text: 'Tutorial', link: '/pwa' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }
    ],

    sidebar: [
      {      
        path: '/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        items: [
          { text: 'Progressive Web Apps', link: '/pwa' },
        ]
      },
      {
        text: 'PWA para Vite',
        path: '/pwa-for-vite/',
        idebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: true, 
        items: [
          { text: 'Introducción', link: '/pwa-for-vite/intro' },
          { text: 'Crear Sitio Web', link: '/pwa-for-vite/create-website' },
          { text: 'Uso del Complemento', link: '/pwa-for-vite/plugin-usage' },
          { text: 'Requisitos Mínimos', link: '/pwa-for-vite/minimal-requirements' },
          { text: 'Caché de Recursos Externos', link: '/pwa-for-vite/cache-external-resources' },          
        ]
      },      
      {      
        path: '/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        items: [
          { text: 'Notificaciones', link: '/notifications' },
          { text: 'Ejemplo en vivo', link: '/live-example' },
          { text: 'Temas pendiente', link: '/pending-issues' },            
          { text: 'Recursos', link: '/resources' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/vue-pwa' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ernesto Canquiz'
    }    
  }
})

 
