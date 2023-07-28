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
import {stoleColorOptions, stoleTypeOptions} from "@/helpers/order/stole"
import orderFormRules from "@/helpers/validation_rules/orderFormRules"
import OrderForm from "~/components/order/OrderForm.vue";
import {ref} from "vue";



const message = useMessage()

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
