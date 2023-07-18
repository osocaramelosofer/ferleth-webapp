<script lang="ts" setup>
import {NMessageProvider} from 'naive-ui'
</script>

<template>
  <n-message-provider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </n-message-provider>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
.ferras-fade-enter-active {
  transition: all 0.3s ease-out;
}

.ferras-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.ferras-fade-enter-from,
.ferras-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.dark {
  background: #16171d;
  color: #fff;
}
</style>
