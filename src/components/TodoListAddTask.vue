<template>
  <v-text-field
    autofocus
    v-model="description"
    label="Add New Task"
    outlined
    dense
    ref="task"
    append-icon="mdi-plus-box"
    v-on:click:append="addTask()"
    v-on:keyup.enter="addTask()"
    counter="128"
    :rules="rules"
    hide-details="auto"
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    description: "",
    rules: [
      value => value.length <= 128 || "Max 128 characters",
      value => !!value || "Required.",
      value =>
        (value.length >= 1 && value.replace(/\s/g, "").length) ||
        "Min 1 character"
    ]
  }),
  methods: {
    addTask() {
      if (
        this.description.length > 100 ||
        !this.description.replace(/\s/g, "").length
      ) {
        return;
      }
      this.$store.dispatch("addTask", {
        description: this.description
      });
      this.description = "";
    }
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  mounted() {
    this.$refs.task.$el.focus();
  }
};
</script>

<style scoped lang="scss"></style>
