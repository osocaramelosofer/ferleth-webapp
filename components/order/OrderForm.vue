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

const store = useOrderStore()

const formRef = ref<FormInst | null>(null) // I think this is for validations
const message = useMessage()

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      store.setFormOrderValue(formValue.value)
      console.log(store.formValueOrder)
      // submitOrder(formValue.value)
      message.success('successful')
      navigateTo({path: '/order/forms/stole',})
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
  return formValue.value.totalCost
})
// Watch Total Cost Animation
watch([() => formValue.value.quality, () => formValue.value.pieces], () => {
  formValue.value.totalCost = costPerPiece.value * formValue.value.pieces;
  formValue.value.costPerUnit = costPerPiece.value;
});
// Setting up the cost per piece base on the quality selected
const costPerPiece = computed(()=>{
  switch (formValue.value.quality) {
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
    <n-form
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="orderFormRules"
        size="medium"
        :show-feedback="true"
        style="justify-content: center; align-items: center; height: 100%"
    >
      <n-space vertical>
<!--        <h1>Create Order</h1>-->

        <n-form-item label="School Name" path="schoolName">
          <n-input v-model:value="formValue.schoolName" clearable placeholder="Input the School Name"/>
        </n-form-item>

        <n-form-item label="Date of Order Creation" path="timestampCreation">
          <n-date-picker v-model:value="formValue.timestampCreation" type="date" clearable size="large"/>
        </n-form-item>

        <n-form-item label="Due Date" path="dueTimestamp">
          <n-date-picker v-model:value="formValue.dueTimestamp" type="date" clearable size="large"/>
        </n-form-item>


        <n-form-item label="Number of Pieces" path="pieces">
          <n-input-number v-model:value="formValue.pieces" :step="500" :min="500" :max="10000"  @click="animateTotalCost">
            <template #suffix>
              pcs
              <n-icon :component="ExtensionPuzzleOutline"/>
            </template>
          </n-input-number>
        </n-form-item>

        <n-form-item label="Quality" path="">
          <n-select v-model:value="formValue.quality" :options="qualityOptions" @update:value="animateTotalCost" />
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
        <pre>
          {{store.formValueOrder}}
        </pre>
      </n-space>
    </n-form>
</template>
