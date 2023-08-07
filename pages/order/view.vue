<script setup lang="ts">
// naive ui imports
import {h, resolveComponent} from 'vue'
import {  NDataTable,useMessage, DataTableColumns, NButton, NTag, NScrollbar} from "naive-ui"
// firebase imports
import { collection, getDocs } from "firebase/firestore";
import {db} from "~/firebase"
// Local imports
import {Order} from "~/types/Order"
import convertToDate from "@/helpers/convertToDate"
import {CurrencyField} from "#components"
const querySnapshot = await getDocs(collection(db, "orders"));

const x = resolveComponent('currencyField')
let ordersList:Order[] = []
querySnapshot.forEach((doc) => {
  const orderData:Order = doc.data() as Order;
  orderData.timestampCreation = convertToDate(orderData.timestampCreation as number)
  orderData.dueTimestamp = convertToDate(orderData.dueTimestamp as number)
  if(orderData.tags == null) orderData.tags = ['info']
  ordersList = [...ordersList, orderData]
});

const message = useMessage()

const createColumns = ({play}: { play: (row: Order) => void }): DataTableColumns<Order> => {
  return [
    {
      title: 'Order Number',
      key: 'orderNumber'
    },
    {
      title: 'Pieces',
      key: 'pieces'
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
      title: 'Quality',
      key: 'quality'
    },
    {
      title: "Total Cost",
      key: 'totalCost',
      render (row) {
        return h(
            CurrencyField,
            {
              amount: row.totalCost,
            }
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
            default:
              tagType = 'success'
              break;
          }
          return h(
              NTag,
              {
                style: {
                  marginRight: '6px'
                },
                round: true,
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
    {
      title: 'View Details',
      key: 'actions',
      render (row) {
        return h(
            NButton,
            {
              strong: true,

              size: 'small',
              type: 'primary',
              onClick: () => play(row)
            },
            { default: () => 'View' }
        )
      }
    },
  ]
}

const columns = createColumns({
  play (row: Order) {
    message.info(`Play ${row.schoolName}`)
  }
})

const pagination = reactive({
  page: 1,
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
    <SharedCurrencyField/>
    <n-scrollbar x-scrollable scrollbar-props="">
      <n-data-table trigger="none"  :columns="columns" :data="ordersList" :pagination="pagination" />
    </n-scrollbar>
    <p>
      We can handle tags as priority status, for example, there could be order which have a priority like important, medium, low.
      <br>
      also we can have a status that represents the status of the order like, no started, started, on its way, delivered, stuck.

    </p>
  </div>
</template>
<style scoped>

</style>
