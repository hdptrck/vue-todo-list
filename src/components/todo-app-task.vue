<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox v-model="isCompleted" color="primary" v-on:change="complete()"></v-checkbox>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title
        class="item-title"
        v-if="!isEditable"
        v-bind:class="{ lineTrough: isCompleted }"
      >{{ description }}</v-list-item-title>
      <input
        class="input"
        ref="taskInput"
        v-if="isEditable"
        v-bind:class="{ lineTrough: isCompleted }"
        v-model="description"
      />
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon v-if="!isEditable">
        <v-icon>$vuetify.icons.edit</v-icon>
      </v-btn>
      <v-btn icon v-if="isEditable">
        <v-icon color="success">$vuetify.icons.complete</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-action>
      <v-btn icon v-if="!isEditable">
        <v-icon color="error">mdi-delete</v-icon>
      </v-btn>
      <v-btn icon v-if="isEditable">
        <v-icon color="error">$vuetify.icons.close</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Task } from "@/types/index";

@Component
export default class TodoTaskComponent extends Vue {
  private isEditable = false;
  @Prop(String) description!: string;
  @Prop(Boolean) isCompleted!: boolean;

  public constructor() {
    super();
    console.log("prop", this.isCompleted);
  }

  complete() {
    let myIsCompleted: boolean = this.isEditable;
    myIsCompleted = !myIsCompleted;
    this.$emit("update-completed", myIsCompleted);
  }

  enableEdit(): void {
    this.isEditable = true;
  }
  disableEdit(): void {
    this.isEditable = false;
  }
  /*
  editTask(task: Task): void {
    this.$store.dispatch("editTask", task);
    console.log("editTask", task.description);
  }
  removeTask(task: Task): void {
    this.$store.dispatch("removeTask", task);
  }*/
}
</script>

<style scoped lang="sass"></style>
