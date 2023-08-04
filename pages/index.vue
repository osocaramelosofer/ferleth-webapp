<script setup lang="ts">
import {  NButton, NSwitch, NForm, NFormItem, NInput } from 'naive-ui'
import type { GlobalTheme, darkTheme, GlobalThemeOverrides,ButtonProps, FormProps  } from 'naive-ui'
import { FormInst, useMessage } from 'naive-ui'
const showAlert = ()=>{
  alert("Hello :)")
}




</script>

<template>
  <BaseWrapper>
    <n-buton>
      
    </n-buton>
  </BaseWrapper>
</template>

<style scoped>
.bg-base{
  background-color: #F0F8FF;
}
header{
  background-color: #F0FFFF;
}
.dashes-to-title {
  display: flex;
  text-align: center;
  align-items: center;
}
.dashes-to-title::before{
  content: "";
  height: 0.055rem;
  background-color: orange;
  flex-grow: 1;
  margin-right: 0.55rem;
  order: 1;
}
.dashes-to-title::after{
  flex-grow: 1;
  margin-left: 0.555rem;
  order: 3;
  background-color: crimson;
  content: "";
  height: 0.555rem;
}
.title-section{
  position: relative;
  text-align: center;
}
.title-section::before,
.title-section::after {
  content: "";
  position: absolute;
  width: 100px;
  z-index: -1;
  border-bottom: 4px solid orange;
  top: 50%;
  transform: translateY(-50%);
  right: 60%;

}
.title-section::after{
  left: 60%;
}

</style>
