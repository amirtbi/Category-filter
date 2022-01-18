import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      projects: [
        { id: "CheckBox", title: "CheckBox" },
        { id: "Menu", title: "Menu" },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {
      projects(state){
          return state.projects;
      }
  },
});

export default store;
