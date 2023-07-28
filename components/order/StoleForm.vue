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
import {stoleColorOptions, stoleTypeOptions} from "@/helpers/order/stole"
import orderFormRules from "~/helpers/order/orderFormRules"
import {computed, Ref, ref, watch} from "vue";


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
      <n-form-item label="Stole Type" path="stole.type">
        <n-select
            v-model:value="formValue.stole.type"
            filterable
            placeholder="Please select a Fabric Type for the Stole"
            :options="stoleTypeOptions"
            clearable
        />
      </n-form-item>

      <n-form-item label="Stole Color" path="stole.color">
        <n-select
            v-model:value="formValue.stole.color"
            filterable
            placeholder="You can start typing to search"
            :options="stoleColorOptions"
            clearable
        />
      </n-form-item>

      <n-form-item label="Stole Lettering" path="stole.lettering">
        <n-input v-model:value="formValue.stole.lettering" clearable
                 placeholder="Write the stole's letters Ex. ECHS"/>
      </n-form-item>

      <n-form-item label="Border Color / Clipping / Border" path="stole.borderColor">
        <n-select
            v-model:value="formValue.stole.borderColor"
            filterable
            placeholder="Choose a Border Color for the Stole"
            :options="stoleColorOptions"
            clearable
        />
      </n-form-item>

      <n-form-item label="Color of Letters and Numbers" path="stole.letteringAndNumberColors">
        <n-select
            v-model:value="formValue.stole.letteringAndNumberColors"
            filterable
            placeholder="Choose the Color for Letters and Numbers"
            :options="stoleColorOptions"
            clearable
        />
      </n-form-item>

      <n-form-item label="Stole Logo Color 1#" path="stole.logoColor1">
        <n-select
            v-model:value="formValue.stole.logoColor1"
            filterable
            placeholder="Choose the Color of Logo 1#"
            :options="stoleColorOptions"
            clearable
        />
      </n-form-item>

      <n-form-item label="Stole Logo Color 2#" path="stole.logoColor2">
        <n-select
            v-model:value="formValue.stole.logoColor2"
            filterable
            placeholder="Choose the Color of Logo 2#"
            :options="stoleColorOptions"
            clearable
        />
      </n-form-item>

      <n-space justify="center">
        <n-form-item>
          <n-button @click="handleValidateClick">
            Validate
          </n-button>
        </n-form-item>
      </n-space>

    </n-form>
  </n-card>
</template>
<style scoped>
</style>
