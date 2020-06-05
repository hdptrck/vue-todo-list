<template>
  <v-text-field
    v-model="description"
    label="Add New Task"
    filled
    outlined
    shaped
    dense
    append-icon="mdi-view-grid-plus-outline"
    @click:append="addNewTask"
    @keyup.enter="addNewTask"
  ></v-text-field>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
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
