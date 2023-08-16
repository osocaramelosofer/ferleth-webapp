<script setup lang="ts">
import { ref } from "vue";
import { NForm,NCard,NFormItem,NInput, NSwitch, NUpload, UploadFileInfo, NModal, NButton } from "naive-ui"
import { saveAsJpeg } from "save-html-as-image";
import { toJpeg, toBlob } from 'html-to-image';

import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

// const storage = getStorage()
// const testImageRef = storageRef(storage, 'test')
// uploadBytes(testImageRef, )


// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage();
// Create a storage reference from our storage service
// const storageRef = ref(storage);
// const imagesRef = ref(storage, 'stoles')
// const myImageRef = ref(storage, 'stoles/IMG_20230311_154859_725.jpg')
const baseURL = window.location.origin + "/assets/images"
const x = 50
const width = 200
const y = 50
const height = 100
const imageUrl = ref(null)
const showModalRef = ref(false)
const previewImageUrlRef = ref('')

const stoleColor = ref('blue')
const trimColor = ref('red')
const letters = ref('ECHS')
const areLettersVertical = ref(true)
const year = ref('2024')
const isYearVertical = ref(true)

const verticalLetters = computed(()=>{
  const array = letters.value.split(''); // Convierte la cadena en un array de caracteres
  return array.reverse()
})

const verticalYear = computed(()=>{
  const yearSplitArray = year.value.split('')
  return yearSplitArray.reverse()
})

// todo: check how can I preview the images uploaded
// todo: check the year input just acept numbers and set a limit of characters
// todo: set a limit of character in letters input

async function createAndUploadImage() {
  // const element = document.createElement("div");
  // element.innerHTML = "<p>Hello, world!</p>";
  const element = document.getElementById("imageToSave");
  if(!element) return
  try {
    const blob = await toBlob(element);

    // const storageRef = ref(storage, "images/generated-image.png");
    const storage = getStorage()
    const testImageRef = storageRef(storage, 'test')

    // Sube el archivo Blob a Firebase Storage
    const snapshot = await uploadBytes(testImageRef, blob);
    console.log("Imagen subida:", snapshot);
  } catch (error) {
    console.error("Error al crear o subir la imagen:", error);
  }
}
function saveImage(){
  const node = document.getElementById("imageToSave");
  saveAsJpeg(node, { filename: "test", printDate: false });
}
function handleImageUpload(event) {
  const file = event.target.files[0];
  console.log("file =>", file)
  if (file) {
    // Crear una URL temporal para la imagen seleccionada
    imageUrl.value = URL.createObjectURL(file);
  } else {
    imageUrl.value = null;
  }
}
function handlePreview (file: UploadFileInfo) {
  const { url } = file
  previewImageUrlRef.value = url as string
  showModalRef.value = true
}

const previewFileList = ref<UploadFileInfo[]>([
  {
    id: 'react',
    name: '我是react.png',
    status: 'finished',
    url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    id: 'vue',
    name: '我是vue.png',
    status: 'finished',
    url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  }
])
</script>

<template>
  <div flex>
    <n-card embedded max-w-lg>
      <n-form label-placement="left">
        <n-form-item label="Stole Color:">
          <n-input v-model:value="stoleColor" round placeholder="Medium" />
        </n-form-item>

        <n-form-item label="Trim Color:">
          <n-input v-model:value="trimColor" round placeholder="Medium" />
        </n-form-item>

        <n-form-item label="Stole Letters:">
          <n-input v-model:value="letters" round placeholder="Medium" />
        </n-form-item>
        <n-form-item label="Letters Vertical">
          <n-switch v-model:value="areLettersVertical"/>
        </n-form-item>

        <n-form-item label="Stole Year:">
          <n-input v-model:value="year" round placeholder="Medium" />
        </n-form-item>
        <n-form-item label="Year Vertical:">
          <n-switch v-model:value="isYearVertical"/>
        </n-form-item>
        <div class="flex items-center">
          <span>Logo 1#:  </span>
            <input type="file" @change="handleImageUpload" accept="image/*" />
            <div class="w-30 h-30">
              <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="w-full h-full object-cover" />
            </div>
        </div>

        <n-form-item label="upload photos">
          <n-upload
              :default-file-list="previewFileList"
              list-type="image-card"
              @preview="handlePreview"
              :max="2"
          />
        </n-form-item>
        <n-modal
            v-model:show="showModal"
            preset="card"
            style="width: 600px"
            title="A Cool Picture"
        >
          <img :src="previewImageUrl" style="width: 100%">
        </n-modal>
        <n-button type="primary" ghost @click="saveImage">Save Image</n-button>
        <n-button type="primary" ghost @click="createAndUploadImage">Save Image2</n-button>
      </n-form>
    </n-card>


    <div class="stole-container relative" id="imageToSave" ref="content">
        <div class="stole absolute">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               height="750" width="399"
               viewBox="0 0 440.000000 1380.000000"
               preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,1380.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none" >
              <path :fill="stoleColor" d="M2055 13505 c-117 -26 -240 -82 -304 -139 -13 -11 -157 -172 -320
                -356 -162 -184 -436 -494 -608 -687 -173 -194 -318 -364 -323 -378 -16 -41
                -12 -138 10 -233 19 -87 19 -174 26 -5241 l7 -5153 26 -19 c14 -10 330 -214
                701 -454 l675 -436 3 5618 c2 4058 0 5646 -8 5718 -14 127 -50 292 -100 465
                -21 75 -42 142 -45 151 -7 19 62 33 245 50 118 11 603 10 614 -1 2 -3 -17 -81
                -44 -173 -58 -197 -94 -364 -109 -499 -13 -119 -16 -11331 -3 -11326 5 1 322
                205 704 452 l695 449 6 3555 c4 1956 7 4272 7 5147 l0 1592 25 121 c28 136 29
                143 15 193 -13 46 -22 57 -315 385 -133 148 -389 438 -571 644 -182 206 -354
                396 -381 422 -62 57 -151 103 -251 129 -90 23 -283 25 -377 4z"/>
            </g>
            <text fill="#ffffff" font-size="45" font-family="Verdana" x="60" y="750" v-if="areLettersVertical">
              <tspan x="100" dy="-60" transform="rotate(-90, 60, 750)" v-for="x in verticalLetters">{{x}}</tspan>
            </text>
            <text fill="#ffffff" font-size="45" font-family="Verdana"
                  x="60" y="750" v-else
            >
              {{ letters }}
            </text>

            <text fill="#ffffff" font-size="45" font-family="Verdana"
                  x="260" y="750" v-if="isYearVertical"
            >
              <tspan x="310" dy="-60" transform="rotate(-90, 60, 750)" v-for="x in verticalYear">{{x}}</tspan>
            </text>
            <text fill="#ffffff" font-size="45" font-family="Verdana"
                  x="260" y="750" v-else
            >
              {{ year }}
            </text>
            <text fill="#ffffff" font-size="18" font-family="Verdana"
                  x="270" y="850" v-if="!imageUrl"
            >
              <tspan x="310" dy="-60" transform="rotate(-90, 60, 750)">Add Image</tspan>
            </text>
