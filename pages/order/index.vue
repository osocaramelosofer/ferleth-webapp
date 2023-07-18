<script setup lang="ts">
import {NForm, NFormItem, NInput, NButton, NDatePicker, NInputNumber, NSelect, NIcon } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { FormInst, useMessage, NSpace } from 'naive-ui'
import {ExtensionPuzzleOutline} from "@vicons/ionicons5";

// Working with timestamp.
// const timestamp = +new Date; this is how we create a timestamp
// const convertDate = new Date(+new Date * 1000); this is how we can convert the timestamp to datetime
// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const formValue = ref({
  inputNumberValue: null,
  orderNumber: 0,
  schoolName: '',
  phone: '',
  timestampCreation: +new Date, // This is a Number Ex:1689653518052
  dueTimestamp: null,

  stole:{
    pieces: null, // abbreviation 'pcs'
    type: '',
    color: '',
    lettering: '',
    borderColor: '',
    letteringAndNumberColors: '',
    logoColor1: '',
    logoColor2: '',

  },
})

const rules = {

  orderNumber:{
    required: true,
    message: 'Please input your order number.',
    trigger: ['input', 'blur']
  },
  schoolName:{
    required: true,
    message: 'Please input the name of the school.',
    trigger: ['input', 'blur']
  },
  timestampCreation: {
    type: 'number',
    required: true,
    message: 'Please input the creation date of the order.',
    trigger: ['input', 'blur']
  },
  dueTimestamp: {
    type: 'number',
    required: true,
    message: 'Please input the due date of the order.',
    trigger: ['input', 'blur']
  },
  stole: {
    pieces: {
      type: 'number',
      required: true,
      message: 'Please input the number of pieces are gonna be made it.',
      trigger: ['input', 'blur', 'change']
    },
    type: {
      required: true,
      message: 'Please input the type of fabric for the stole.',
      trigger: ['input', 'blur']
    },
    color: {
      required: true,
      message: 'Please input the type of fabric for the stole.',
      trigger: ['input', 'blur', 'change']
    },
    lettering: {
      required: true,
      message: 'Please input the type of fabric for the stole.',
      trigger: ['input', 'blur']
    },
    borderColor: {
      required: true,
      message: 'Please input the type of fabric for the stole.',
      trigger: ['input', 'blur']
    },
    letteringAndNumberColors: {
      required: true,
      message: 'Please input the type of fabric for the stole.',
      trigger: ['input', 'blur']
    },
    logoColor1: {
      required: true,
      message: 'Please input the type of fabric for the stole.',
      trigger: ['input', 'blur']
    },
    logoColor2: {
      required: true,
      message: 'Please input the type of fabric for the stole.',
      trigger: ['input', 'blur']
    },
  }
}

// maybe would be better handle the value as same as the name
const stoleTypeOptions = [
  {
    label: 'Satin',
    value: '1'
  },
  {
    label: 'Fabric',
    value: '2'
  },
  {
    label: "cotton",
    value: '3'
  },
  {
    label: 'wood',
    value: '4'
  },
  {
    label: 'steel',
    value: '5'
  },
  {
    label: 'rock',
    value: '6'
  }
]
const stoleColorOptions = [
  {
    label: 'Azul Marino',
    value: 'azul_marino'
  },
  {
    label: 'Rojo',
    value: 'rojo'
  },
  {
    label: "Dorado",
    value: 'dorado'
  },
  {
    label: 'Verde',
    value: 'green'
  },
  {
    label: 'Oxford',
    value: 'oxford'
  },
  {
    label: 'Pink',
    value: 'pink'
  }
]


const handleValidateClick = (e: MouseEvent) =>  {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log("no errors")
      message.success('successful')
    } else {
      console.log(errors)
      message.error('Double check the inputs please')
    }
  })
}
</script>

<template>
  <BaseWrapper>
      <n-form
          ref="formRef"
          inline
          :label-width="80"
          :model="formValue"
          :rules="rules"
          size="large"
      >
        <n-space vertical>

          <n-form-item label="Order Number" path="orderNumber">
            <!-- TODO: Change for a input number -->
            <n-input v-model:value="formValue.orderNumber" clearable placeholder="Order Number">
              <template #suffix>#</template>
            </n-input>
          </n-form-item>

          <n-form-item label="School Name" path="schoolName">
            <n-input v-model:value="formValue.schoolName" clearable placeholder="Input the School Name" />
          </n-form-item>

          <n-form-item label="Date of Order Creation" path="timestampCreation">
            <n-date-picker v-model:value="formValue.timestampCreation" type="date" clearable />
          </n-form-item>

          <n-form-item label="Due Date" path="dueTimestamp">
            <n-date-picker v-model:value="formValue.dueTimestamp" type="date" clearable />
          </n-form-item>


          <n-form-item label="Number of Pieces" path="stole.pieces">
            <n-input-number v-model:value="formValue.stole.pieces" :step="500" :min="500" :max="10000">
              <template #suffix>
                pcs
                <n-icon :component="ExtensionPuzzleOutline" />
              </template>
            </n-input-number>
          </n-form-item>

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
            <n-input v-model:value="formValue.stole.lettering" clearable placeholder="Write the stole's letters Ex. ECHS"/>
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
<!--          TODO: Lettering Specifications lado izquierdo o derecho y arriba o abajo-->
          <n-form-item>
            <n-button @click="handleValidateClick">
              Validate
            </n-button>
          </n-form-item>
        </n-space>


        <n-space vertical>
          <pre>{{ formValue }}</pre>
          <pre>{{timestamp}}</pre>
          <pre>{{convertDate}}</pre>
        </n-space>

      </n-form>
  </BaseWrapper>
</template>
<style scoped>
</style>
