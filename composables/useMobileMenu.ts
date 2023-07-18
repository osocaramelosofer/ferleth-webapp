import {DrawerPlacement} from "naive-ui";

const activeRef = ref(false)
const placementRef = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  activeRef.value = true
  placementRef.value = place
}

export { activate, placementRef, activeRef }
