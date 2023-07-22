import { defineStore } from 'pinia'
import {darkTheme} from "naive-ui"
import {ref, computed} from "vue"

export const useAppStore = defineStore('global',() => {
  //In Setup Stores:
  // ref()s become state properties
  const count = ref(0)
  const name = ref('Eduardo')
  const theme = ref(null)
  let themeNameRef = ref(null)

  // computed()s become getters
  const doubleCount = computed(() => count.value * 2)
  const isDark = computed(() => {
    return !!theme.value
  })
  const themeRef = computed(() => {
    const { value } = themeNameRef
    return value === 'dark' ? darkTheme : null
  })

  // function()s become action
  function increment() {
    count.value++
  }
  function changeDarkTheme(){
    if(theme.value){
      theme.value =  null
    }else{
      theme.value = darkTheme
    }
  }

  return { count, name, doubleCount,
    increment, changeDarkTheme, theme, isDark }
})
