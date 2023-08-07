<script setup>
import {NIcon, NSpace} from 'naive-ui'
import {CashOutline,LogoUsd} from '@vicons/ionicons5'

const {amount} = defineProps({
  amount: {
    type: Number,
    default: 0
  }
})

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

</script>

<template>
  <n-space>
    <span>
      {{formatter.format(amount)}}
    </span>
    <n-icon size="22">
      <cash-outline/>
    </n-icon>
  </n-space>
</template>
<style scoped>
</style>
