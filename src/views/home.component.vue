<template>
  <v-app id="inspire">
    <tl-header></tl-header>
    <v-content>
      <tl-todo-content></tl-todo-content>
    </v-content>
  </v-app>
</template>

<script lang="ts">
export default {
  mounted() {
    console.log("hello from app");
  }
};
</script>

<style scoped lang="scss"></style>
