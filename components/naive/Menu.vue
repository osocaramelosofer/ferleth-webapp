<script lang="ts" setup>
import {  NLayout, NLayoutSider, NMenu, NSpace } from 'naive-ui'
import {menuOptions} from "~/helpers/naiveMenu";
import { useToggle} from "@vueuse/core";
import { isDark } from "@/composables/useDark"


const toggleDark = useToggle(isDark)
</script>

<template>
  <div h-full >
    <div h-full flex flex-col>

      <n-layout has-sider>

        <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            show-trigger
            :inverted="isDark"
            style="height: 100%;"
        >
          <n-space justify="center">
<!--            <n-switch  @click="toggleDark()" />-->
<!--            todo start with pinia for state managment -->
            <NaiveSwitchMenu @switch-dark="toggleDark()"/>
          </n-space>
          <n-menu
              :inverted="isDark"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout dark:text-w dark:bg-b>
          <slot />
        </n-layout>
      </n-layout>
    </div>
  </div>
</template>
<style scoped>
.dark{
  background: #1e1e20;
}
</style>
