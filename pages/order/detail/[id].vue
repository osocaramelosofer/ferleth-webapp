<script setup lang="ts">
import {NForm, NFormItem, NInput, NSpace, NCard, NDivider} from 'naive-ui'
import {getOrderDetail, getStoleDetail} from "~/services/order";
import {translate} from "~/composables/usei18n";
import {orderFormLocales} from "~/constants/locales/orderFormLocales";
import  stoleLocales from "~/constants/locales/stoleForm";


const {t} = translate(orderFormLocales)
const {t:t2} = translate(stoleLocales)
const route = useRoute()
const orderNumber = route.params.id
const orderDetail = await getOrderDetail(orderNumber)
const stoleDetail = await getStoleDetail(orderDetail.stoleUID)


</script>

<template>
  <n-card class="pb-20 mt-10">
    <n-form
        label-placement="left"
        require-mark-placement="right-hanging"
        label-width="auto"
    >
      <h1 text-center>{{t('titleDetail')}}</h1>
      <n-divider />

      <n-space justify="space-evenly">
        <div class="container max-w-96" >
          <n-form-item :label="t('schoolName')">
            <n-input size="small" round :value="orderDetail.schoolName" disabled />
          </n-form-item>
          <n-form-item :label="t('numberOfPieces')">
            <n-input size="small" round :value="orderDetail.pieces" disabled />
          </n-form-item>
          <n-form-item :label="t('totalCost')">
            <n-input size="small" round :value="orderDetail.formatCurrency(orderDetail.totalCost)" disabled />
          </n-form-item>
        </div>

        <div class="container max-w-96">
          <n-form-item :label="t('dueTimestamp')">
            <n-input size="small" round :value="orderDetail.timestampToDate(orderDetail.dueTimestamp)" disabled />
          </n-form-item>
          <n-form-item :label="t('timestampCreation')">
            <n-input size="small" round :value="orderDetail.timestampToDate(orderDetail.timestampCreation)" disabled />
          </n-form-item>
          <n-form-item :label="t('orderNumber')">
            <n-input size="small" round :value="orderDetail.orderNumber" disabled />
          </n-form-item>
        </div>
      </n-space>

      <n-space mt-12 justify="space-evenly">
        <div class="container max-w-96">
          <n-form-item :label="t2('stoleColor')">
            <n-input size="small" round :value="stoleDetail.color" disabled />
          </n-form-item>
          <n-form-item :label="t2('stoleLettering')">
            <n-input size="small" round :value="stoleDetail.lettering" disabled />
          </n-form-item>
          <n-form-item :label="t2('borderColor')">
            <n-input size="small" round :value="stoleDetail.borderColor" disabled />
          </n-form-item>
          <n-form-item :label="t2('colorLettersAndNumbers')">
            <n-input size="small" round :value="stoleDetail.letteringAndNumberColors" disabled />
          </n-form-item>
        </div>

        <div class="container max-w-96">
          <div class="img-container w-36 h-36">
            <img src="https://firebasestorage.googleapis.com/v0/b/valiente-616ef.appspot.com/o/test?alt=media&token=0e45c5bb-15a1-4550-804b-a8d3ebf5f45c"
                 alt="stole image"
                 class="object-cover w-full"
            />
          </div>
        </div>
      </n-space>
    </n-form>

<!--    <pre>{{orderDetail}}</pre>-->
<!--    <pre>{{stoleDetail}}</pre>-->
  </n-card>
</template>
<style scoped>
</style>
