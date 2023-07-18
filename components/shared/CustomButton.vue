<script setup>
const props = defineProps({
  onClick: {
    type: Function
  },
})

</script>
<template>
  <button class="push-button" @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 0 15px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: #fff;
  transition: 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}
.push-button {
  background-color: #57b894;

  box-shadow: 0 10px #4fa283;
}
.push-button:hover {
  box-shadow: 0 8px #4fa283;
  transform: translateY(1px);
}
.push-button:active {
  background-color: #4a9377;
  box-shadow: 0 5px #407762;
  transform: translateY(4px);
}

</style>
