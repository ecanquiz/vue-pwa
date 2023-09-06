# Notificaciones

>En este apartado agregaremos, a nuestra [PWA desarrollada en la sección anterior](./pwa-for-vite/create-website.html) con Vue, un ejemplo de [Notificación](https://developer.mozilla.org/en-US/docs/Web/API/Notification) migrado desde [Vanilla JavaScript](https://mdn.github.io/dom-examples/to-do-notifications/).

## `usePermission`

Para conocer si nuestra aplicación ya posee otorgado o no el permisos de notificación, utilizaremos [`usePermission`](https://vueuse.org/core/usePermission/#usepermission) de la colección de utilidades de composición esenciales de [VueUse](https://vueuse.org/).


```sh
npm i @vueuse/core
```

## `App.vue`

Copie y pegue dentro del archivo `.src/App.vue` el siguiente código.

`📃./src/App.vue`
```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView } from 'vue-router'
import { usePermission } from '@vueuse/core'

const notifications = ref(
  usePermission('notifications')
)

const permission = computed(
  () => notifications.value === "granted"
)

const notifyMe = () => {
  // We check if the browser supports notifications
  if (!("Notification" in window)) {
    alert(
      "This browser does not support desktop notifications",
    );
  }

  // We check if the permissions have been granted before
  else if (Notification.permission === "granted") {
    // If it is correct, we launch a notification
    const notification = new Notification(
      "Hi, permissions have been granted before!"
    );
  }

  // If not, we ask permission for notification
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user grants us, we create the notification
      if (permission === "granted") {
        const notification = new Notification(
          "Hi, permissions are granted now!"
        );
      }
    });
  }

  // Lastly, if the user has denied permission,
  // and wants to be respectful, there's no need to bother them.
}
</script>

<template>
  <div class="m-10">
    <header class="mx-auto w-full lg:w-3/4">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>

    <RouterView />

    <div class="mx-auto w-full lg:w-3/4 mt-7">
      <button
        v-if='!permission'
        class="btn btn-default"
        @click="notifyMe"
      >
        Notify me!
      </button>
      <button
        v-else='permission'
        class="btn btn-default"
        @click="notifyMe"
      >
        Try to notify me!
      </button>
    </div>
  </div>
</template>
```

## Notificaciones

De vuelta, cuando refresque su aplicación, el navegador le preguntará si desea mostrar notificaciones.

![example](./img/example-00.jpg)

Si lo acepta, el navegador mostrará notificaciones.

![example](./img/example-01.jpg)

