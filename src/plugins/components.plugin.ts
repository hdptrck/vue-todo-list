import Vue from "vue";
import HeaderComponent from "@/components/todo-app-header.vue";
import TodoContentComponent from "@/components/todo-app-content.vue";
import AddTaskComponent from "@/components/todo-app-add-task.vue";
import TodoListComponent from "@/components/todo-app-list.vue";
import TodoTaskComponent from "@/components/todo-app-task.vue";

Vue.component("tl-header", HeaderComponent);
Vue.component("tl-todo-content", TodoContentComponent);
Vue.component("tl-add-task", AddTaskComponent);
Vue.component("tl-todo-list", TodoListComponent);
Vue.component("tl-task", TodoTaskComponent);
