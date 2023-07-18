<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core"
import {onMounted} from "vue";

// definePageMeta({
//   pageTransition: {
//     name: 'fade'
//   }
// })



</script>

<template>
<!--  <BaseWrapper>-->
    <NaiveMenu>
      <slot />
    </NaiveMenu>
<!--    <header>-->
<!--      <div class="header-bg"></div>-->
<!--      <BaseNavbar />-->
<!--    </header>-->

<!--    <div>-->

<!--    </div>-->
<!--    <main>-->
<!--      <slot />-->
<!--    </main>-->

<!--    <BaseFooter />-->
<!--  </BaseWrapper>-->
</template>
<style scoped>
.header-bg{
  position: absolute;
  width: 1500px;
  height: 1500px;
  background-color: #E31254;
  border-radius: 50%;
  top: -750px;
  /*left: 0;*/
  /*right: 0;*/
  z-index: -1;
  transform: translateX(-10%);
}
</style>
