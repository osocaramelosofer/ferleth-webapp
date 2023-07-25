<script setup lang="ts">
import {PerspectiveCamera, Scene, WebGLRenderer} from 'three'
import {onMounted, ref} from "vue";
import {OrbitControls, useGLTF, } from "@tresjs/cientos";

const {scene: model} = await useGLTF('/stole.glb', { draco: true })

const modelRef = shallowRef<THREE.Object3D>()

watch(modelRef, model => {
  // Do something with the model
  // model.width.set(1)
  // model.color.set("red")
})

console.log(model)
</script>

<template>
  <TresCanvas clear-color="#4f4f4f" >
    <TresPerspectiveCamera/>
    <OrbitControls />
    <Suspense>
      <TresMesh>
        <primitive :object="model" ref="modelRef">
          <TresMeshToonMaterial color="orange" />
        </primitive>
      </TresMesh>
<!--      <GLTFModel path="stole.glb" draco ref="modelRef" />-->

    </Suspense>
    <TresGridHelper />
    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
  </TresCanvas>
</template>

