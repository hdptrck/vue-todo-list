<template>
  <v-list subheader flat>
    <v-subheader>Your Todos</v-subheader>
    <v-list-item-group multiple>
      <tl-task v-for="task in tasks" :key="task.id"
      :description="task.description"
      :isCompleted="task.isCompleted"
      @update-completed="editTask(task)"
      >
        <!-- 
        <v-list-item-action>
          <v-checkbox
            v-model="task.isCompleted"
            color="primary"
            v-on:change="editTask(task)"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            class="item-title"
            v-if="!isEditable"
            v-bind:class="{ lineTrough: task.isCompleted }"
            v-on:dblclick="enableEdit()"
            >{{ task.description }}</v-list-item-title
          >
          <input
            class="input"
            ref="taskInput"
            v-if="isEditable"
            v-bind:class="{ lineTrough: task.isCompleted }"
            v-model="task.description"
            v-on:keydown.enter="disableEdit()"
            v-on:blur="disableEdit()"
          />
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon v-if="!isEditable" v-on:click="enableEdit()">
            <v-icon>$vuetify.icons.edit</v-icon>
          </v-btn>
          <v-btn icon v-if="isEditable" v-on:click="disableEdit()">
            <v-icon color="success">$vuetify.icons.complete</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon v-if="!isEditable" v-on:click="removeTask(task)">
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
          <v-btn icon v-if="isEditable" v-on:click="disableEdit()">
            <v-icon color="error">$vuetify.icons.close</v-icon>
          </v-btn>
        </v-list-item-action> -->
      </tl-task>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Task } from "@/types/index";

@Component
export default class TodoListComponent extends Vue {
  get tasks(): Array<Task> {
    return this.$store.state.data;
  }
  /*
  enableEdit(): void {
    this.isEditable = true;
  }
  disableEdit(): void {
    this.isEditable = false;
  }
*/
  editTask(task: Task): void {
    this.$store.dispatch("editTask", task);
    console.log("editTask", task.isCompleted);
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
