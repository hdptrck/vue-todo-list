import Vue from "vue";
import HeaderComponent from "@/components/todo-app-header.vue";
import TodoListComponent from "@/components/todo-app-content.vue";
import AddTaskComponent from "@/components/todo-app-add-task.vue";
import TasksListComponent from "@/components/tasks-app-list.vue";

Vue.component("tl-header", HeaderComponent);
Vue.component("tl-todo-list", TodoListComponent);
Vue.component("tl-add-task", AddTaskComponent);
Vue.component("tl-tasks-list", TasksListComponent);
