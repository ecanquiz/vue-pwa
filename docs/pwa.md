# PWA

## Visión General

En el siguiente tutorial, aprenderá qué es una Aplicación Web Progresiva, cómo crear una o actualizar su contenido web existente y cómo agregar todas las piezas para una aplicación instalable sin conexión. Pero antes, revisemos los correspondientes conceptos.

:::warning Requisitos
Para aquellos nuevos en el desarrollo web, necesitarán una base en [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) y [Vue](https://vuejs.org/) para seguir adelante.
:::

## [Aplicaciones Web Progresivas](https://web.dev/learn/pwa/progressive-web-apps/)

Las aplicaciones web progresivas (PWA) son aplicaciones web creadas y mejoradas con API modernas para ofrecer capacidades, confiabilidad e instalación mejoradas y, al mismo tiempo, llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo, todo con una única base de código.

Si desea crear una Aplicación Web Progresiva, es posible que se pregunte por dónde empezar, si es posible actualizar un sitio web a una PWA sin empezar desde cero o cómo pasar de una aplicación específica de una plataforma a una PWA. Este tutorial le ayudará a responder estas preguntas.

## [Cimientos](https://web.dev/learn/pwa/foundations/)

Todas las aplicaciones web progresivas son, en esencia, sitios web modernos, por lo que es importante que su sitio web tenga una base sólida en diseño responsivo, todo primero en dispositivos móviles, diseño intrínseco y rendimiento web.


## [Diseño de Aplicaciones](https://web.dev/learn/pwa/app-design/)

Una de las diferencias clave entre las Aplicaciones Web Progresivas y los sitios web y aplicaciones web clásicas es la facilidad de instalación. Esto crea una experiencia independiente más integrada en la plataforma y el sistema operativo. La instalación permite una nueva flexibilidad y una nueva responsabilidad, ya que no tendremos una interfaz de usuario de navegador alrededor de nuestro contenido.

## [_Assets_ y _Data_](https://web.dev/learn/pwa/assets-and-data/)

Una Aplicación Web Progresiva es un sitio web; Todos sus _assets_ son los mismos que en la web, pero con nuevas herramientas para hacer que esos  _assets_ se carguen rápidamente cuando están en línea y disponibles cuando están fuera de línea.

## [_Service Workers_](https://web.dev/learn/pwa/service-workers/)

Los trabajadores de servicios son una parte fundamental de una PWA. Permiten una carga rápida (independientemente de la red), acceso sin conexión, notificaciones automáticas y otras capacidades.

## [Almacenamiento en Caché](https://web.dev/learn/pwa/caching/)

Puede utilizar la API de almacenamiento en caché para descargar, almacenar, eliminar o actualizar activos en el dispositivo. Luego, estos activos se pueden entregar en el dispositivo sin necesidad de una solicitud de red.

## [Servicio](https://web.dev/learn/pwa/serving/)

Utilizando el evento de recuperación del trabajador del servicio, puede interceptar solicitudes de red y ofrecer una respuesta utilizando diferentes técnicas.

## [_Workbox_](https://web.dev/learn/pwa/workbox/)

_Workbox_ es un conjunto de módulos que simplifican las interacciones comunes de los trabajadores de servicios, como el enrutamiento y el almacenamiento en caché. Cada módulo aborda un aspecto específico del desarrollo de los trabajadores de servicios.

_Workbox_ tiene como objetivo hacer que el uso de trabajadores de servicios sea lo más fácil posible y, al mismo tiempo, permitir la flexibilidad para adaptarse a requisitos de aplicaciones complejas cuando sea necesario.

## [_Offline Data_](https://web.dev/learn/pwa/offline-data/)

Para crear una experiencia sólida fuera de línea, debe implementar la administración de almacenamiento. Herramientas como _IndexedDB_, _Cache_, _Storage Manager_, _Persistent Storage_ e _Content Indexing_ pueden ayudar.

## [Instalación](https://web.dev/learn/pwa/installation/)

Las aplicaciones instaladas son de fácil acceso y pueden aprovechar algunas integraciones más profundas con el sistema operativo. Aprenda a hacer que su PWA sea instalable y obtenga esos beneficios.

## [_Web App Manifest_](https://web.dev/learn/pwa/web-app-manifest/)

El manifiesto de la aplicación web es un archivo JSON que define cómo se debe tratar la PWA como una aplicación instalada, incluida la apariencia y el comportamiento básico dentro del sistema operativo.

## [Aviso de Instalación](https://web.dev/learn/pwa/installation-prompt/)

Para los sitios que pasan los criterios de instalación de PWA, el navegador activa un evento para solicitar al usuario que lo instale. La buena noticia es que puedes utilizar este evento para personalizar tu mensaje e invitar a los usuarios a instalar tu aplicación.

## _Update_

Es probable que su PWA necesite una actualización. [Este apartado](https://web.dev/learn/pwa/update/) le brinda las herramientas para actualizar diferentes partes de su PWA, desde _assets_ hasta metadatos.

## Mejoras

Su usuario espera una buena experiencia. [En esta sección](https://web.dev/learn/pwa/enhancements/), verá cómo mejorar su PWA con pantallas de presentación, accesos directos a aplicaciones y cómo funcionan las sesiones.

## [Detección](https://web.dev/learn/pwa/detection/)

Identificar cómo interactúan los usuarios con su aplicación es útil para personalizar y mejorar la experiencia del usuario. Por ejemplo, puede comprobar si su aplicación ya está instalada en el dispositivo del usuario e implementar funciones como transferir la navegación a la aplicación independiente desde el navegador.

## Integración del Sistema Operativo

Su PWA funcionará fuera del navegador. [Este segmento](https://web.dev/learn/pwa/os-integration/) cubre cómo integrarse aún más con el sistema operativo una vez que los usuarios instalan su aplicación.

## [_Window Management_](https://web.dev/learn/pwa/windows/)

Una PWA fuera del navegador administra su propia ventana. En este capítulo, comprenderá las API y las capacidades para administrar una ventana dentro del sistema operativo.

## Funciones Experimentales

Hay capacidades de PWA que aún están en construcción y tú puedes ser parte de su desarrollo. [En este enlace](https://web.dev/learn/pwa/experimental/), aprenderá sobre el proyecto Fugu, cómo registrarse para una prueba de origen y cómo usar API experimentales.

## [Herramientas y Depuración](https://web.dev/learn/pwa/tools-and-debug/)

Explora las herramientas disponibles para desarrollar, depurar y probar sus aplicaciones web progresivas.

## [Arquitectura](https://web.dev/learn/pwa/architecture/)

Usted toma algunas decisiones al desarrollar una PWA, como si crear una aplicación de una sola página o una aplicación de varias páginas, y si la alojará en la raíz de su dominio o dentro de una carpeta.

## Manejo de Complejidad

Mantener una aplicación web sencilla puede resultar sorprendentemente complicado. En [este módulo](https://web.dev/learn/pwa/complexity/), aprenderá cómo funcionan las API web con subprocesos y cómo puede usarlos para patrones de PWA comunes, como la administración de estado.

## Capacidades

Las PWA no solo están vinculadas a la pantalla. [Este capítulo](https://web.dev/learn/pwa/capabilities/) trata sobre las capacidades que tiene una PWA hoy en día en términos de hardware, sensores y uso de plataforma.

## Conclusión

Entonces, ¿estás listo para aprender PWA con Vite Plugin?
