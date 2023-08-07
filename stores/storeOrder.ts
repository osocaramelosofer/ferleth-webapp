import { defineStore } from 'pinia'
import { StepsProps} from "naive-ui"
import {ref, computed, reactive, Ref} from "vue"
import {Order, Stole} from "~/types/Order";

export const useOrderStore = defineStore('order',() => {
  //In Setup Stores:
  // ref()s become state properties
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
  const orderForm: Ref<Order> = ref<Order>({
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
  const stoleForm: Ref<Stole> = ref<Stole>({
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

  // function()s become action
  // maybe I will need this when I check the details of an order I will need to
  // set details of the order you wanna see in some way so we can re-use the page orderCreate.vue to visualize the data
  function setFormOrderValue(formValue: Order){
    formValueOrder.value = formValue
  }



  return {  formValueOrder, stoleForm, orderForm }
})
