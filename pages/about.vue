<script setup >
import {onMounted} from "vue";

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

const titleRef = ref(null)
// onMounted(()=>{
//
//   const phrase = titleRef.value.innerText
//   const words = phrase.split(' ');
//
//   words.forEach((el, index) => {
//     words[index] = `<span><i>${words[index]}</i></span>`;
//   });
//   console.log(words)
//   const joinedWords = words.join(' ');
//   titleRef.value.innerHTML = joinedWords
//
//     const children = document.querySelectorAll('span > i');
//     children.forEach((node, index) => {
//     node.style.animationDelay = `${index * .2}s`;
//   });
//
// })

// const swiftUpElements = document.querySelector(".swift-up-text");
// console.log(swiftUpElements)
// const el = document.querySelector(".title2");
// console.log("el",el)
// swiftUpElements.forEach(elem => {
//
//   const words = elem.textContent.split(' ');
//   console.log(words)
//   elem.innerHTML = '';
//
//   words.forEach((el, index) => {
//     words[index] = `<span><i>${words[index]}</i></span>`;
//   });
//   console.log(words)
//
//   elem.innerHTML = words.join(' ');
//   console.log(elem)
//
//   const children = document.querySelectorAll('span > i');
//   children.forEach((node, index) => {
//     node.style.animationDelay = `${index * .2}s`;
//   });
//
// });
</script>

<template>
  <div class="container">
    <h1 class="swift-up-text" ref="titleRef">
      <span><i style="animation-delay: 0s;">This </i></span>
      <span><i style="animation-delay: 0s;"> is</i></span>
      <span><i style="animation-delay: 0s;"> the</i></span>
      <span><i style="animation-delay: 0s;"> about</i></span>
<!--      This  is the About us page and I hope this will be fun :)!-->
    </h1>
  </div>
</template>
<style scoped>

:root{
  --headingSize: 55px;
  --background-color: black;
}


h1{
  margin: 0;
  letter-spacing: -1px;
  font-size: var(--headingSize);
}

.container{
  width: 50%;
}

span{
  display: inline-block;
  overflow: hidden;
  animation: 1.3s swift-up ease-in-out forwards;
  color: red;
}

i{
  font-style: normal;
  position: relative;
  top: var(--headingSize);
  animation: 1.5s swift-up ease-in-out forwards;
}

@keyframes swift-up {
  to {
    top: 0;
  }
}

@media screen and (max-width: 1000px){
  .container{
    width: auto;
    margin: 0 10%;
  }

  :root{
    --headingSize: 35px;
  }
}
</style>
