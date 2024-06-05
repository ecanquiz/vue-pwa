import{_ as e,c as a,o as r,a3 as n}from"./chunks/framework.DUig1ioE.js";const b=JSON.parse('{"title":"PWA","description":"","frontmatter":{},"headers":[],"relativePath":"pwa.md","filePath":"pwa.md"}'),i={name:"pwa.md"},s=n('<h1 id="pwa" tabindex="-1">PWA <a class="header-anchor" href="#pwa" aria-label="Permalink to &quot;PWA&quot;">​</a></h1><h2 id="vision-general" tabindex="-1">Visión General <a class="header-anchor" href="#vision-general" aria-label="Permalink to &quot;Visión General&quot;">​</a></h2><p>En el siguiente tutorial, aprenderá qué es una Aplicación Web Progresiva, cómo crear una o actualizar su contenido web existente y cómo agregar todas las piezas para una aplicación instalable sin conexión. Pero antes, revisemos los correspondientes conceptos.</p><div class="warning custom-block"><p class="custom-block-title">Requisitos</p><p>Para aquellos nuevos en el desarrollo web, necesitarán una base en <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">HTML</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">CSS</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">JavaScript</a> y <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a> para seguir adelante.</p></div><h2 id="aplicaciones-web-progresivas" tabindex="-1"><a href="https://web.dev/learn/pwa/progressive-web-apps/" target="_blank" rel="noreferrer">Aplicaciones Web Progresivas</a> <a class="header-anchor" href="#aplicaciones-web-progresivas" aria-label="Permalink to &quot;[Aplicaciones Web Progresivas](https://web.dev/learn/pwa/progressive-web-apps/)&quot;">​</a></h2><p>Las aplicaciones web progresivas (PWA) son aplicaciones web creadas y mejoradas con API modernas para ofrecer capacidades, confiabilidad e instalación mejoradas y, al mismo tiempo, llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo, todo con una única base de código.</p><p>Si desea crear una Aplicación Web Progresiva, es posible que se pregunte por dónde empezar, si es posible actualizar un sitio web a una PWA sin empezar desde cero o cómo pasar de una aplicación específica de una plataforma a una PWA. Este tutorial le ayudará a responder estas preguntas.</p><h2 id="cimientos" tabindex="-1"><a href="https://web.dev/learn/pwa/foundations/" target="_blank" rel="noreferrer">Cimientos</a> <a class="header-anchor" href="#cimientos" aria-label="Permalink to &quot;[Cimientos](https://web.dev/learn/pwa/foundations/)&quot;">​</a></h2><p>Todas las aplicaciones web progresivas son, en esencia, sitios web modernos, por lo que es importante que su sitio web tenga una base sólida en diseño responsivo, todo primero en dispositivos móviles, diseño intrínseco y rendimiento web.</p><h2 id="diseno-de-aplicaciones" tabindex="-1"><a href="https://web.dev/learn/pwa/app-design/" target="_blank" rel="noreferrer">Diseño de Aplicaciones</a> <a class="header-anchor" href="#diseno-de-aplicaciones" aria-label="Permalink to &quot;[Diseño de Aplicaciones](https://web.dev/learn/pwa/app-design/)&quot;">​</a></h2><p>Una de las diferencias clave entre las Aplicaciones Web Progresivas y los sitios web y aplicaciones web clásicas es la facilidad de instalación. Esto crea una experiencia independiente más integrada en la plataforma y el sistema operativo. La instalación permite una nueva flexibilidad y una nueva responsabilidad, ya que no tendremos una interfaz de usuario de navegador alrededor de nuestro contenido.</p><h2 id="assets-y-data" tabindex="-1"><a href="https://web.dev/learn/pwa/assets-and-data/" target="_blank" rel="noreferrer"><em>Assets</em> y <em>Data</em></a> <a class="header-anchor" href="#assets-y-data" aria-label="Permalink to &quot;[_Assets_ y _Data_](https://web.dev/learn/pwa/assets-and-data/)&quot;">​</a></h2><p>Una Aplicación Web Progresiva es un sitio web; Todos sus <em>assets</em> son los mismos que en la web, pero con nuevas herramientas para hacer que esos <em>assets</em> se carguen rápidamente cuando están en línea y disponibles cuando están fuera de línea.</p><h2 id="service-workers" tabindex="-1"><a href="https://web.dev/learn/pwa/service-workers/" target="_blank" rel="noreferrer"><em>Service Workers</em></a> <a class="header-anchor" href="#service-workers" aria-label="Permalink to &quot;[_Service Workers_](https://web.dev/learn/pwa/service-workers/)&quot;">​</a></h2><p>Los trabajadores de servicios son una parte fundamental de una PWA. Permiten una carga rápida (independientemente de la red), acceso sin conexión, notificaciones automáticas y otras capacidades.</p><h2 id="almacenamiento-en-cache" tabindex="-1"><a href="https://web.dev/learn/pwa/caching/" target="_blank" rel="noreferrer">Almacenamiento en Caché</a> <a class="header-anchor" href="#almacenamiento-en-cache" aria-label="Permalink to &quot;[Almacenamiento en Caché](https://web.dev/learn/pwa/caching/)&quot;">​</a></h2><p>Puede utilizar la API de almacenamiento en caché para descargar, almacenar, eliminar o actualizar activos en el dispositivo. Luego, estos activos se pueden entregar en el dispositivo sin necesidad de una solicitud de red.</p><h2 id="servicio" tabindex="-1"><a href="https://web.dev/learn/pwa/serving/" target="_blank" rel="noreferrer">Servicio</a> <a class="header-anchor" href="#servicio" aria-label="Permalink to &quot;[Servicio](https://web.dev/learn/pwa/serving/)&quot;">​</a></h2><p>Utilizando el evento de recuperación del trabajador del servicio, puede interceptar solicitudes de red y ofrecer una respuesta utilizando diferentes técnicas.</p><h2 id="workbox" tabindex="-1"><a href="https://web.dev/learn/pwa/workbox/" target="_blank" rel="noreferrer"><em>Workbox</em></a> <a class="header-anchor" href="#workbox" aria-label="Permalink to &quot;[_Workbox_](https://web.dev/learn/pwa/workbox/)&quot;">​</a></h2><p><em>Workbox</em> es un conjunto de módulos que simplifican las interacciones comunes de los trabajadores de servicios, como el enrutamiento y el almacenamiento en caché. Cada módulo aborda un aspecto específico del desarrollo de los trabajadores de servicios.</p><p><em>Workbox</em> tiene como objetivo hacer que el uso de trabajadores de servicios sea lo más fácil posible y, al mismo tiempo, permitir la flexibilidad para adaptarse a requisitos de aplicaciones complejas cuando sea necesario.</p><h2 id="offline-data" tabindex="-1"><a href="https://web.dev/learn/pwa/offline-data/" target="_blank" rel="noreferrer"><em>Offline Data</em></a> <a class="header-anchor" href="#offline-data" aria-label="Permalink to &quot;[_Offline Data_](https://web.dev/learn/pwa/offline-data/)&quot;">​</a></h2><p>Para crear una experiencia sólida fuera de línea, debe implementar la administración de almacenamiento. Herramientas como <em>IndexedDB</em>, <em>Cache</em>, <em>Storage Manager</em>, <em>Persistent Storage</em> e <em>Content Indexing</em> pueden ayudar.</p><h2 id="instalacion" tabindex="-1"><a href="https://web.dev/learn/pwa/installation/" target="_blank" rel="noreferrer">Instalación</a> <a class="header-anchor" href="#instalacion" aria-label="Permalink to &quot;[Instalación](https://web.dev/learn/pwa/installation/)&quot;">​</a></h2><p>Las aplicaciones instaladas son de fácil acceso y pueden aprovechar algunas integraciones más profundas con el sistema operativo. Aprenda a hacer que su PWA sea instalable y obtenga esos beneficios.</p><h2 id="web-app-manifest" tabindex="-1"><a href="https://web.dev/learn/pwa/web-app-manifest/" target="_blank" rel="noreferrer"><em>Web App Manifest</em></a> <a class="header-anchor" href="#web-app-manifest" aria-label="Permalink to &quot;[_Web App Manifest_](https://web.dev/learn/pwa/web-app-manifest/)&quot;">​</a></h2><p>El manifiesto de la aplicación web es un archivo JSON que define cómo se debe tratar la PWA como una aplicación instalada, incluida la apariencia y el comportamiento básico dentro del sistema operativo.</p><h2 id="aviso-de-instalacion" tabindex="-1"><a href="https://web.dev/learn/pwa/installation-prompt/" target="_blank" rel="noreferrer">Aviso de Instalación</a> <a class="header-anchor" href="#aviso-de-instalacion" aria-label="Permalink to &quot;[Aviso de Instalación](https://web.dev/learn/pwa/installation-prompt/)&quot;">​</a></h2><p>Para los sitios que pasan los criterios de instalación de PWA, el navegador activa un evento para solicitar al usuario que lo instale. La buena noticia es que puedes utilizar este evento para personalizar tu mensaje e invitar a los usuarios a instalar tu aplicación.</p><h2 id="update" tabindex="-1"><em>Update</em> <a class="header-anchor" href="#update" aria-label="Permalink to &quot;_Update_&quot;">​</a></h2><p>Es probable que su PWA necesite una actualización. <a href="https://web.dev/learn/pwa/update/" target="_blank" rel="noreferrer">Este apartado</a> le brinda las herramientas para actualizar diferentes partes de su PWA, desde <em>assets</em> hasta metadatos.</p><h2 id="mejoras" tabindex="-1">Mejoras <a class="header-anchor" href="#mejoras" aria-label="Permalink to &quot;Mejoras&quot;">​</a></h2><p>Su usuario espera una buena experiencia. <a href="https://web.dev/learn/pwa/enhancements/" target="_blank" rel="noreferrer">En esta sección</a>, verá cómo mejorar su PWA con pantallas de presentación, accesos directos a aplicaciones y cómo funcionan las sesiones.</p><h2 id="deteccion" tabindex="-1"><a href="https://web.dev/learn/pwa/detection/" target="_blank" rel="noreferrer">Detección</a> <a class="header-anchor" href="#deteccion" aria-label="Permalink to &quot;[Detección](https://web.dev/learn/pwa/detection/)&quot;">​</a></h2><p>Identificar cómo interactúan los usuarios con su aplicación es útil para personalizar y mejorar la experiencia del usuario. Por ejemplo, puede comprobar si su aplicación ya está instalada en el dispositivo del usuario e implementar funciones como transferir la navegación a la aplicación independiente desde el navegador.</p><h2 id="integracion-del-sistema-operativo" tabindex="-1">Integración del Sistema Operativo <a class="header-anchor" href="#integracion-del-sistema-operativo" aria-label="Permalink to &quot;Integración del Sistema Operativo&quot;">​</a></h2><p>Su PWA funcionará fuera del navegador. <a href="https://web.dev/learn/pwa/os-integration/" target="_blank" rel="noreferrer">Este segmento</a> cubre cómo integrarse aún más con el sistema operativo una vez que los usuarios instalan su aplicación.</p><h2 id="window-management" tabindex="-1"><a href="https://web.dev/learn/pwa/windows/" target="_blank" rel="noreferrer"><em>Window Management</em></a> <a class="header-anchor" href="#window-management" aria-label="Permalink to &quot;[_Window Management_](https://web.dev/learn/pwa/windows/)&quot;">​</a></h2><p>Una PWA fuera del navegador administra su propia ventana. En este capítulo, comprenderá las API y las capacidades para administrar una ventana dentro del sistema operativo.</p><h2 id="funciones-experimentales" tabindex="-1">Funciones Experimentales <a class="header-anchor" href="#funciones-experimentales" aria-label="Permalink to &quot;Funciones Experimentales&quot;">​</a></h2><p>Hay capacidades de PWA que aún están en construcción y tú puedes ser parte de su desarrollo. <a href="https://web.dev/learn/pwa/experimental/" target="_blank" rel="noreferrer">En este enlace</a>, aprenderá sobre el proyecto Fugu, cómo registrarse para una prueba de origen y cómo usar API experimentales.</p><h2 id="herramientas-y-depuracion" tabindex="-1"><a href="https://web.dev/learn/pwa/tools-and-debug/" target="_blank" rel="noreferrer">Herramientas y Depuración</a> <a class="header-anchor" href="#herramientas-y-depuracion" aria-label="Permalink to &quot;[Herramientas y Depuración](https://web.dev/learn/pwa/tools-and-debug/)&quot;">​</a></h2><p>Explora las herramientas disponibles para desarrollar, depurar y probar sus aplicaciones web progresivas.</p><h2 id="arquitectura" tabindex="-1"><a href="https://web.dev/learn/pwa/architecture/" target="_blank" rel="noreferrer">Arquitectura</a> <a class="header-anchor" href="#arquitectura" aria-label="Permalink to &quot;[Arquitectura](https://web.dev/learn/pwa/architecture/)&quot;">​</a></h2><p>Usted toma algunas decisiones al desarrollar una PWA, como si crear una aplicación de una sola página o una aplicación de varias páginas, y si la alojará en la raíz de su dominio o dentro de una carpeta.</p><h2 id="manejo-de-complejidad" tabindex="-1">Manejo de Complejidad <a class="header-anchor" href="#manejo-de-complejidad" aria-label="Permalink to &quot;Manejo de Complejidad&quot;">​</a></h2><p>Mantener una aplicación web sencilla puede resultar sorprendentemente complicado. En <a href="https://web.dev/learn/pwa/complexity/" target="_blank" rel="noreferrer">este módulo</a>, aprenderá cómo funcionan las API web con subprocesos y cómo puede usarlos para patrones de PWA comunes, como la administración de estado.</p><h2 id="capacidades" tabindex="-1">Capacidades <a class="header-anchor" href="#capacidades" aria-label="Permalink to &quot;Capacidades&quot;">​</a></h2><p>Las PWA no solo están vinculadas a la pantalla. <a href="https://web.dev/learn/pwa/capabilities/" target="_blank" rel="noreferrer">Este capítulo</a> trata sobre las capacidades que tiene una PWA hoy en día en términos de hardware, sensores y uso de plataforma.</p><h2 id="conclusion" tabindex="-1">Conclusión <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusión&quot;">​</a></h2><p>Entonces, ¿estás listo para aprender PWA con Vite Plugin?</p>',52),o=[s];function t(l,d,c,p,u,m){return r(),a("div",null,o)}const f=e(i,[["render",t]]);export{b as __pageData,f as default};
