<script setup lang="ts">
import {PerspectiveCamera, Scene, WebGLRenderer} from 'three'
import {onMounted, ref} from "vue";
import {OrbitControls, useGLTF} from "@tresjs/cientos";

const {scene: model} = await useGLTF('/stole.glb')

console.log(model)
</script>

<template>

  <TresCanvas clear-color="#4f4f4f" >
    <TresPerspectiveCamera/>
    <OrbitControls />
    <Suspense>
      <primitive :object="model"/>
    </Suspense>
    <TresGridHelper />
  </TresCanvas>
</template>

