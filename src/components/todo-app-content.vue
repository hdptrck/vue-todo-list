<template>
  <v-container pa-3 class="grey lighten-5">
    <v-row no-gutters>
      <v-col md="4">
        <tl-add-task></tl-add-task>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters justify="center">
      <v-col md="12">
        <tl-todo-list></tl-todo-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  mounted() {
    console.log("hello from app");
  }
};
</script>

<style scoped lang="scss"></style>
