<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core"
import {onMounted} from "vue";
import {NMessageProvider, NThemeEditor, NLoadingBarProvider, NNotificationProvider, NDialogProvider,
  NConfigProvider, GlobalTheme, darkTheme, NButton, NSpace,
  NCard, NTimePicker, NLayout} from 'naive-ui'

import {useAppStore} from "~/stores/store";
import { storeToRefs } from 'pinia'

const store = useAppStore()
const {changeDarkTheme, theme } = storeToRefs(store)

// definePageMeta({
//   pageTransition: {
//     name: 'fade'
//   }
// })

const onClick =()=>{
  store.count++
  store.theme =  darkTheme
}


</script>

<template>
  <div>
    <n-space>
      <n-card>
        <n-space>
          <n-button @click="onClick">Dark</n-button>
          <n-button @click="theme = null">Light</n-button>
          <naiveSwitchMenu />
        </n-space>
      </n-card>
      <n-card>
        <n-time-picker
            default-formatted-value="00:12:13"
        />
      </n-card>
    </n-space>
  </div>
<!--    <NaiveMenu>-->
<!--      <slot />-->
<!--    </NaiveMenu>-->
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
