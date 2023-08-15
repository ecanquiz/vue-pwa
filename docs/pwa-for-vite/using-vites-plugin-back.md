# Uso del Complemento de Vite para PWA


## Para instalarlo, solo necesita agregarlo a sus dependencias de tiempo de desarrollo:

```sh
npm i vite-plugin-pwa --save-dev
```

Una vez instalado, puede agregarlo a su archivo `vite.config.ts`:

```ts
...
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA()
  ],
  ...
})
```

Con esto instalado, verá que sus compilaciones generarán algunos archivos adicionales:

```sh
vite v4.4.8 building for production...
✓ 83 modules transformed.
dist/registerSW.js                0.16 kB
dist/manifest.webmanifest         0.17 kB
dist/index.html                   0.61 kB │ gzip:  0.34 kB
dist/assets/logo-4ca08a15.svg     2.66 kB │ gzip:  1.24 kB
dist/assets/index-6ac42a59.css    8.15 kB │ gzip:  2.30 kB
dist/assets/Edit-acc6f70c.js      1.68 kB │ gzip:  0.90 kB
dist/assets/index-14d96737.js   109.31 kB │ gzip: 43.23 kB

PWA v0.16.4
mode      generateSW
precache  6 entries (117.10 KiB)
files generated
  dist/sw.js
  dist/workbox-27b29e6f.js
✓ built in 5.57s 
```


El archivo generado por el complemento incluye:

- **manifest.webmanifest**: Metadatos sobre la aplicación y una indicación de que se puede instalar.
- **sw.js**: Un `service worker`requerido que admite la ejecución como una aplicación (y sin conexión).
- **registerSW.js**: Un nuevo script que Vite inyecta en el `index.html` que registra al `service worker`.
- **workbox-*.js**: Código específico del `workbox` para admitir la PWA.

Con esto generado, debería ver el "icono de instalación" en los navegadores compatibles:



## https://vite-pwa-org.netlify.app/assets-generator/

## Ejemplo usando un preajuste mínimo

Puede generar íconos utilizando el ajuste preestablecido `minimal` incluido en el paquete [`@vite-pwa/assets-generator`](https://github.com/vite-pwa/assets-generator) a través de una imagen de origen, consulte la documentación de la [CLI](https://vite-pwa-org.netlify.app/assets-generator/cli.html) y la [API](https://vite-pwa-org.netlify.app/assets-generator/api.html) para obtener más detalles.

```sh
npm install -D @vite-pwa/assets-generator
```

```json
{
  "scripts": {
    "generate-pwa-assets": "pwa-assets-generator --preset minimal public/logo.png"
  }
}
```

```sh
npm run generate-pwa-assets
```


```sh
> vue-todo-pwa@0.0.0 generate-pwa-assets
> pwa-assets-generator --preset minimal public/logo.png

Zero Config PWA Assets Generator v0.0.4                                          5:16:13 PM
◐ Preparing to generate PWA assets...                                            5:16:13 PM
✔ PWA assets ready to be generated                                               5:16:13 PM
◐ Generating PWA assets from public/logo.png image                               5:16:13 PM
✔ Generated PNG file: ~/vue-todo-pwa/public/pwa-64x64.png                        5:16:13 PM
✔ Generated PNG file: ~/vue-todo-pwa/public/pwa-192x192.png                      5:16:13 PM
✔ Generated ICO file: ~/vue-todo-pwa/public/favicon.ico                          5:16:13 PM
✔ Generated PNG file: ~/vue-todo-pwa/public/apple-touch-icon-180x180.png         5:16:13 PM
✔ Generated PNG file: ~/vue-todo-pwa/public/maskable-icon-512x512.png            5:16:13 PM
✔ Generated PNG file: ~/vue-todo-pwa/public/pwa-512x512.png                      5:16:13 PM
✔ PWA assets generated  
```

:::info
Todos los assets de PWA se generarán en la misma carpeta de origen.
:::


Actualice su entrada de iconos del manifiesto de la PWA con:

```ts
...
VitePWA({      
  manifest: { 
    icons: [{
      src: 'pwa-64x64.png',
      sizes: '64x64',
      type: 'image/png'
    }, {
      src: 'pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    }, {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any'  
    }, {
      src: 'maskable-icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable'
    }]
  }
})
...
```

y use las siguientes entradas de encabezado HTML en su punto de entrada:

```html
<head>
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png">
</head>
```

https://stackoverflow.com/questions/58985103/progressive-web-app-not-showing-install-button-in-browser-bar
The properties that you can customize in the manifest are all defined here.

If you run the example now, you can look at the manifest for errors or omissions:
