import {inject, provide, reactive, toRef, watchEffect} from "vue";
import {useAppStore} from "~/stores/store";
import { storeToRefs } from 'pinia'


const globalStore = useAppStore()
const {localRef} = storeToRefs(globalStore)

// i18n
export const i18n = function (data) {
  // const localeReactive = inject('i18n', null)
  return {
    // locale: toRef(localeReactive, 'locale'),
    locale: localRef.value,
    t (key) {
      // const { locale } = localeReactive
      return data[localRef.value][key]
    }
  }
}

// i18n.provide = function (localeRef) {
//   const localeReactive = reactive({})
//   watchEffect(() => {
//     localeReactive.locale = localeRef.value
//   })
//   provide('i18n', localeReactive)
// }

