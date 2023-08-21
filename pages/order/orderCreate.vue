<script setup lang="ts">
// Naive ui Imports
import {NForm, NFormItem, NInput, NButton, NDatePicker, NInputNumber, NSelect, NIcon, NumberAnimationInst,
  FormInst, useMessage, NSpace, NCard} from 'naive-ui'
import {ExtensionPuzzleOutline} from "@vicons/ionicons5";
//Local Imports
import {orderFormRules} from "~/helpers/order/orderFormRules"
import {computed, ref, watch} from "vue";
import {qualityOptions} from "~/helpers/order/order";
import {useOrderStore} from "~/stores/storeOrder";
import {useAppStore} from "@/stores/store"
import {useRoute} from "#app/composables/router";
import { storeToRefs } from 'pinia'
import { orderFormLocales as locales } from '~/constants/locales/orderFormLocales'
import { translate } from '~/composables/usei18n'

definePageMeta({
  name:"order",
  title: "Create Order"
})

const globalStore = useAppStore()
const { t } = translate(locales)
const route = useRoute()
const orderStore = useOrderStore()
const { orderForm } = storeToRefs(orderStore)
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const totalCost = ref(0)
const numberOfPieces = ref(orderForm.value.pieces)

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('successful')
      navigateTo({path: '/order/stoleCreate',})
    } else {
      message.error('Double check the inputs please')
    }
  })
}


// Setting up the cost per piece base on the quality selected
const costPerPiece = computed(()=>{
  switch (orderForm.value.quality) {
    case "low":
      orderForm.value.costPerUnit = 7.50
      return 7.50
    case "medium":
      orderForm.value.costPerUnit = 11.00
      return 11.00
    case "high":
      orderForm.value.costPerUnit = 14.50
      return 14.50
    default:
      orderForm.value.costPerUnit = 14.50
      return 14.50
  }
})

watch([costPerPiece, numberOfPieces], ()=>{
  console.log("watching and updating the total cost and the number of pieces")
  totalCost.value = costPerPiece.value * numberOfPieces.value
  orderForm.value.pieces = numberOfPieces.value
  orderForm.value.totalCost = totalCost.value
})
const parseCurrency = (input: string) => {
  const nums = input.replace(/(,|\$|\s)/g, '').trim()
  if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
  return nums === '' ? null : Number.NaN
}

const formatCurrency = (value: number | null) => {
  if (value === null) return ''
  return `${value.toLocaleString('en-US')} \u{24}`
}
</script>

<template>
  <n-card embedded >
    <h1 text-center>{{ t('titleForm')}}</h1>
      <n-form
          ref="formRef"
          inline
          :label-width="80"
          :model="orderForm"
          :rules="orderFormRules"
          size="medium"
          :show-feedback="true"
          style="justify-content: center; align-items: center; height: 100%"
      >
        <n-space vertical>
          <n-form-item :label="t('schoolName')" path="schoolName">
            <n-input v-model:value="orderForm.schoolName" clearable :placeholder="t('schoolNamePlaceholder')" />
          </n-form-item>

          <n-form-item :label="t('timestampCreation')" path="timestampCreation">
            <n-date-picker v-model:value="orderForm.timestampCreation" type="date" clearable :disabled="true" style="width: 100%"/>
          </n-form-item>

          <n-form-item :label="t('dueTimestamp')" path="dueTimestamp">
            <n-date-picker v-model:value="orderForm.dueTimestamp" type="date" clearable size="large" style="width: 100%"/>
          </n-form-item>

          <n-form-item :label="t('numberOfPieces')" path="pieces">
            <n-input-number v-model:value="numberOfPieces" :step="500" :min="500" :max="10000"  @click="animateTotalCost">
              <template #suffix>
                pcs
                <n-icon :component="ExtensionPuzzleOutline"/>
              </template>
            </n-input-number>
          </n-form-item>

          <n-form-item :label="t('quality')" path="">
            <n-select v-model:value="orderForm.quality" :options="qualityOptions" />
          </n-form-item>

          <n-form-item :label="t('totalCost')">
            <n-input-number
                :value="totalCost"
                :default-value="1075"
                :parse="parseCurrency"
                :format="formatCurrency"
                :show-button="false"
                size="large"
                disabled
                w-full
            />
          </n-form-item>
          <n-space justify="center">
            <n-form-item>
              <n-button @click="handleValidateClick">
                {{ t('next')}}
              </n-button>
            </n-form-item>
          </n-space>
        </n-space>
      </n-form>
  </n-card>
</template>
