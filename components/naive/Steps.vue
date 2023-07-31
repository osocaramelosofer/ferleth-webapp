<script setup lang="ts">
import {NSpace, NSteps,NStep,NButton,NRadioGroup,NRadioButton, NButtonGroup,NIcon} from 'naive-ui'
import { defineComponent, ref, computed } from 'vue'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'

import { StepsProps } from 'naive-ui'
import OrderForm from "~/components/order/OrderForm.vue";
import StoleForm from "~/components/order/StoleForm.vue";

const current = ref(1)
const currentStatus = ref<StepsProps['status']>('process')

const buttonType = computed(() => {
  switch (currentStatus.value) {
    case 'error':
      return 'error'
    case 'finish':
      return 'success'
    default:
      return 'default'
  }
})

function handleButtonClick () {
  current.value = (current.value % 3) + 1

}

function next () {
  if (current.value === null) current.value = 1
  else if (current.value >= 3) current.value = null
  else current.value++
}

function prev () {
  if (current.value === 0) current.value = null
  else if (current.value === null) current.value = 4
  else current.value--
}

</script>


<template>
  <n-space vertical>
    <n-steps :current="current" :status="currentStatus">
      <n-step title="Order" v-if="current === 1">
<!--          <n-button-->
<!--              :type="buttonType"-->
<!--              size="small"-->
<!--              @click="handleButtonClick"-->
<!--          >-->
<!--            Next-->
<!--          </n-button>-->
      </n-step>
<!--      <n-step title="Stole">-->
<!--        <div v-if="current === 2">-->
<!--          <StoleForm />-->
<!--        </div>-->
<!--      </n-step>-->
      <n-step title="Something" />
    </n-steps>

    <n-button-group flex justify-center w-full>
      <n-button @click="prev">
        <template #icon>
          <n-icon>
            <ArrowBack/>
          </n-icon>
        </template>
      </n-button>
      <n-button @click="next">
        <template #icon>
          <n-icon>
            <arrow-forward/>
          </n-icon>
        </template>
      </n-button>
    </n-button-group>

<!--    <n-radio-group v-model:value="currentStatus" size="medium" name="basic">-->
<!--      <n-radio-button value="error">-->
<!--        Error-->
<!--      </n-radio-button>-->
<!--      <n-radio-button value="process">-->
<!--        Process-->
<!--      </n-radio-button>-->
<!--      <n-radio-button value="wait">-->
<!--        Wait-->
<!--      </n-radio-button>-->
<!--      <n-radio-button value="finish">-->
<!--        Finish-->
<!--      </n-radio-button>-->
<!--    </n-radio-group>-->
  </n-space>
</template>

