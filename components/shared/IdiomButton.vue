<script setup>
import { NButton, NDatePicker } from 'naive-ui'
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
  <n-button @click="handleLocaleUpdate">
    {{ localeLabelMap[localNameRef]}}
  </n-button>
</template>
<style scoped>
</style>
