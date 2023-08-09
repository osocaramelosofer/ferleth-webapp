<script setup lang="ts">
import {  NButton, NConfigProvider, NDatePicker } from 'naive-ui'
import type { GlobalTheme, darkTheme, GlobalThemeOverrides,ButtonProps, FormProps  } from 'naive-ui'
import { enUS, esAR } from 'naive-ui'
import {useAppStore} from '@/stores/store'
import { storeToRefs } from 'pinia'
import { inject } from 'vue'
import {  translate } from '~/composables/usei18n'
import { locales } from '~/constants/locales/locales'


const store = useAppStore()
const { changeLanguage } = storeToRefs(store)
const {t} = translate(locales)
const message = inject('message')

</script>

<template>
  <div>
    <h1 text-center font-bold text-5xl>{{ message }}</h1>
    <h2 text-center>There is nothing here yet but we' ll fix it ;D</h2>

  </div>

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
