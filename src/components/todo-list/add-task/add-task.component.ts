import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class AddTaskComponent extends Vue {
  description = "";
  addNewTask() {
    this.$store.dispatch("addTask", {
      description: this.description
    });
    this.description = "";
  }
}
