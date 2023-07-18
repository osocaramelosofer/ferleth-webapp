<script setup>
import { SunnyOutline, MoonOutline } from '@vicons/ionicons5'
import {NSwitch, NIcon} from "naive-ui";
import {useDark, useToggle} from "@vueuse/core/index";

const isDark = useDark()
const toggleDark = useToggle(isDark)
// const active = ref(false)

const railStyle = ({focused,checked}) => {
  const style = {};
  if (checked) {
    style.background = "rgba(77,77,77,0.76)";
    if (focused) {
      style.boxShadow = "0 0 0 1px #d0e3e3e3";
    }
  } else {
    style.background = "rgba(222,222,222,0.76)";
    if (focused) {
      style.boxShadow = "0 0 0 1px #696969CC";
    }
  }
  return style
}

</script>

<template>
  <n-switch @click="toggleDark()" size="medium" :rail-style="railStyle">
    <template #checked-icon>
      <n-icon :component="MoonOutline" />
    </template>
    <template #unchecked-icon>
      <n-icon :component="SunnyOutline" />
    </template>
  </n-switch>
</template>
<style scoped>
</style>
