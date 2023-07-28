<script setup lang="ts">
// Naive ui Imports
import {NForm, NFormItem, NInput, NButton, NDatePicker, NInputNumber, NSelect, NIcon, NumberAnimationInst, NNumberAnimation, NStatistic} from 'naive-ui'
import {FormInst, useMessage, NSpace, NCard, NLayout} from 'naive-ui'
import {ExtensionPuzzleOutline} from "@vicons/ionicons5";
// Firebase Imports
import {collection, addDoc, setDoc} from "firebase/firestore";
import {db} from "@/firebase"
import {Order} from "@/types/Order"
//Local Imports
import {stoleColorOptions, stoleTypeOptions} from "@/helpers/data/stole"
import orderFormRules from "@/helpers/validation_rules/orderFormRules"
import {computed, Ref, ref, watch} from "vue";






// Working with timestamp.
// const timestamp = +new Date; this is how we create a timestamp
// const convertDate = new Date(+new Date * 1000); this is how we can convert the timestamp to datetime
// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
//https://stackoverflow.com/questions/221294/how-do-i-get-a-timestamp-in-javascript

const formRef = ref<FormInst | null>(null) // I think this is for validations
const message = useMessage()

const formValue: Ref<Order> = ref<Order>({
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

// select quality input
const qualityOptions = [
  { label: 'Low', value: 'low'},
  { label: 'Medium', value: 'medium'},
  { label: 'High', value: 'high'},
]

// Total Cost Animation Field
const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
function animateTotalCost () {
  console.log(totalCost.value)
  setTimeout(() => {
    numberAnimationInstRef.value?.play();
  }, 300); // 2000 milisegundos (2 segundos de retraso)
}

// const totalCost = ref(0)
const totalCost = computed(()=>{
  return formValue.value.totalCost
})

// Figuring out the total cost
const costPerPiece = computed(()=>{
  console.log("updating")
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
watch([() => formValue.value.quality, () => formValue.value.pieces], () => {
  formValue.value.totalCost = costPerPiece.value * formValue.value.pieces;
  formValue.value.costPerUnit = costPerPiece.value;
});
</script>

<template>
  <n-card h-full>
    <n-form
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="orderFormRules"
        size="medium"
        :show-feedback="true"
    >
      <!--  todo: center this shit of n-space  style=" background-color: blue; width: 1000px; align-content: center; justify-content: center; align-items: center; justify-items: center"-->
      <n-space vertical >
        <h1>Create Order</h1>
        <n-form-item label="Order Number" path="orderNumber">
          <!-- TODO: Change for a input number(maybe not, could be a good idea generate a custom num order base on schoolName and date) -->
          <n-input v-model:value="formValue.orderNumber" clearable placeholder="Order Number">
            <template #suffix>#</template>
          </n-input>
        </n-form-item>

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
        <n-button @click="animateTotalCost">
          Play
        </n-button>
        <pre>
          {{ formValue }}
        </pre>

        <!--
              TODO: Lettering Specifications lado izquierdo o derecho y arriba o abajo
              TODO: Add inputs for images
              TODO: Add stores to save a form
        -->
        <n-space justify="center">
          <n-form-item>
            <n-button @click="handleValidateClick">
              Validate
            </n-button>
          </n-form-item>
        </n-space>

      </n-space>

      <!--      <n-space vertical>-->
      <!--        <pre>{{ formValue }}</pre>-->
      <!--      </n-space>-->

    </n-form>
  </n-card>
</template>
<style scoped>
</style>
