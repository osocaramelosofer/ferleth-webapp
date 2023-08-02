<script setup lang="ts">
import { useMessage } from 'naive-ui'


const message = useMessage()

</script>

<template>
  <div h-full px-20>
<!--    <NuxtLink to="/order/orderCreate">order</NuxtLink>-->
<!--    <br>-->
<!--    <NuxtLink to="/order/stoleCreate">stole</NuxtLink>-->

    <NaiveSteps/>
    <NuxtPage :page-key="order">

    </NuxtPage>
  </div>
</template>
