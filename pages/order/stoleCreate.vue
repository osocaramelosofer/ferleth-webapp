<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NSelect,FormInst, useMessage, NSpace, NModal, NIcon,
  NTooltip, NCard, NUpload, UploadFileInfo, UploadInst   } from 'naive-ui'
import {InformationCircleSharp, HelpCircle} from '@vicons/ionicons5'
import { stoleColorOptions, stoleTypeOptions } from "@/helpers/order/stole"
import { stoleFormRules } from "~/helpers/order/orderFormRules"
import { ref, watchEffect } from "vue";
import {useOrderStore} from "~/stores/storeOrder";
import { storeToRefs } from 'pinia'
import {submitStole, submitOrder} from '@/firebase/order'
import { translate } from "~/composables/usei18n";
import { saveAsJpeg } from "save-html-as-image";
// This is how import export default with a custom name
import  locales from "~/constants/locales/stoleForm";
// also we can do this
// import {default as locales} from "@/constants/locales/stoleForm"


// Store stuff
const store = useOrderStore()
const { stoleForm } = storeToRefs(store)
const { formValueOrder } = storeToRefs(store)
const showModal = ref(false)
const {t} = translate(locales)


const formRef = ref<FormInst | null>(null) // form reference
const message = useMessage()
const fileListRef = ref<UploadFileInfo[]>()
const previewImageUrlRef = ref('')
const previewImageUrlRef2 = ref('')
const showModalPreviewImage = ref(false)

function saveImage(){
  const node = document.getElementById("imageToSave2");
  saveAsJpeg(node, { filename: "test", printDate: false });
}

watchEffect(()=> {
  console.log("watching")
  if (fileListRef.value) {
    console.log(fileListRef.value)
    previewImageUrlRef.value = URL.createObjectURL(fileListRef.value[0].file);
    if(fileListRef.value[1]){
      previewImageUrlRef2.value = URL.createObjectURL(fileListRef.value[1].file);
    }
  }
})

/// thi is the good one ===============================
function handleChange (options: { file: UploadFileInfo, fileList: Array<UploadFileInfo>, event?: Event }) {
  previewImageUrlRef.value = URL.createObjectURL(options.file.file as any);
}

// submit form
const handleValidateClick = () => {
  formRef.value?.validate((errors)=>{
    if(!errors){
      showModal.value = true
    } else{
      message.error('Double check the fields')
    }
  })
}

// modal logic
function onPositiveClick () {
  submitStole(stoleForm.value)
  submitOrder(formValueOrder.value)
  message.success('La orden se ha creado exitosamente.')
  navigateTo({path: '/',})
}
function onNegativeClick () {
  // message.error('Cancel')
  showModal.value = false
}

function goBack(){
  return navigateTo({
    path: '/order/orderCreate',
  })
}

</script>

<template>
  <div class="lg:flex">
    <n-card embedded max-w-lg>
      <h1 text-center>{{ t('formTitle')}}</h1>
      <n-form
          ref="formRef"
          inline
          :label-width="80"
          :model="stoleForm"
          :rules="stoleFormRules"
          size="medium"
          :show-feedback="true"
          style="justify-content: center; align-items: center; height: 100%"
      >
        <n-space vertical>
          <n-form-item :label="t('stoleType')" path="type">
            <n-select
                v-model:value="stoleForm.type"
                filterable
                :placeholder="t('stoleTypePlaceholder')"
                :options="stoleTypeOptions"
                clearable
            />
            <n-tooltip trigger="hover">
              <template #trigger>
                <!--              <n-icon :component="InformationCircleSharp"  size="25"/>-->
                <n-icon :component="HelpCircle" size="20"/>
              </template>
              If it looks like a duck, walks like a duck, and quacks like a duck...it must
              be a duck.
            </n-tooltip>
          </n-form-item>

          <n-form-item label="Stole Color" path="color">
            <n-select
                v-model:value="stoleForm.color"
                filterable
                placeholder="You can start typing to search"
                :options="stoleColorOptions"
                clearable
            />
          </n-form-item>

          <n-form-item label="Stole Lettering" path="lettering">
            <n-input v-model:value="stoleForm.lettering" clearable
                     placeholder="Write the stole's letters Ex. ECHS"
                     :maxlength="5"
            />
          </n-form-item>

          <n-form-item label="Border Color / Clipping / Border" path="borderColor">
            <n-select
                v-model:value="stoleForm.borderColor"
                filterable
                placeholder="Choose a Border Color for the Stole"
                :options="stoleColorOptions"
                clearable
            />
          </n-form-item>

          <n-form-item label="Color of Letters and Numbers" path="letteringAndNumberColors">
            <n-select
                v-model:value="stoleForm.letteringAndNumberColors"
                filterable
                placeholder="Choose the Color for Letters and Numbers"
                :options="stoleColorOptions"
                clearable
            />
          </n-form-item>

<!--          <n-form-item label="Stole Logo Color 1#" path="logoColor1">-->
<!--            <n-select-->
<!--                v-model:value="stoleForm.logoColor1"-->
<!--                filterable-->
<!--                placeholder="Choose the Color of Logo 1#"-->
<!--                :options="stoleColorOptions"-->
<!--                clearable-->
<!--            />-->
<!--          </n-form-item>-->

<!--          <n-form-item label="Stole Logo Color 2#" path="logoColor2">-->
<!--            <n-select-->
<!--                v-model:value="stoleForm.logoColor2"-->
<!--                filterable-->
<!--                placeholder="Choose the Color of Logo 2#"-->
<!--                :options="stoleColorOptions"-->
<!--                clearable-->
<!--            />-->
<!--          </n-form-item>-->

          <n-form-item label="upload photos">
            <n-upload
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :default-upload="false"
                @change="handleChange"
                :default-file-list="previewFileList"
                list-type="image-card"
                :max="2"
                v-model:file-list="fileListRef"
            >
            </n-upload>


          </n-form-item>
          <n-modal
              v-model:show="showModalPreviewImage"
              preset="card"
              style="width: 600px"
              title="A Cool Picture"
          >
            <img :src="previewImageUrl" style="width: 100%" alt="uploaded image">
          </n-modal>


          <n-space justify="center">
            <n-form-item>
              <n-button @click="goBack" mr-1>
                Back
              </n-button>
              <n-button @click="handleValidateClick">
                Submit
              </n-button>
              <n-button @click="saveImage">
                Save image
              </n-button>
            </n-form-item>
          </n-space>


        </n-space>
      </n-form>
    </n-card>

    <StoleComponent
        id="imageToSave2"
        :stole-color="stoleForm.color"
        :lettering="stoleForm.lettering"
        :trim-color="stoleForm.borderColor"
        :letters-color="stoleForm.letteringAndNumberColors"
        :year-color="stoleForm.letteringAndNumberColors"
        :url-logo-one="previewImageUrlRef"
        :url-logo-two="previewImageUrlRef2"
    />

    <n-modal
        v-model:show="showModal"
        :mask-closable="false"
        preset="dialog"
        title="Submit Order"
        content="Are you sure you want to submit?"
        positive-text="Confirm"
        negative-text="Cancel"
        @positive-click="onPositiveClick"
        @negative-click="onNegativeClick"
    />
  </div>
</template>
