<script setup>
import {NSpace} from "naive-ui"
</script>

<template>
  <div>
    <h1>view orders</h1>
    <n-space vertical>
      <NuxtLink to="https://twitter.com/nuxt_js" target="_blank">
        Nuxt Twitter
      </NuxtLink>
      <!-- <a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener noreferrer">...</a> -->

      <NuxtLink to="https://discord.nuxtjs.org" target="_blank" rel="noopener">
        Nuxt Discord
      </NuxtLink>
      <!-- <a href="https://discord.nuxtjs.org" target="_blank" rel="noopener">...</a> -->

      <NuxtLink to="https://github.com/nuxt" no-rel>
        Nuxt GitHub
      </NuxtLink>
      <!-- <a href="https://github.com/nuxt">...</a> -->

      <NuxtLink to="/contact" target="_blank">
        Contact page opens in another tab
      </NuxtLink>
      <!-- <a href="/contact" target="_blank" rel="noopener noreferrer">...</a> -->

    </n-space>


  </div>
</template>
<style scoped>

</style>
