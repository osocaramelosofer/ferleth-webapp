<script setup>
import { NButton, NDatePicker } from 'naive-ui'
import {useAppStore} from '@/stores/store'
import { storeToRefs } from 'pinia'
const store = useAppStore()

const { localNameRef } = storeToRefs(store)

const localeLabelMap = {
  'es-AR': 'English',
  'en-US': 'Español',
}


</script>

<template>
  <n-button @click="store.changeLanguage(localNameRef)">
    {{ localeLabelMap[localNameRef]}}
  </n-button>
</template>
<style scoped>
</style>
