<script setup>
definePageMeta({
  pageTransition: {
    name: 'ferras'
  }
})

const show = ref(false)
</script>

<template>
  <div class=" bg-slate-900">
    <h2 text-2xl text-white font-bold>Test Transitions</h2>
    <NuxtLink to="/" text-white text-5xl>Home page</NuxtLink>
    <br>
    <NuxtLink to="/about" text-white text-5xl list-none >About page</NuxtLink>
    <div bg-yellow-200>

      <button @click="show = !show">Toggle</button>
      <Transition>
        <p v-if="show">hello</p>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.remove{
  color: inherit;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
