<template>
  <div>
    <v-subheader>Todo</v-subheader>
    <v-simple-table class="grey lighten-5">
      <template v-slot:default>
        <tbody>
          <tr v-for="task in tasks" v-bind:key="task.id">
            <td width="1%">
              <v-checkbox
                v-model="task.isCompleted"
                @change="completeTask(task.isCompleted, task)"
              ></v-checkbox>
            </td>
            <td width="99%">
              <span
                :style="task.isCompleted ? 'text-decoration:line-through' : ''"
                >{{ task.description }}</span
              >
            </td>
            <td>
              <v-btn icon color="grey" @click="removeTask(task.id)">
                <v-icon>mdi-delete-circle-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Task } from "@/types/index";

@Component({})
export default class TasksListComponent extends Vue {
  tasks: Array<Task> = new Array<Task>();
  mounted() {
    this.tasks = this.$store.getters.tasks;
  }
  completeTask(completed: boolean, task: Task) {
    task.isCompleted = completed;
    this.$store.dispatch("editTask", task).then(() => {
      this.tasks = this.$store.getters.tasks;
    });
  }
  removeTask(id: string) {
    this.$store.dispatch("removeTask", id);
  }
}
</script>

<style scoped lang="scss"></style>
