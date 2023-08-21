<script setup lang="ts">
import {NForm, NInput} from 'naive-ui'
import {getOrderDetail, getStoleDetail} from "~/services/order";
import {Order} from "@/models/Order"
const route = useRoute()
const orderNumber = route.params.id
const orderDetail = await getOrderDetail(orderNumber)
console.log(orderDetail.timestampToDate(orderDetail.timestampCreation))

const stoleDetail = await getStoleDetail(orderDetail.stoleUID)


</script>

<template>
  <div>
    <div class="container ">
      <h1 text-center>ORDER DETAIL</h1>
      <n-input size="small" round :value="orderDetail.schoolName" disabled />
      <n-input size="small" round :value="orderDetail.quality" disabled />
      <n-input size="small" round :value="orderDetail.pieces" disabled />
    </div>
    <pre>{{orderDetail}}</pre>
    <pre>{{stoleDetail}}</pre>
  </div>
</template>
<style scoped>
</style>
