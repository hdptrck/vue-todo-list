<template>
  <v-list subheader flat>
    <v-subheader>Your Todos</v-subheader>

    <v-list-item-group multiple>
      <v-list-item v-for="task in tasks" v-bind:key="task.id">
        <v-list-item-action>
          <v-checkbox
            v-model="task.isCompleted"
            color="primary"
            v-on:change="completeTask(task)"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :style="task.isCompleted ? 'text-decoration:line-through' : ''"
          >{{ task.description }}</v-list-item-title>
          <v-list-item-subtitle
            :style="task.isCompleted ? 'text-decoration:line-through' : ''"
          >{{ task.created }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="">mdi-pencil</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action v-on:click="removeTask(task)">
          <v-btn icon>
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Task } from "@/types/index";

@Component
export default class TasksListComponent extends Vue {
  //tasks: Array<Task> = new Array<Task>();
  get tasks(): Array<Task> {
    return this.$store.state.data;
  }
  completeTask(task: Task) {
    //task.isCompleted = completed;
    this.$store.dispatch("editTask", task)
    /*.then(() => {
      this.tasks = this.$store.getters.tasks;
    });*/
  }
  removeTask(id: string) {
    this.$store.dispatch("removeTask", id);
  }
}
</script>

<style scoped lang="scss"></style>
