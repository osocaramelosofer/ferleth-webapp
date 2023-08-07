import {inject, provide, reactive, toRef, watchEffect} from "vue";
import {useAppStore} from "~/stores/store";
import { storeToRefs } from 'pinia'


const globalStore = useAppStore()
const { localRef } = storeToRefs(globalStore)

// i18n
export const i18n = function (data) {
  const localeReactive = inject('i18n',{})
  return {
    locale: toRef(localeReactive),
    t (key) {
      const { locale } = localeReactive
      return data[locale][key]
    }
  }
}

i18n.provide = function (localeRef) {
  const localeReactive = reactive({
    locale: undefined
  })
  watchEffect(() => {
    localeReactive.locale = localeRef.value
  })
  provide('i18n', localeReactive)
}
