import { defineStore } from 'pinia'
import {darkTheme} from "naive-ui"
// Setup Stores
//https://pinia.vuejs.org/core-concepts/#setup-stores

export const useAppStore = defineStore('global',() => {
  //In Setup Stores:
  // ref()s become state properties
  const count = ref(0)
  const name = ref('Eduardo')
  const theme = ref(null)

  // computed()s become getters
  const doubleCount = computed(() => count.value * 2)


  // function()s become action
  function increment() {
    count.value++
  }
  function changeDarkTheme(){
    theme.value = darkTheme
  }

  return { count, name, doubleCount, increment, changeDarkTheme, theme }
})
