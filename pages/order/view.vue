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
// todo: create an interface extends from Order that will be OrderReadOnly and just add the id, this to use it only when we read data
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
      title: 'Stole Pieces',
      key: 'stole.pieces'
    },
    {
      title: 'Stole Color',
      key: 'stole.color'
    },
    {
      title: 'Stole Type',
      key: 'stole.type'
    },
    {
      title: 'Stole Lettering',
      key: 'stole.lettering'
    },
    {
      title: 'Stole logoColor1',
      key: 'stole.logoColor1'
    },
    {
      title: 'Stole logoColor2',
      key: 'stole.logoColor2'
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
    {
      title: 'Tags',
      key: 'tags',
      render (row) {
        const tags = row.tags.map((tagKey) => {
          let tagType = ''
          switch (tagKey){
            case "important":
              tagType = 'error'
              break;
            case "info":
              tagType = 'warning'
              break;
          }
          return h(
              NTag,
              {
                style: {
                  marginRight: '6px'
                },
                type: tagType,
                bordered: false
              },
              {
                default: () => tagKey
              }
          )
        })
        return tags
      }
    },
  ]
}
const message = useMessage()
const columns2 = createColumns({
  play (row: Order) {
    message.info(`Play ${row.schoolName}`)
  }
})
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const data = Array.from({ length: 46 }).map((_, index) => ({
  // key: index+1,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

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
  <div>
    <h1>view orders</h1>
    <n-scrollbar x-scrollable>
      <n-data-table trigger="none" :x-scrollable="true" :columns="columns2" :data="ordersData" :pagination="pagination" />
    </n-scrollbar>
    <n-scrollbar x-scrollable>
      <div style="white-space: nowrap; padding: 12px">
        And as I sat there, brooding on the old unknown world, I thought of
        Gatsby’s wonder when he first picked out the green light at the end of
        Daisy’s dock. He had come a long way to this blue lawn and his dream must
        have seemed so close that he could hardly fail to grasp it. He did not
        know that it was already behind him, somewhere back in that vast obscurity
        beyond the city, where the dark fields of the republic rolled on under the
        night. Gatsby believed in the green light, the orgastic future that year
        by year recedes before us. It eluded us then, but that’s no
        matter—tomorrow we will run faster, stretch out our arms farther. . . .
        And one fine morning—— So we beat on, boats against the current, borne
        back ceaselessly into the past.
      </div>
    </n-scrollbar>

    <n-space>
      <pre>{{ordersData}}</pre>
      <pre>{{data}}</pre>
    </n-space>
  </div>
</template>
<style scoped>

</style>
