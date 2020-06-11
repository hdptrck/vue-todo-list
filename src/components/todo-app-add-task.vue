<template>
  <v-text-field
    v-model="description"
    label="Add New Task"
    outlined
    dense
    append-icon="mdi-plus-box"
    v-on:click:append="addNewTask"
    v-on:keyup.enter="addNewTask"
  ></v-text-field>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AddTaskComponent extends Vue {
  description = "";
  addNewTask() {
    this.$store.dispatch("addTask", {
      description: this.description
    });
    this.description = "";
  }
}
</script>

<style scoped lang="scss"></style>
