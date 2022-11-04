<script setup lang="ts">
import { reactive } from 'vue'

defineProps<{
   msg: string
}>()

interface YesNoResponse {
   answer: string,
   forced: boolean,
   image: string
}

let yesno = reactive({} as YesNoResponse);

fetch('https://yesno.wtf/api')
   .then(response => response.json())
   .then((data: YesNoResponse) => Object.assign(yesno, data));
</script>

<template>
   <div>
      <h3>{{ msg }}</h3>
      <div>
         <h5>Sample HTTP request-response from <i>yesno.wtf</i>:</h5>
         <div>{{ JSON.stringify(yesno) }}</div>
      </div>
   </div>
</template>

<style scoped>
</style>
