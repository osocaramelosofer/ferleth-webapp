<script setup lang="ts">
// Naive ui Imports
import {NForm, NFormItem, NInput, NButton, NDatePicker, NInputNumber, NSelect, NIcon, NumberAnimationInst,
  NNumberAnimation, NStatistic,FormInst, useMessage, NSpace} from 'naive-ui'
import {ExtensionPuzzleOutline} from "@vicons/ionicons5";
//Local Imports
import {orderFormRules} from "~/helpers/order/orderFormRules"
import {computed, ref, watch} from "vue";
import {formValue} from "@/composables/order/useOrderForm"
import {qualityOptions} from "~/helpers/order/order";
import {submitOrder} from "@/firebase/order.ts"
import {useOrderStore} from "~/stores/storeOrder";
import {useAppStore} from "@/stores/store"
import {useRoute} from "#app/composables/router";
import { storeToRefs } from 'pinia'

const globalStore = useAppStore()
const { localRef } = storeToRefs(globalStore)

// i18n
const i18n = function (data) {
  return {
    locale: localRef.value,
    t (key) {
      const locale = localRef.value.name
      return data[locale][key]
    }
  }
}
const locales = {
  'es-AR': {
    dark: 'Oscuro',
    light: 'Claro',
    searchPlaceholder: 'Buscar',
    home: 'Inicio',
    doc: 'Docs',
    component: 'Components',
    common: 'Common',
    debug: 'Debug',
    alreadyHome: 'You are already in home page',
    tusimpleTheme: '图森主题',
    defaultTheme: 'Tusimple tema'
  },
  'en-US': {
    dark: 'Dark',
    light: 'Light',
    searchPlaceholder: 'Search',
    home: 'Home',
    doc: 'Docs',
    component: 'Components',
    common: 'Common',
    debug: 'Debug',
    alreadyHome: 'You are already in home page. No clicking anymore.',
    tusimpleTheme: 'TuSimple Theme',
    defaultTheme: 'Default Theme'
  }
}
const { t } = i18n(locales)



definePageMeta({
  name:"order",
  title: "Create Order"
})

const route = useRoute()
const store = useOrderStore()
const { orderForm } = storeToRefs(store)
const formRef = ref<FormInst | null>(null) // I think this is for validations
const message = useMessage()

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      store.setFormOrderValue(orderForm.value)
      message.success('successful')
      navigateTo({path: '/order/stoleCreate',})
    } else {
      message.error('Double check the inputs please')
    }
  })
}

// Total Cost Animation
const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
function animateTotalCost () {
  setTimeout(() => {
    numberAnimationInstRef.value?.play();
  }, 300);
}
// Limit to Total Cost Animation
const totalCost = computed(()=>{
  return orderForm.value.totalCost
})
// Watch Total Cost Animation
watch([() => orderForm.value.quality, () => orderForm.value.pieces], () => {
  orderForm.value.totalCost = costPerPiece.value * orderForm.value.pieces;
  orderForm.value.costPerUnit = costPerPiece.value;
});
// Setting up the cost per piece base on the quality selected
const costPerPiece = computed(()=>{
  switch (orderForm.value.quality) {
    case "low":
      return 7.50
    case "medium":
      return 11.00
    case "high":
      return 14.50
    default:
      return 10
  }
})

</script>

<template>
  <div>
    <SharedIdiomButton />
<!--    <h1>{{t('home')}}</h1>-->
<!--    <pre>{{localRef}}</pre>-->
    <n-config-provider :locale="localRef">
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
          <n-form-item label="School Name" path="schoolName">
            <n-input v-model:value="orderForm.schoolName" clearable :placeholder="t('dark')" />
          </n-form-item>

          <n-form-item label="Date of Order Creation" path="timestampCreation">
            <n-date-picker v-model:value="orderForm.timestampCreation" type="date" clearable size="large"/>
          </n-form-item>

          <n-form-item label="Due Date" path="dueTimestamp">
            <n-date-picker v-model:value="orderForm.dueTimestamp" type="date" clearable size="large"/>
          </n-form-item>

          <n-form-item label="Number of Pieces" path="pieces">
            <n-input-number v-model:value="orderForm.pieces" :step="500" :min="500" :max="10000"  @click="animateTotalCost">
              <template #suffix>
                pcs
                <n-icon :component="ExtensionPuzzleOutline"/>
              </template>
            </n-input-number>
          </n-form-item>

          <n-form-item label="Quality" path="">
            <n-select v-model:value="orderForm.quality" :options="qualityOptions" @update:value="animateTotalCost" />
          </n-form-item>

          <n-statistic label="Total Cost" tabular-nums>
            <n-number-animation
                ref="numberAnimationInstRef"
                show-separator
                :from="0"
                :to="totalCost"
                :active="false"
            />
          </n-statistic>

          <!--  TODO: Add inputs for images
                TODO: Add stores to save a form -->
          <n-space justify="center">
            <n-form-item>
              <n-button @click="handleValidateClick">
                Next
              </n-button>
            </n-form-item>
          </n-space>
        </n-space>
      </n-form>
    </n-config-provider>

  </div>

</template>
