<script setup >
import {onMounted} from "vue";

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

const x = 50
const width = 200
const y = 50
const height = 100
const fillColor = ref('blue')
const strokeColor = ref('black')

const changeColor = () => {
  // Aquí puedes implementar la lógica para cambiar el color del rectángulo

  if(fillColor.value === 'blue'){
    fillColor.value = 'red'
    strokeColor.value = 'yellow'
  }else {
  fillColor.value = 'blue'
    strokeColor.value = 'black'

  }
}
</script>

<template>
  <div>
    <svg>
      <rect :x="x" :y="y" :width="width" :height="height"
            :fill="fillColor"
            :stroke="strokeColor" stroke-width="10"
      ></rect>
<!--      <rect :x="x" :y="y" :width="width" :height="height" :style="{ fill: fillColor } "></rect>-->
    </svg>
    <button @click="changeColor">Cambiar color</button>
  </div>
</template>

<style scoped>

</style>
