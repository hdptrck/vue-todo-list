<template>
  <v-app id="inspire">
    <tl-header></tl-header>
    <v-content>
      <tl-todo-list></tl-todo-list>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HomeComponent extends Vue {
  mounted() {
    console.log("hello from app");
  }
}
</script>
<style scoped lang="scss"></style>
