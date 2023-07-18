<script lang="ts" setup>
import { LogoFacebook, LogoInstagram } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

</script>

<template>
  <footer class="footer">
    <div class="footer-bg"></div>
    <div class="container">
      <div class="footer__socials">
        <n-icon class="text-2xl text-black"
        >
          <LogoFacebook />
        </n-icon>
        <n-icon class="text-2xl text-black"
        >
          <LogoInstagram />
        </n-icon>
      </div>
    </div>
  </footer>
</template>
<style scoped>
</style>
