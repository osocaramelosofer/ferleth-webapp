<script setup lang="ts">
import {NInput} from "naive-ui"
import { OrbitControls } from 'three/addons/controls/OrbitControls'
// const { onLoop } = useRenderLoop()
// const geometry = new THREE.TorusGeometry(1, 0.5, 16, 32)
// const material = new THREE.MeshBasicMaterial({ color: 'orange' })
// const donut = new THREE.Mesh(geometry, material)
// scene.add(donut)
const colorValue = ref('blue')
</script>

<template>
  <div w-full h-full>
    <div m-3>
      <n-input v-model:value="colorValue" type="text" placeholder="Input the color value for the mesh" />
    </div>
<!--    <TresCanvas clear-color="#82DBC5" >-->
<!--      <TresPerspectiveCamera-->
<!--          :position="[3, 3, 3]"-->
<!--          :fov="75"-->
<!--          :look-at="[0, 0, 0]"-->
<!--      />-->
<!--      <TresMesh-->
<!--      >-->
<!--        <TresTorusGeometry :args="[1, 0.5, 6, 22]" />-->
<!--        <TresMeshBasicMaterial :color="colorValue" />-->
<!--      </TresMesh>-->
<!--      <TresAmbientLight :intensity="2" />-->
<!--    </TresCanvas>-->



    <TresCanvas clear-color="#82DBC5" >
      <TresPerspectiveCamera
          :position="[3, 3, 3]"
          :fov="75"
          :look-at="[0, 0, 0]"
      />
      <TresMesh
      >
        <TresBoxGeometry :args="[1,1,1]" />
        <TresMeshBasicMaterial :color="colorValue" />
      </TresMesh>
      <TresAmbientLight :intensity="1" />
    </TresCanvas>

  </div>

</template>
