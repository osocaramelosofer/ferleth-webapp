<script setup>
defineProps({
  title: String,
  text: String
})

</script>

<template>
  <section>
    <h2 class="text-center text-4xl">{{ title }}</h2>
    <p class="text-2xl font-semibold">{{ text }}</p>
    <div flex justify-center>
      <slot />
    </div>
  </section>
</template>
<style scoped>
</style>
