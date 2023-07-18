<script lang="ts" setup>
import { ref } from 'vue'
import { NIcon, NLayout, NLayoutSider, NMenu, NSwitch, NSpace } from 'naive-ui'
import {menuOptions} from "~/helpers/naiveMenu";

const inverted = ref(false)

</script>

<template>
  <n-space vertical>
    <n-space>
      <n-switch v-model:value="inverted" />
<!--      <NaiveSwitchDarkMode />-->
      inverted</n-space>
    <n-layout has-sider>
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          show-trigger
          :inverted="inverted"
      >
        <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <slot />
      </n-layout>
    </n-layout>
  </n-space>
</template>
