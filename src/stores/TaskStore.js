import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    task: [
      { id: 1, title: "Buy some think", isFav: false },
      { id: 2, title: "Hello GoodNight", isFav: true },
    ],
  }),
  
  getters: {
    favs() {
      return this.task.filter((t) => t.isFav);
    },

    favCount() {
      return this.task.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },

    totalCount: (state) => {
      return state.task.length;
    },
  },

  actions: {
    addTask(task) {
      this.task.push(task);
    },

    deleteTask(id) {
      this.task = this.task.filter((t) => {
        return t.id !== id;
      });
    },

    toggleFav(id) {
      const task = this.task.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
  persist: true,
});
