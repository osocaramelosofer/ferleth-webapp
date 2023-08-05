<script lang="ts" setup>
import {  NLayout, NLayoutSider, NMenu, NSpace, NSwitch, zhCN } from 'naive-ui'
import {menuOptions} from "~/helpers/naiveMenu";

const inverted = ref(false)
</script>

<template>
  <div h-full>
    <div h-full flex flex-col>

        <n-layout has-sider>
          <n-layout-sider
              h-full
              bordered
              collapse-mode="width"
              :collapsed-width="64"
              :width="240"
              show-trigger
          >
            <n-space justify="center">
              <!--            <n-switch  v-model:value="inverted" />-->
              <!--            todo start with pinia for state managment -->
              <NaiveSwitchMenu />
            </n-space>
            <n-menu
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="menuOptions"
            />
          </n-layout-sider>
          <n-layout>
            <NuxtPage />
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
