<script lang="ts" setup>
import { Filter } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { NDrawer, NDrawerContent } from 'naive-ui'
import { menuItems} from "~/helpers/menu";
import { activate, placementRef, activeRef} from "~/composables/useMobileMenu";



</script>

<template>
  <nav class="">
    <div class="flex justify-between items-center p-5 ">
      <div class="logo-container">
        <span class="text-base md:text-5xl font-black title text-valiente">
          VALIENTE
        </span>
      </div>
      <div class="hamburger-btn lg:hidden cursor-pointer">
        <n-icon class="text-2xl text-black"
                @click="activate('right')"
        >
          <Filter />
        </n-icon>
      </div>
      <ul class="hidden lg:flex md:justify-between md:w-4/6">
        <NuxtLink v-for="item in menuItems" activeClass="text-valiente-second !opacity-100" :to="item.url" class="no-underline text-2xl font-semibold text-indigo-900  hover:opacity-100 cursor-pointer">
          {{ item.name }}
        </NuxtLink>
      </ul>
      <NaiveSwitchDarkMode />

    </div>

    <n-drawer
        v-model:show="activeRef"
        :default-width="250"
        :placement="placementRef"
        resizable
    >
      <n-drawer-content>
        <div class="bg-blue-950 h-full flex items-center">
          <ul class="flex flex-col h-3/6  list-none">

            <NuxtLink v-for="item in menuItems"
                      :to="item.url"
                      activeClass="!opacity-100"
                      class="no-underline text-2xl font-semibold text-white opacity-50 hover:opacity-100 cursor-pointer"
            >
              {{ item.name }}
            </NuxtLink>
          </ul>
        </div>

      </n-drawer-content>
    </n-drawer>
  </nav>
</template>

<style scoped>
ul{
  list-style: none;
}
li{
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
  Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.title{
  position: relative;
}

</style>
