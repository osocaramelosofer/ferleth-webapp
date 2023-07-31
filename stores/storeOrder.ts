import { defineStore } from 'pinia'
import {darkTheme, StepsProps} from "naive-ui"
import {ref, computed, reactive, Ref} from "vue"
import {Order, Stole} from "~/types/Order";

export const useOrderStore = defineStore('order',() => {
  //In Setup Stores:
  // ref()s become state properties
  const count = ref(0)
  const name = ref('Eduardo')
  const theme = ref(null)

  const current = ref(1)
  const currentStatus = ref<StepsProps['status']>('process')

  const formValueOrder: Ref<Order> = ref<Order>({
    orderNumber: 0,
    schoolName: '',
    timestampCreation: +new Date,
    dueTimestamp: +new Date,
    tags: null,
    pieces: null,
    quality: 'medium',
    costPerUnit: null,
    totalCost: null
  });
  const formValueStole: Ref<Stole> = ref<Stole>({
    type: null,
    color: null,
    lettering: null,
    borderColor: null,
    letteringAndNumberColors: null,
    logoColor1: null,
    logoColor2: null,
    orderUID:  null
  });

  // computed()s become getters
  const doubleCount = computed(() => count.value * 2)
  const isDark = computed(() => {
    return !!theme.value
  })

  // function()s become action
  function setFormOrderValue(formValue: Order){
    formValueOrder.value = formValue
  }



  return {  setFormOrderValue, formValueOrder }
})
