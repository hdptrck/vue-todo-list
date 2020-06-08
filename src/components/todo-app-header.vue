<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HeaderComponent extends Vue {
  title: string = this.$store.state.name;
}
</script>

<style scoped lang="scss"></style>
