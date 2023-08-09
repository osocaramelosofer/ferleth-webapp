import {useAppStore} from "@/stores/store"
import {storeToRefs} from "pinia";

// i18n Internationalization
export const translate = function (data) {
  const store = useAppStore();
  const {localNameRef} = storeToRefs(store)
  return {
    t (key) {
      return data[localNameRef.value][key]
    }
  }
}
