<template>
  <v-list subheader flat>
    <v-subheader>Your Todos</v-subheader>
    <v-list-item-group multiple>
      <v-list-item v-for="task in tasks" v-bind:key="task.id">
        <v-list-item-action>
          <v-checkbox v-model="task.isCompleted" color="primary" v-on:change="editTask(task)"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            class="item-title"
            v-if="!isEditable"
            v-bind:class="{ lineTrough: task.isCompleted }"
            v-on:keydown.enter.prevent="editTask(task)"
          >{{ task.description }}</v-list-item-title>
          <input
            class="input"
            ref="input"
            v-if="isEditable"
            v-bind:class="{ lineTrough: task.isCompleted }"
            v-model="task.description"
            v-on:keydown.enter="disableEdit(task)"
            v-on:blur="disableEdit(task)"
          />
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon v-on:click="enableEdit(task)">
            <v-icon color>mdi-pencil</v-icon>
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
  private isEditable = false;

  get tasks(): Array<Task> {
    return this.$store.state.data;
  }
  enableEdit(task: Task): void {
    this.isEditable = !this.isEditable;
  }
  disableEdit(task: Task):void {

  }

  editTask(task: Task): void {
    this.$store.dispatch("editTask", task);
    console.log("editTask", task.description);
  }
  removeTask(task: Task): void {
    this.$store.dispatch("removeTask", task);
  }
}
</script>

<style scoped lang="scss">
$input-padding: 12px;
$input-radius: 4px;

.lineTrough {
  text-decoration: line-through;
}

.input {
  padding: $input-padding;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: $input-radius;
  line-height: 1.2em;
}

.input:focus {
  outline: none;
}

.item-title {
  padding: $input-padding;
}
</style>
