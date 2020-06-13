<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderComponent extends Vue {
  get title(): string {
    return this.$store.state.title;
  }
}
</script>

<style scoped lang="scss"></style>
