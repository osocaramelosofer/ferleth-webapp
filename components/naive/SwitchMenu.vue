<script setup>
import { SunnyOutline, MoonOutline } from '@vicons/ionicons5'
import {NSwitch, NIcon, darkTheme} from "naive-ui";

import {useAppStore} from "~/stores/store";

const store = useAppStore()
const handleTheme = () => {
  store.changeDarkTheme()
}

const railStyle = ({focused,checked}) => {
  const style = {};
  if (checked) {
    style.background = "rgba(77,77,77,0.76)";
    if (focused) {
      style.boxShadow = "0 0 0 1px #ababab8f";
    }
  } else {
    style.background = "rgba(222,222,222,0.76)";
    if (focused) {
      style.boxShadow = "0 0 0 1px #ababab8f";
    }
  }
  return style
}

</script>

<template>
  <n-switch @click="handleTheme" size="small" :rail-style="railStyle" >
    <template #checked-icon >
      <n-icon :component="MoonOutline" />
    </template>
    <template #unchecked-icon>
      <n-icon :component="SunnyOutline" />
    </template>
  </n-switch>
</template>
<style scoped>
.n-switch__button{
  background-color: black;
}
</style>
