<script setup lang="ts">
import { useMessage } from 'naive-ui'


const message = useMessage()

</script>

<template>
  <div h-full px-20>
<!--    <NaiveSteps />-->
    <h1>Hola</h1>
    <NuxtLink to="/order/order">order</NuxtLink>
    <br>
    <NuxtLink to="/order/forms/stole">stole</NuxtLink>
<!--    <OrderForm/>-->
    <NuxtPage />
  </div>
</template>
