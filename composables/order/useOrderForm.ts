// import {ref, Ref} from "vue/dist/vue";
import {Order} from "~/types/Order";

const formValue: Ref<Order> = ref<Order>({
  orderNumber: 0,
  schoolName: '',
  timestampCreation: +new Date,
  dueTimestamp: +new Date,
  tags: null,
  pieces: null,
  quality: 'medium',
  costPerUnit: null,
  totalCost: null
});
export{formValue}
