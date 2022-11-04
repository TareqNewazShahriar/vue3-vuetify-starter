<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
   <div>
      <HelloWorld msg="A Vue component" />
      <br/>
      <br/>
      <h3>Some Vuetify components</h3>
      <v-container>
            <!-- input component's "hide-details" attribute set
               to 'true' globally while initiating Vuetify -->
            <v-text-field :variant="$vuetify.display.xs ? 'filled' : 'outlined'" style="width:100%;" />
            <br />
            <v-select :variant="$vuetify.display.xs ? 'filled' : 'outlined'" style="width:100%;" />
            <br />
            <v-btn :flat="!$vuetify.display.xs" color="primary" class="mt-3">Save</v-btn>
      </v-container>
   </div>
</template>

<style scoped>

</style>
