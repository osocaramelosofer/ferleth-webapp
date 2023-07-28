<script setup lang="ts">
// Naive ui Imports
import {NForm, NFormItem, NInput, NButton, NDatePicker, NInputNumber, NSelect, NIcon} from 'naive-ui'
import {FormInst, useMessage, NSpace, NCard, NLayout} from 'naive-ui'
import {ExtensionPuzzleOutline} from "@vicons/ionicons5";
// Firebase Imports
import {collection, addDoc, setDoc} from "firebase/firestore";
import {db} from "@/firebase"
import {Order} from "@/types/Order"
//Local Imports
import {stoleColorOptions, stoleTypeOptions} from "@/helpers/data/stole"
import orderFormRules from "@/helpers/validation_rules/orderFormRules"
import OrderForm from "~/components/order/OrderForm.vue";

// Working with timestamp.
// const timestamp = +new Date; this is how we create a timestamp
// const convertDate = new Date(+new Date * 1000); this is how we can convert the timestamp to datetime
// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
//https://stackoverflow.com/questions/221294/how-do-i-get-a-timestamp-in-javascript

const formRef = ref<FormInst | null>(null) // I think this is for validations
const message = useMessage()
const formValue = ref<Order>({
  orderNumber: 0,
  schoolName: '',
  timestampCreation: +new Date, // This is a Number Ex:1689653518052
  dueTimestamp: null,

  stole: {
    pieces: null, // abbreviation 'pcs'
    type: '',
    color: '',
    lettering: '',
    borderColor: '',
    letteringAndNumberColors: '',
    logoColor1: '',
    logoColor2: '',

  }
})
const submitOrder = async (order: Order) => {
  try {
    const docRef = await addDoc<Order>(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log("no errors")
      submitOrder(formValue.value)
      message.success('successful')
    } else {
      console.log(errors)
      message.error('Double check the inputs please')
    }
  })
}

// const formThemeOverrides =  {
</script>

<template>
  <div h-full>
<!--    <NaiveSteps />-->
    <OrderForm/>
<!--    <OrderStoleForm />-->
  </div>
</template>
<style scoped>
</style>
