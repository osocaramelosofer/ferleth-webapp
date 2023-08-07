<script setup lang="ts">
import {  NButton, NConfigProvider, NDatePicker } from 'naive-ui'
import type { GlobalTheme, darkTheme, GlobalThemeOverrides,ButtonProps, FormProps  } from 'naive-ui'
import { enUS, esAR } from 'naive-ui'
import {useAppStore} from '@/stores/store'
import { storeToRefs } from 'pinia'
const store = useAppStore()

const { localRef, localNameRef } = storeToRefs(store)

const localeLabelMap = {
  'es-AR': 'English',
  'en-US': 'Spanish',
}

function handleLocaleUpdate() {
  if(localNameRef.value === 'es-AR'){
    localNameRef.value = 'en-US'
  }
  else {
    localNameRef.value = 'es-AR'
  }
}
</script>

<template>

    <h1 text-center font-bold text-5xl>Welcome!</h1>
    <h2 text-center>There is nothing here yet but we' ll fix it ;D</h2>
</template>

<style scoped>
.bg-base{
  background-color: #F0F8FF;
}
header{
  background-color: #F0FFFF;
}
.dashes-to-title {
  display: flex;
  text-align: center;
  align-items: center;
}
.dashes-to-title::before{
  content: "";
  height: 0.055rem;
  background-color: orange;
  flex-grow: 1;
  margin-right: 0.55rem;
  order: 1;
}
.dashes-to-title::after{
  flex-grow: 1;
  margin-left: 0.555rem;
  order: 3;
  background-color: crimson;
  content: "";
  height: 0.555rem;
}
.title-section{
  position: relative;
  text-align: center;
}
.title-section::before,
.title-section::after {
  content: "";
  position: absolute;
  width: 100px;
  z-index: -1;
  border-bottom: 4px solid orange;
  top: 50%;
  transform: translateY(-50%);
  right: 60%;

}
.title-section::after{
  left: 60%;
}

</style>
