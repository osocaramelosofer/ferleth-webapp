import { defineStore } from 'pinia'
import {darkTheme} from "naive-ui"
import {ref, computed} from "vue"
import { enUS, esAR, zhCN,
  dateEnUS, dateZhCN, dateEsAR } from 'naive-ui'

export const useAppStore = defineStore('global',() => {
  // ref()s become state properties
  const theme = ref(darkTheme)
  let themeNameRef = ref(null)
  const localNameRef = ref('en-US')

  // computed()s become getters
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
  function changeLanguage(language){
    if(language === 'en-US') localNameRef.value = 'es-AR'
    if(language === 'es-AR') localNameRef.value = 'en-US'
  }

  return { localNameRef, changeDarkTheme, theme, isDark, changeLanguage }
})
