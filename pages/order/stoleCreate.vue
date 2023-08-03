<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NSelect,FormInst, useMessage, NSpace, NModal, NIcon,
  NTooltip } from 'naive-ui'
import {InformationCircleSharp, HelpCircle} from '@vicons/ionicons5'

//Local Imports
import { stoleColorOptions, stoleTypeOptions } from "@/helpers/order/stole"
import { stoleFormRules } from "~/helpers/order/orderFormRules"
import { ref } from "vue";
import {useOrderStore} from "~/stores/storeOrder";
import { storeToRefs } from 'pinia'
import {submitStole, submitOrder} from '@/firebase/order'


// Store stuff
const store = useOrderStore()
const { stoleForm } = storeToRefs(store)
const { formValueOrder } = storeToRefs(store)

const formRef = ref<FormInst | null>(null) // form reference
const message = useMessage()

// submit form
const handleValidateClick =() => {
  formRef.value?.validate((errors)=>{
    if(!errors){
      submitStole(stoleForm.value)
      submitOrder(formValueOrder.value)
      message.success('Submit')
      navigateTo({path: '/',})
    } else{
      message.error('Double check the fields')
    }
  })
}

// modal logic
const showModal = ref(false)
function onPositiveClick () {
  showModal.value = true
  handleValidateClick()
}
function onNegativeClick () {
  // message.error('Cancel')
  showModal.value = false
}

function goBack(){
  return navigateTo({
    path: '/order/orderCreate',
  })
}

</script>

<template>
  <div>
    <n-form
        ref="formRef"
        inline
        :label-width="80"
        :model="stoleForm"
        :rules="stoleFormRules"
        size="medium"
        :show-feedback="true"
        style="justify-content: center; align-items: center; height: 100%"
    >
      <n-space vertical>
        <n-form-item label="Stole Type" path="type">
          <n-select
              v-model:value="stoleForm.type"
              filterable
              placeholder="Please select a Fabric Type for the Stole"
              :options="stoleTypeOptions"
              clearable
          />
          <n-tooltip trigger="hover">
            <template #trigger>
              <!--              <n-icon :component="InformationCircleSharp"  size="25"/>-->
              <n-icon :component="HelpCircle" size="20"/>
            </template>
            If it looks like a duck, walks like a duck, and quacks like a duck...it must
            be a duck.
          </n-tooltip>
        </n-form-item>

        <n-form-item label="Stole Color" path="color">
          <n-select
              v-model:value="stoleForm.color"
              filterable
              placeholder="You can start typing to search"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Stole Lettering" path="lettering">
          <n-input v-model:value="stoleForm.lettering" clearable
                   placeholder="Write the stole's letters Ex. ECHS"/>
        </n-form-item>

        <n-form-item label="Border Color / Clipping / Border" path="borderColor">
          <n-select
              v-model:value="stoleForm.borderColor"
              filterable
              placeholder="Choose a Border Color for the Stole"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Color of Letters and Numbers" path="letteringAndNumberColors">
          <n-select
              v-model:value="stoleForm.letteringAndNumberColors"
              filterable
              placeholder="Choose the Color for Letters and Numbers"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Stole Logo Color 1#" path="logoColor1">
          <n-select
              v-model:value="stoleForm.logoColor1"
              filterable
              placeholder="Choose the Color of Logo 1#"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-form-item label="Stole Logo Color 2#" path="logoColor2">
          <n-select
              v-model:value="stoleForm.logoColor2"
              filterable
              placeholder="Choose the Color of Logo 2#"
              :options="stoleColorOptions"
              clearable
          />
        </n-form-item>

        <n-space justify="center">
          <n-form-item>
            <n-button @click="goBack" mr-1>
              Back
            </n-button>
            <n-button @click="showModal=true">
              Submit
            </n-button>
          </n-form-item>
        </n-space>

        <pre>
          {{ stoleForm }}
        </pre>
      </n-space>
    </n-form>

    <n-modal
        v-model:show="showModal"
        :mask-closable="false"
        preset="dialog"
        title="Submit Order"
        content="Are you sure you want to submit?"
        positive-text="Confirm"
        negative-text="Cancel"
        @positive-click="onPositiveClick"
        @negative-click="onNegativeClick"
    />
  </div>
</template>
