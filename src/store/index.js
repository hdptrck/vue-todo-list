import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  state: {
    title: "Vue Todo List",
    success: true,
    message: undefined,
    errorCode: 200,
    version: "1.0.0",
    data: []
  },
  mutations: {
    addTask(state, task) {
      if (!task.description) {
        console.log("error handling missing");
      }
      state.data.unshift({
        id: (state.data.length + 1).toString(),
        description: task.description,
        isCompleted: false
      });
    },
    editTask(state, task) {
      const taskIndex = state.data.findIndex(t => t.id == task.id);
      state.data[taskIndex] = task;
    },
    removeTask(state, task) {
      const taskIndex = state.data.findIndex(t => t.id == task.id);
      taskIndex > -1
        ? state.data.splice(taskIndex, 1)
        : new Error("Invalid Index");
    }
  },
  actions: {
    addTask(context, task) {
      context.commit("addTask", task);
    },
    editTask(context, task) {
      context.commit("editTask", task);
    },
    removeTask(context, task) {
      context.commit("removeTask", task);
    }
  },
  getter: {
    getTasks(state) {
      return state.data;
    }
  },
  modules: {}
};

export default new Vuex.Store(store);
