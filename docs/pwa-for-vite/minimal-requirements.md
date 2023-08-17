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
      injectRegister: 'auto'
      ...
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

Dado que el complemento `vite-plugin-pwa` usa la biblioteca de node [workbox-build](https://developer.chrome.com/docs/workbox/modules/workbox-build/) para compilar el **_service worker_**, solo incluirá recursos `css`, `js` y `html` en el precaché del manifiesto (verifique la entrada `globPatterns` en [GlobPartial](https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-GlobPartial)).


La biblioteca de node `workbox-build` está basada en archivos, es decir, atravesará la carpeta de salida de compilación de su aplicación. `Vite` generará su compilación en la carpeta `dist` y, por lo tanto, `workbox-build` recorrerá la carpeta `dist` agregando todos los recursos que se encuentran en ella al manifiesto de precaché del **_service worker_**.

Si necesita incluir otros tipos de recursos, deberá agregarlos a la entrada `globPatterns`. Según la `strategy` establecida en la configuración del complemento `vite-plugin-pwa`, deberá agregarlo en la opción de configuración `workbox` o `injectManifest`.

Por ejemplo, si necesita agregar recursos `ico`, `png` y `svg` en el ejemplo de la sección [Configuración de vite-plugin-pwa - Guía](https://vite-pwa-org.netlify.app/guide/#configuring-vite-plugin-pwa), deberá agregar `globPatterns` en la entrada de la `workbox`, ya que estamos usando el `vite-plugin-pwa` predeterminado _strategy_ (`generateSW`):

```ts
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    VitePWA({
      ...
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
      ...
    })
  ]
})
```

## PWA Minimal Requirements
https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point
## Punto de Entrada
https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point

Para que su aplicación PWA sea instalable (uno de los requisitos), deberá modificar el punto de entrada de su aplicación, agregar algunas entradas mínimas a su manifiesto de aplicación web, permitir que los motores de búsqueda rastreen todas las páginas de su aplicación y configurar su servidor correctamente (solo para producción, en local puede usar la dependencia y el nodo https-localhost).
