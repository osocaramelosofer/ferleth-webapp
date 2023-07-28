<script setup lang="ts">
// Naive ui Imports
import {NForm, NFormItem, NInput, NButton, NDatePicker, NInputNumber, NSelect, NIcon, NumberAnimationInst, NNumberAnimation, NStatistic} from 'naive-ui'
import {FormInst, useMessage, NSpace, NCard, NLayout} from 'naive-ui'
import {ExtensionPuzzleOutline} from "@vicons/ionicons5";
// Firebase Imports
import {collection, addDoc, setDoc} from "firebase/firestore";
import {db} from "@/firebase"
import { runTransaction } from "firebase/firestore";
//Local Imports
import {Order} from "@/types/Order"
import orderFormRules from "~/helpers/order/orderFormRules"
import {computed, ref, watch} from "vue";
import {formValue} from "@/composables/order/useOrderForm"
import {qualityOptions} from "~/helpers/order/order";


const formRef = ref<FormInst | null>(null) // I think this is for validations
const message = useMessage()


async function setOrderNumberUID(sfDocRef, orderUID){
  try {
    await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(sfDocRef);
      if (!sfDoc.exists()) {
        throw "Document does not exist!";
      }

      const newPopulation = sfDoc.data().orderNumber = orderUID;
      transaction.update(sfDocRef, { orderNumber: newPopulation });
    });
    console.log("Transaction successfully committed!");
  } catch (e) {
    console.log("Transaction failed: ", e);
  }
}



const submitOrder = async (order: Order) => {
  try {
    const docRef = await addDoc<Order>(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
    await setOrderNumberUID(docRef, docRef.id)
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


// Total Cost Animation Field
const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
function animateTotalCost () {
  console.log(totalCost.value)
  setTimeout(() => {
    numberAnimationInstRef.value?.play();
  }, 300);
}

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
  <div h-full >
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
      <div class="flex flex-col bg-slate-100 px-12 pb-12 rounded-xl dark:bg-red-200">
        <h1>Create Order</h1>

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
              Validate
            </n-button>
          </n-form-item>
        </n-space>
      </div>

<!--      <pre>-->
<!--        {{ formValue }}-->
<!--      </pre>-->

    </n-form>
  </div>
</template>
