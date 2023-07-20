<script setup lang="ts">
import {  NButton } from 'naive-ui'
const showAlert = ()=>{
  alert("ji")
}
</script>

<template>
  <BaseWrapper>
    <section class="hero">
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