<!--            <image :href="baseURL + '/harvard-logo.png'" width="100" height="100" x="270" y="850"/>-->
            <image v-else :href="imageUrl" width="100" height="100" x="270" y="850"/>
            <image href="https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png" width="100" height="100" x="75" y="850"/>
          </svg>
        </div>


        <div class="trim absolute">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               height="750" width="400" viewBox="0 0 440.000000 1380.000000"
               preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,1380.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none">
              <path :fill="trimColor" d="M2088 13514 c-143 -26 -329 -111 -357 -163 -5 -9 -53 -70 -106 -136
              l-97 -120 6 -120 c6 -146 28 -244 130 -584 85 -282 126 -440 153 -581 17 -90
              18 -382 23 -5713 l5 -5618 62 -35 63 -35 0 5633 c0 4775 -3 5649 -14 5738 -17
              124 -56 305 -96 437 -32 109 -36 101 75 126 133 30 273 40 455 33 96 -3 189
              -9 207 -12 l31 -6 -14 -47 c-8 -25 -35 -122 -59 -216 -83 -322 -76 280 -73
              -6041 l3 -5642 62 36 63 36 0 5583 c0 6176 -6 5655 65 5940 18 76 70 258 114
              405 96 320 120 428 127 573 l5 110 -118 145 c-65 79 -140 162 -168 182 -124
              94 -338 130 -547 92z m396 -174 c90 -23 193 -75 256 -130 l45 -38 -1 -119 c-2
              -130 -16 -211 -71 -411 l-37 -134 -30 6 c-17 4 -126 9 -243 13 -228 6 -374 -4
              -527 -37 -49 -11 -91 -19 -92 -17 -6 6 -69 233 -91 327 -30 129 -42 341 -21
              380 36 67 252 152 453 179 98 14 268 4 359 -19z"/>
              <path :fill="trimColor" d="M3900 11982 c44 -60 46 -107 10 -272 -18 -82 -19 -275 -25 -5242 -4
              -2837 -4 -5158 -1 -5158 4 0 33 18 65 39 l58 39 6 3018 c4 1659 7 3960 7 5113
              0 1553 3 2123 12 2199 10 88 10 107 -4 135 -18 38 -102 133 -130 148 -19 10
              -19 9 2 -19z"/>
              <path :fill="trimColor" d="M462 11946 c-83 -87 -88 -104 -74 -243 9 -89 13 -1023 15 -3753 1
              -1999 3 -4293 5 -5097 l2 -1462 60 -41 c32 -22 62 -40 65 -40 3 0 3 2314 0
              5142 l-6 5143 -26 129 c-27 140 -26 190 7 244 29 48 9 39 -48 -22z"/>
            </g>
          </svg>
        </div>
      </div>
  </div>
</template>

<style scoped>
.stole-container{
  width: 400px;
  height: 750px;
}
.custom-style {
  right: 100px;
  bottom: 13px;
}
/* ----------------------------------------------
  Generated by AnimatiSS
  Licensed under FreeBSD License
  URL: https://xsgames.co/animatiss
  Twitter: @xsgames_
---------------------------------------------- */

.slide-left{animation:slide-left 0.5s linear both}@keyframes slide-left{0%{transform:translateX(0)}100%{transform:translateX(-100px)}}

</style>
