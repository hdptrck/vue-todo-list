<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/hdptrck/vue-todo-app"
        target="_blank"
        text
      >
        <span class="mr-2">Open on GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <TodoListMain />
    </v-main>
  </v-app>
</template>

<script>
import TodoListMain from "@/components/TodoListMain.vue";

export default {
  name: "App",
  components: {
    TodoListMain
  },
  data: () => ({
    //
  }),
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
