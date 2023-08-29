# Ejemplo de Notificaciones

En este apartado partiremos de un ejemplo de [Notificación](https://developer.mozilla.org/en-US/docs/Web/API/Notification) construido en [Vanilla JavaScript](https://mdn.github.io/dom-examples/to-do-notifications/) adaptado a nuestro ejemplo en Vue.

TODO

```sh
npm i @vueuse/core
```

TODO

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
    const notification = new Notification("Hi, permissions have been granted before!");
  }

  // If not, we ask permission for notification
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user grants us, we create the notification
      if (permission === "granted") {
        const notification = new Notification("Hi, permissions are granted now!");
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
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </header>

    <RouterView />

    <div class="mx-auto w-full lg:w-3/4 mt-7">
      <button v-if='!permission' class="btn btn-default" @click="notifyMe">Notify me!</button>
      <button v-else='permission' class="btn btn-default" @click="notifyMe">Try to notify me!</button>
    </div>
  </div>
</template>
```
TODO

![example](./img/example-00.jpg)

TODO

![example](./img/example-01.jpg)

TODO

https://ecanquiz.github.io/vue-todo-pwa/
