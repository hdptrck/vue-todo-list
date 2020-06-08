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
    console.log(this.$store.state.name);
    this.$store.dispatch("addTask", {
      description: this.description
    });
    this.description = "";
    console.log("state data", this.$store.state.data);
  }
}
</script>

<style scoped lang="scss"></style>
