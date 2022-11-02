<script setup lang="ts">
import { reactive } from 'vue'

defineProps<{
  msg: string
}>()

interface YesNoResponse {
	answer: String,
	forced: Boolean,
	image: String
}

let yesno = reactive({} as YesNoResponse);

fetch('https://yesno.wtf/api')
   .then(response => response.json())
   .then((data:YesNoResponse) => Object.assign(yesno, data));
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
	<div>
		<div>answer: {{ yesno.answer }}</div>
		<div><img :src="yesno.image" /></div>
	</div>
  </div>
</template>

<style scoped>
</style>
