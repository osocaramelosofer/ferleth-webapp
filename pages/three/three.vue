<script setup lang="ts">
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {onMounted, ref, computed, watch} from "vue";
import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, SphereGeometry, MeshBasicMaterial } from 'three';
import {useWindowSize} from "@vueuse/core";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

let renderer : WebGLRenderer;
let camera: PerspectiveCamera;
let controls: OrbitControls;

const experience = ref<HTMLCanvasElement | null>(null)
const scene = new Scene();

const { width, height } = useWindowSize()
const aspectRatio = computed(()=> width.value / height.value)

// check when the hight changes
function updateRenderer(){
  renderer.setSize( width.value, height.value);
  renderer.setPixelRatio( window.devicePixelRatio);

}
function updateCamera(){
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}
watch(aspectRatio, updateRenderer)
watch(aspectRatio, updateCamera)
camera = new PerspectiveCamera(
    75,
    aspectRatio.value,
    0.1,
    1000
);
camera.position.z = 5
scene.add(camera)


// const sphere = new Mesh(
//     new SphereGeometry(1,20,20),
//     new MeshBasicMaterial({color: customColor.value})
// )
// scene.add(sphere)

// const loader = new GLTFLoader();
// loader.load( '/stole.glb', function ( gltf ) {
//   console.log("======",gltf.scene)
//   scene.add( gltf.scene);
// }, undefined, function ( error ) {
//   console.error( error );
// } );

const gltfLoader = new GLTFLoader()
const url = '/stole.glb'
gltfLoader.load(url, (gltf) => {
  const root = gltf.scene

})



onMounted(()=>{
  renderer = new WebGLRenderer({
    canvas: experience.value as unknown as HTMLCanvasElement,
    antialias: true
  });

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  updateRenderer()
  updateCamera()

  loop()
})

</script>

<template>
  <suspense>
    <canvas w-full h-full ref="experience">
    </canvas>
  </suspense>
</template>
<style scoped>
</style>
