<script setup lang="ts">
import { NSpace, NDataTable } from "naive-ui"

import { collection, getDocs } from "firebase/firestore";
import {db} from "@/firebase"

const querySnapshot = await getDocs(collection(db, "orders"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${ JSON.stringify( doc.data() ) }`);
});



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
  key: index,
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
console.log("Query snapshot=>",querySnapshot)
</script>

<template>
  <div>
    <h1>view orders</h1>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" />


  </div>
</template>
<style scoped>

</style>
