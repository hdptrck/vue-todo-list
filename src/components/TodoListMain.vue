<template>
  <v-container pa-3>
    <v-row no-gutters>
      <v-col md="4">
        <TodoListAddTask></TodoListAddTask>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters justify="center">
      <v-col md="12">
        <v-list subheader flat>
          <v-subheader>Your Todos</v-subheader>
          <v-list-item-group multiple>
            <TodoListTask
              v-for="task in tasks"
              :key="task.id"
              :description="task.description"
              :isCompleted="task.isCompleted"
              @on-edit="updateDescription(task, $event)"
              @on-remove="removeTask(task)"
              @on-complete="updateIsCompleted(task, $event)"
            ></TodoListTask>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoListAddTask from "@/components/TodoListAddTask.vue";
import TodoListTask from "@/components/TodoListTask.vue";

export default {
  components: {
    TodoListAddTask,
    TodoListTask
  },
  computed: {
    tasks() {
      return this.$store.state.data;
    }
  },
  methods: {
    updateIsCompleted(task, newIsCompleted) {
      task.isCompleted = newIsCompleted;
      this.editTask(task);
    },
    updateDescription(task, newDescrption) {
      task.description = newDescrption;
      this.editTask(task);
    },
    editTask(task) {
      this.$store.dispatch("editTask", task);
      console.log("editTask", task.description);
    },
    removeTask(task) {
      this.$store.dispatch("removeTask", task);
    }
  }
};
</script>

<style scoped lang="scss"></style>
