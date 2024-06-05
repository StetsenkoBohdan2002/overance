<script setup lang="ts"></script>

<template>
  <div id="app-wrapper">
    <div class="container">
      <router-view></router-view>
    </div>
    <notifications class="notification" position="bottom right" max="5" />
  </div>
</template>

<style>
#app-wrapper {
  width: 100%;
  height: 100%;
  min-height: inherit;
}

.notification .notification-title {
  font-size: 20px;
  text-transform: uppercase;
}
.notification .notification-content {
  font-size: 16px;
}

.notification .vue-notification-template {
  border-radius: 5px;
  border-left-width: 10px;
}

.notification .vue-notification-template.error {
  background: #e54258;
}
</style>
