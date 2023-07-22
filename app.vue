<script lang="ts" setup>
import {NMessageProvider, NThemeEditor, NLoadingBarProvider, NNotificationProvider, NDialogProvider,
NConfigProvider, NGlobalStyle, GlobalTheme, darkTheme, GlobalThemeOverrides, NButton, NSpace,
NCard, NTimePicker, NLayout} from 'naive-ui'
import {useAppStore} from "~/stores/store";
import { storeToRefs } from 'pinia'

const store = useAppStore()
const {changeDarkTheme, theme } = storeToRefs(store)

// const theme = ref(null)

</script>

<template>

  <n-config-provider
      class="demo"
      namespace="naive-ui-doc"
      preflight-style-disabled

  >
<!--    :style="themeEditorStyle"-->
    <n-theme-editor>
      <n-loading-bar-provider>
        <n-message-provider>
          <n-notification-provider>
            <n-dialog-provider>
              <n-config-provider :theme="theme">
                    <NuxtLayout>
                      <NuxtPage />
                    </NuxtLayout>
<!--                <n-space>-->
<!--                  <n-card>-->
<!--                    <n-space>-->
<!--                      <n-button @click="theme = darkTheme">Dark</n-button>-->
<!--                      <n-button @click="theme = null">Light</n-button>-->
<!--                    </n-space>-->
<!--                  </n-card>-->
<!--                  <n-card>-->
<!--                    <n-time-picker-->
<!--                        default-formatted-value="00:12:13"-->
<!--                    />-->
<!--                  </n-card>-->
<!--                </n-space>-->

              </n-config-provider>
            </n-dialog-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-loading-bar-provider>
      <n-global-style />
    </n-theme-editor>
  </n-config-provider>
<!--  <n-message-provider h-full>-->
<!--    <NuxtLayout>-->
<!--      <NuxtPage />-->
<!--    </NuxtLayout>-->
<!--  </n-message-provider>-->
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
.ferras-fade-enter-active {
  transition: all 0.3s ease-out;
}

.ferras-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.ferras-fade-enter-from,
.ferras-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.dark {
  background: #16171d;
  color: #fff;
}
</style>
