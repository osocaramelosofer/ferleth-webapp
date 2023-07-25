<script setup lang="ts">
import {  NButton, NSwitch, NForm, NFormItem, NInput } from 'naive-ui'
import type { GlobalTheme, darkTheme, GlobalThemeOverrides,ButtonProps, FormProps  } from 'naive-ui'
import { FormInst, useMessage } from 'naive-ui'
const showAlert = ()=>{
  alert("Hello :)")
}

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const formValue= ref({
  user: {
    name: '',
    age: ''
  },
  phone: ''
})
const rules= {
  user: {
    name: {
      required: true,
          message: 'Please input your name',
          trigger: 'blur'
    },
    age: {
      required: true,
          message: 'Please input your age',
          trigger: ['input', 'blur']
    }
  },
  phone: {
    required: true,
        message: 'Please input your number',
        trigger: ['input']
  }
}
const  handleValidateClick = (e: MouseEvent)=> {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}



// const theme = ref(darkTheme)
// const theme = ref( true)
const switchThemeOverrides= {
  railColor: '#FFFF00',
  railColorActive: '#0000FF'
}
const buttonThemeOverrides = {
  colorSecondary: "rgba(243, 10, 10, 0.08)",
      colorSecondaryHover: "rgba(185, 3, 3, 0.12)",
      colorSecondaryPressed: "rgb(241,44,44)",
      colorTertiary: "rgb(24,124,255)",
      colorTertiaryHover: "rgba(255,16,239,0.92)",
      color: "rgba(225,36,36,0.83)",
      textColorHover: "#b60a1a",
      textColorPressed: "#A9C7BDFF"
}
const formThemeOverrides = {
  asteriskColor: "#40FF06FF",
  feedbackTextColorError: "#00E1FFFF",
  feedbackTextColor: "rgba(255, 0, 0, 0.52)"
}
// const theme = ref<GlobalTheme | null>(null)
type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
type FormThemeOverrides = NonNullable<FormProps['themeOverrides']>
// const buttonThemeOverrides2: ButtonThemeOverrides = {
//   heightMedium: '40px',
//   textColor: 'rgba(24, 127, 231, 1)'
// }
// const formThemeOverrides2: FormThemeOverrides = {
//   labelTextColor: 'rgba(24, 127, 231, 1)',
//   asteriskColor: 'rgba(24, 127, 231, 1)'
// }

</script>

<template>
<!--  <BaseWrapper bg-slate-200 h-ful w-full>-->
<!--    <n-form-->
<!--        :ref="formRef"-->
<!--        inline-->
<!--        :label-width="80"-->
<!--        :model="formValue"-->
<!--        :rules="rules"-->
<!--        :size="size"-->
<!--        :theme-overrides="formThemeOverrides2"-->
<!--    >-->
<!--      <n-space vertical>-->
<!--        <n-form-item label="Name" path="user.name">-->
<!--          <n-input v-model:value="formValue.user.name" placeholder="Input Name" />-->
<!--        </n-form-item>-->
<!--        <n-form-item label="Age" path="user.age">-->
<!--          <n-input v-model:value="formValue.user.age" placeholder="Input Age" />-->
<!--        </n-form-item>-->
<!--        <n-form-item label="Phone" path="phone">-->
<!--          <n-input v-model:value="formValue.phone" placeholder="Phone Number" />-->
<!--        </n-form-item>-->
<!--        <n-form-item>-->
<!--          <n-button @click="handleValidateClick">-->
<!--            Validate-->
<!--          </n-button>-->
<!--        </n-form-item>-->
<!--      </n-space>-->
<!--    </n-form>-->
<!--  </BaseWrapper>-->
  <BaseWrapper>
    <section class="hero h-full">
      <div class="hero ">
        <div>
          <h1 text-5xl m-none text-center>Valiente: Your App Development Partner</h1>
        </div>
      </div>

      <SharedSection
          title="First section"
          text="Why would you work with us? Well we are an excellent parte since we have experience building mobile and web apps that are the common apps in these days, we can help you to break down all your needs and create a road map in order to acomplish with you goal."
      >
        <SharedCustomButton class="rounded-full cursor-pointer" :onClick="showAlert" text="GET IN TOUCH" />
      </SharedSection>



    </section>
    <router-view />
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
