<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NSelect,FormInst, useMessage, NSpace,NCard } from 'naive-ui'
import {collection, addDoc, setDoc} from "firebase/firestore";
import {db} from "@/firebase"
//Local Imports
import { Stole } from "@/types/Order"
import { stoleColorOptions, stoleTypeOptions } from "@/helpers/order/stole"
import { stoleFormRules } from "~/helpers/order/orderFormRules"
import { Ref, ref } from "vue";


const formRef = ref<FormInst | null>(null) // I think this is for validations
const message = useMessage()

const formValue: Ref<Stole> = ref<Stole>({
  type: null,
  color: null,
  lettering: null,
  borderColor: null,
  letteringAndNumberColors: null,
  logoColor1: null,
  logoColor2: null,
  orderUID:  null
});

const handleValidateClick =(e:MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors)=>{
    if(!errors){
      message.success('Successful')
    } else{
      message.error('Double check the fields')
    }
  })
}

</script>

<template>
    <n-form
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="stoleFormRules"
        size="medium"
        :show-feedback="true"
        style="justify-content: center; align-items: center; height: 100%"
    >
      <n-space vertical>
        <n-form-item label="Stole Type" path="type">
          <n-select
              v-model:value="formValue.type"
              filterable
              placeholder="Please select a Fabric Type for the Stole"
              :options="stoleTypeOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Stole Color" path="color">
          <n-select
              v-model:value="formValue.color"
              filterable
              placeholder="You can start typing to search"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Stole Lettering" path="lettering">
          <n-input v-model:value="formValue.lettering" clearable
                   placeholder="Write the stole's letters Ex. ECHS"/>
        </n-form-item>

        <n-form-item label="Border Color / Clipping / Border" path="borderColor">
          <n-select
              v-model:value="formValue.borderColor"
              filterable
              placeholder="Choose a Border Color for the Stole"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Color of Letters and Numbers" path="letteringAndNumberColors">
          <n-select
              v-model:value="formValue.letteringAndNumberColors"
              filterable
              placeholder="Choose the Color for Letters and Numbers"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Stole Logo Color 1#" path="logoColor1">
          <n-select
              v-model:value="formValue.logoColor1"
              filterable
              placeholder="Choose the Color of Logo 1#"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Stole Logo Color 2#" path="logoColor2">
          <n-select
              v-model:value="formValue.logoColor2"
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
      </n-space>

    </n-form>
</template>
<style scoped>
</style>
