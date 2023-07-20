<script lang="ts" setup>
import { ref } from 'vue'
import { NIcon, NLayout, NLayoutSider, NMenu, NSwitch, NSpace } from 'naive-ui'
import {menuOptions} from "~/helpers/naiveMenu";

const inverted = ref(false)

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
            :inverted="inverted"
            style="height: 100%;"
        >
          <n-space>
<!--            <n-switch v-model:value="inverted" />inverted-->
<!--            todo add logic to the same we do with inverted but with naiveswtchdarkmode-->
            <NaiveSwitchDarkMode />
          </n-space>
          <n-menu
              :inverted="inverted"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout style="height: 100%">
          <slot />
        </n-layout>
      </n-layout>
    </div>
  </div>
</template>
