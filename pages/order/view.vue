<script setup lang="ts">
// naive ui imports
import { h, defineComponent } from 'vue'
import { NSpace, NDataTable,useMessage, DataTableColumns, NButton, NTag, NScrollbar} from "naive-ui"
// firebase imports
import { collection, getDocs } from "firebase/firestore";
import {db} from "@/firebase"
// Local imports
import {Order} from "@/types/Order"

const querySnapshot = await getDocs(collection(db, "orders"));
// const orders: Order[] = [] todo: do with type Order
// todo: create an interface extends from Order that will be OrderReadOnly and just add the id, this to use it only when we read order
let ordersData = []

querySnapshot.forEach((doc) => {
  const orderData = doc.data();
  const order = { ...orderData };
  // orders.push(order);
  ordersData = [...ordersData, order]

  // todo: do with type Order
  // const order: Order = {
  //   // Assign the properties from the orderData object
  //   // to the new order object
  //   // Example:
  //   id: orderData.id,
  //   // Assign other properties similarly
  // };

});
const message = useMessage()


const createColumns = ({play}: { play: (row: Order) => void }): DataTableColumns<Order> => {
  return [
    {
      title: 'Order Number',
      key: 'orderNumber'
    },
    {
      title: 'School Name',
      key: 'schoolName'
    },
    {
      title: 'Order Creation Date',
      key: 'timestampCreation'
    },
    {
      title: 'Fecha de entrega',
      key: 'dueTimestamp'
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              onClick: () => play(row)
            },
            { default: () => 'Play' }
        )
      }
    },
      //todo fix the tags
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   render (row) {
    //     const tags = row.tags.map((tagKey) => {
    //       let tagType = ''
    //       switch (tagKey){
    //         case "important":
    //           tagType = 'error'
    //           break;
    //         case "info":
    //           tagType = 'warning'
    //           break;
    //       }
    //       return h(
    //           NTag,
    //           {
    //             style: {
    //               marginRight: '6px'
    //             },
    //             type: tagType,
    //             bordered: false
    //           },
    //           {
    //             default: () => tagKey
    //           }
    //       )
    //     })
    //     return tags
    //   }
    // },
  ]
}
const columns2 = createColumns({
  play (row: Order) {
    message.info(`Play ${row.schoolName}`)
  }
})
// const columns = [
//   {
//     title: 'Name',
//     key: 'name'
//   },
//   {
//     title: 'Age',
//     key: 'age'
//   },
//   {
//     title: 'Address',
//     key: 'address'
//   }
// ]
//
// const order = Array.from({ length: 46 }).map((_, index) => ({
//   // key: index+1,
//   name: `Edward King ${index}`,
//   age: 32,
//   address: `London, Park Lane no. ${index}`
// }))

const pagination = reactive({
  page: 2,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  }
})

</script>

<template>
  <div mx-5>
    <h1>view orders</h1>
    <n-scrollbar x-scrollable scrollbar-props="">
      <n-data-table trigger="none"  :columns="columns2" :data="ordersData" :pagination="pagination" />
    </n-scrollbar>
<!-- these are for testing -->
<!--    <n-space>-->
<!--      <pre>{{ordersData}}</pre>-->
<!--      <pre>{{order}}</pre>-->
<!--    </n-space>-->
  </div>
</template>
<style scoped>

</style>
