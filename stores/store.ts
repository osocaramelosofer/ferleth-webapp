import { defineStore } from 'pinia'
import {darkTheme} from "naive-ui"
import {ref, computed} from "vue"
import { enUS, esAR, zhCN,
  dateEnUS, dateZhCN, dateEsAR } from 'naive-ui'

export const useAppStore = defineStore('global',() => {
  // ref()s become state properties
  const theme = ref(null)
  let themeNameRef = ref(null)
  const localNameRef = ref(null)

  // computed()s become getters
  const localeRef = computed(() => {
    // return localNameRef.value === 'es-AR' ? esAR : enUS
    return localNameRef.value === 'es-AR' ? enUS : esAR
  })
  const isDark = computed(() => {
    return !!theme.value
  })
  const themeRef = computed(() => {
    const { value } = themeNameRef
    return value === 'dark' ? darkTheme : null
  })


  // function()s become action
  function changeDarkTheme(){
    if(theme.value){
      theme.value =  null
    }else{
      theme.value = darkTheme
    }
  }

  return { localeRef, changeDarkTheme, theme, isDark }
})
