import {inject, provide, reactive, toRef, watchEffect} from "vue";
import {useAppStore} from "~/stores/store";
import { storeToRefs } from 'pinia'


const globalStore = useAppStore()
const { localRef } = storeToRefs(globalStore)

// i18n
export const i18n = function (data) {
  return {
    locale: localRef.value,
    t (key) {
      const locale = localRef.value.name
      return data[locale][key]
    }
  }
}
