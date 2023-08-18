# Requisitos mínimos de PWA

Con el paso anterior solo se logró mostrar el "icono de instalación" en los navegadores compatibles. Sin embargo, se deben incluir más opciones de configuración para cumplir con los requisitos mínimos de PWA antes de implementarla en producción o al probar su compilación en local. Como crear el Manifiesto y el Trabajador de Servicio cuando crea su aplicación web.


## Registrar el Trabajador de Servicio

El [complemento `vite-plugin-pwa` registrará el **_service worker_** automáticamente](https://vite-pwa-org.netlify.app/guide/register-service-worker.html#register-service-worker) para usted, utilizando la opción de configuración `injectRegister` (optional).

Si desea configurar la opción del complemento `injectRegister`:

```ts
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    VitePWA({
      injectRegister: 'auto',
      // omitted for brevity ...
    })
  ]
})
```

La opción de configuración del complemento `injectRegister` controlará cómo registrar el **_service worker_** en su aplicación:

- [`inline`](https://vite-pwa-org.netlify.app/guide/register-service-worker.html#inline-registration): inyecta un _script_ de registro simple, en línea en el punto de entrada de la aplicación.
- [`script`](https://vite-pwa-org.netlify.app/guide/register-service-worker.html#script-registration): inyecta una etiqueta de script en el encabezado con el **_service worker_** en un registro simple generado
- [`null`](https://vite-pwa-org.netlify.app/guide/register-service-worker.html#manual-registration) (manual): no hace nada, deberá registrar el **_service worker_** usted mismo o importar cualquiera de los módulos virtuales expuestos por el complemento
- [`auto`](https://vite-pwa-org.netlify.app/guide/register-service-worker.html#auto-registration) (valor predeterminado): depende de si usa alguno de los módulos virtuales expuestos por el complemento, no hará nada o cambiará al modo `script`

Puede encontrar más información sobre los módulos virtuales expuestos por el complemento en la sección [Frameworks](https://vite-pwa-org.netlify.app/frameworks/).

## Comportamiento de actualización automática

Si necesita que su trabajador de servicio personalizado funcione con el comportamiento de [actualización automática](https://vite-pwa-org.netlify.app/guide/inject-manifest.html#plugin-configuration-1), debe cambiar las opciones de configuración del complemento y agregar un código personalizado a su código de **_service worker_**.

Debe configurar `registerType: 'autoUpdate'` para las opciones del complemento `vite-plugin-pwa` en su archivo `vite.config.ts`:

```ts
VitePWA({
  // omitted for brevity ...
  registerType: 'autoUpdate',
  // omitted for brevity ...
})
```

[Con este comportamiento](https://vite-pwa-org.netlify.app/guide/auto-update.html#automatic-reload), una vez que el navegador detecta una nueva versión de su aplicación, actualizará los cachés y volverá a cargar cualquier ventana/pestaña del navegador con la aplicación abierta automáticamente para tomar el control.

La desventaja de usar este comportamiento es que el usuario puede perder datos en cualquier ventana/pestaña del navegador en la que la aplicación esté abierta y esté completando un formulario.

Si su aplicación tiene formularios, le recomendamos que cambie el comportamiento para usar la opción de solicitud predeterminada para permitir que el usuario decida cuándo actualizar el contenido de la aplicación.

:::danger PELIGRO

Antes de poner su aplicación en producción, debe estar seguro del comportamiento que desea para el **_service worker_**. Cambiar el comportamiento del **_service worker_** de actualización automática a aviso puede ser una molestia.
:::

## Precache del Trabajador de Servicio

Los [**_Service Worker_**](https://vite-pwa-org.netlify.app/guide/#service-worker) actúan como servidores proxy que interceptan solicitudes entre el navegador y el servidor.

Dado que vamos a agregar PWA a su aplicación, debemos configurar el **_service worker_** para que su aplicación pueda funcionar sin conexión. Para hacer esto, debemos configurar el manifiesto de precaché del **_service worker_**, que incluirá todos los recursos de su aplicación (básicamente, debemos indicarle al **_service worker_** qué recursos almacenar en el almacenamiento de caché para que pueda usarse para la `network requests interception` y cuando la aplicación esté fuera de línea).

::: tip Intercepción de solicitudes de red

También puede configurar cómo controlar la `network requests interception` para cualquiera de los recursos de su aplicación.

Puede encontrar más información en [Workbox - Estrategias de almacenamiento en caché](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#caching-strategies).
:::

Una vez que la aplicación registra al **_service worker_**, el navegador intentará instalarlo descargando todos los recursos en el manifiesto de precaché del **_service worker_**. Una vez que el navegador haya descargado y almacenado todos los recursos en el almacenamiento de caché, intentará activar el **_service worker_** para tomar el control de la aplicación.

:::tip CONSEJO

El navegador solo descargará todos los recursos en el manifiesto de precaché del **_service worker_** si el **_service worker_** no está instalado (la primera vez que el usuario visita su aplicación) o si hay una nueva versión de su aplicación (si cambia algún recurso en su aplicación, el **_service worker_** también cambiará una vez que cree la aplicación, ya que su manifiesto de precaché se modifica para incluir sus cambios).

En cualquier caso, el navegador siempre descargará todos los recursos en un subproceso en segundo plano y no en el subproceso principal del navegador, de esta manera las personas pueden usar la aplicación mientras el navegador intenta instalar el **_service worker_**.

Puede consultar este sitio web o el [sitio de documentos de VueUse](https://vueuse.org/) en una ventana privada, simplemente abra la pestaña `Network` en las _**dev tools**__ antes de visitar los sitios: el navegador comenzará a descargar todos los recursos mientras navega por el sitio.
:::

## Manifiesto de Precaché

Dado que el complemento `vite-plugin-pwa` usa la biblioteca de node [workbox-build](https://developer.chrome.com/docs/workbox/modules/workbox-build/) para compilar el **_service worker_**, solo incluirá recursos `css`, `js` y `html` en el [precaché del manifiesto](https://vite-pwa-org.netlify.app/guide/service-worker-precache.html#precache-manifest) (verifique la entrada `globPatterns` en [GlobPartial](https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-GlobPartial)).


La biblioteca de node `workbox-build` está basada en archivos, es decir, atravesará la carpeta de salida de compilación de su aplicación. `Vite` generará su compilación en la carpeta `dist` y, por lo tanto, `workbox-build` recorrerá la carpeta `dist` agregando todos los recursos que se encuentran en ella al manifiesto de precaché del **_service worker_**.

Si necesita incluir otros tipos de recursos, deberá agregarlos a la entrada `globPatterns`. Según la `strategy` establecida en la configuración del complemento `vite-plugin-pwa`, deberá agregarlo en la opción de configuración `workbox` o `injectManifest`.

Por ejemplo, si necesita agregar recursos `ico`, `png` y `svg` en el ejemplo de la sección [Configuración de vite-plugin-pwa - Guía](https://vite-pwa-org.netlify.app/guide/#configuring-vite-plugin-pwa), deberá agregar `globPatterns` en la entrada de la `workbox`, ya que estamos usando el `vite-plugin-pwa` predeterminado _strategy_ (`generateSW`):

```ts
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    VitePWA({
      // omitted for brevity ...
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }      
    })
  ]
})
```

## Punto de Entrada

Para que su aplicación PWA sea instalable (uno de los requisitos), deberá modificar el [punto de entrada](https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point) de su aplicación, agregar algunas entradas mínimas a su manifiesto de aplicación web, permitir que los motores de búsqueda rastreen todas las páginas de su aplicación y configurar su servidor correctamente (solo para producción, en local puede usar la dependencia `https-localhost` y `node`).

El punto de entrada de su aplicación (generalmente `index.html`) **debe** tener las siguientes entradas en la sección `<head>`:

- configuración de `viewport` móvil
- un `title`
- una `description`
- un `favicon`: consulta la siguiente página https://www.leereamsnyder.com/blog/favicons-in-2021
- un `link` para `apple-touch-icon`
- un `link` para `mask-icon` (en este momento no hay necesidad de proporcionar un ícono de máscara `mask-icon`)
- una metaentrada para `theme-color`

Por ejemplo, una configuración mínima (debe proporcionar todos los iconos e imágenes):

```html
<head>  
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>My Awesome PWA</title>
  <meta name="description" content="My Awesome PWA description">
  <link rel="icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
  <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF">
  <meta name="theme-color" content="#ffffff">
</head>
```

## [Manifiesto de la Aplicación Web](https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#web-app-manifest)

Su aplicación [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) **debe** tener las siguientes entradas:

a scope: omitted here for simplicity, the vite-plugin-pwa plugin will use the Vite base option to configure it (default is /)

- un `scope`: omitido aquí por simplicidad, el complemento `vite-plugin-pwa` usará la opción base de `Vite` para configurarlo (el valor predeterminado es `/`)
- un `name`
- una `short description`
- una `description`
- un `theme_color`: debe coincidir con el configurado en `Entry Point theme-color`
- un icon con tamaño `192x192`
- an icon con tamaño `512x512`

Para configurar el Web App Manifest, agregue la entrada del `manifest` a las opciones del complemento `vite-plugin-pwa`.

Siguiendo con el ejemplo, aquí una configuración mínima (debe proporcionar todos los iconos e imágenes):

```ts
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'My Awesome PWA',
        short_name: 'MyPWA',
        description: 'My Awesome PWA description',
        theme_color: '#ffffff',
        icons: [{
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }, {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }]
      }
    })
  ]
})
```

## Iconos / Imágenes

:::tip 
CONSEJO

Consulte el [Generador de Assets de PWA](./plugin-usage.html#generador-de-assets) para generar todos los íconos e imágenes necesarios para su aplicación de PWA.

También puede usar [PWA Builder Image Generator](https://www.pwabuilder.com/imageGenerator) para generar todos los íconos de su aplicación PWA.
:::

Para la entrada de iconos de `manifest`, deberá crear iconos `pwa-192x192.png` y `pwa-512x512.png`. Los íconos especificados arriba son los mínimos requeridos para cumplir con PWA, es decir, íconos con resoluciones de `192x192` y `512x512`.

Le sugerimos que cree un icono svg o png (si es un icono png, con la máxima resolución posible) para su aplicación y lo use para generar sus iconos PWA:

- [PWA Assets Generator](https://vite-pwa-org.netlify.app/assets-generator/) (recomendado).
- [Favicon Generator](https://realfavicongenerator.net/).

Para el `mask-icon` en el punto de entrada, use el svg o el png que se usó para generar el paquete de favicon.

Una vez generado, descargue el ZIP y use los iconos de `android-*` para `pwa-*`:

- use `android-chrome-192x192.png` para `pwa-192x192.png`
- use `android-chrome-512x512.png` para `pwa-512x512.png`
- `apple-touch-icon.png` es `apple-touch-icon.png`
- `favicon.ico` es `favicon.ico`

Si lo desea, puede agregar el `purpose: 'any maskable'` al Web App Manifest, pero es mejor agregar 2 íconos con propósito `any` y `maskable`:

```ts
icons: [
  {
    src: 'pwa-192x192.png',
    sizes: '192x192',
    type: 'image/png'
  },
  {
    src: 'pwa-512x512.png',
    sizes: '512x512',
    type: 'image/png'
  },
  {
    src: 'pwa-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'any'
  },
  {
    src: 'pwa-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'maskable'
  }
]
```

## Los Motores de Búsqueda

**Debe** agregar un archivo `robots.txt` para permitir que los motores de búsqueda rastreen todas las páginas de su aplicación, simplemente agregue `robots.txt` a la carpeta `public` de su aplicación:

```txt
User-agent: *
Allow: /
```

::: warning ADVERTENCIA
La carpeta `public` debe estar en la carpeta raíz de su aplicación, no dentro de la carpeta `src`.
:::

## Configuración del Servidor

Puede usar el servidor que desee, pero su servidor debe:

- servir `manifest.webmanifest` con `application/manifest+json` mime type
- sirva su aplicación a través de `https`
- redirigir de `http` a `https`

Puede encontrar más información en la sección [Desplegar](https://vite-pwa-org.netlify.app/deployment/).

https://vite-pwa-org.netlify.app/guide/development.html
