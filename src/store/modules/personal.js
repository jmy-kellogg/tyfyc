export default {
  namespaced: true,
  state: () => ({
    firstName: "Jess",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    linkedIn: "",
    gitHub: "",
    summary: "",
  }),
  mutations: {
    updatePersonal(state, { field, value }) {
      if (state.hasOwnProperty(field)) {
        state[field] = value;
      }
    },
  },
  actions: {
    syncWithLocalStorage({ commit }) {
      const personalData = localStorage.getItem("personal");
      if (personalData) {
        const parseData = JSON.parse(personalData);
        Object.keys(parseData).forEach((field) => {
          const value = parseData[field];
          commit("updatePersonal", { field, value });
        });
      }
    },
    saveToLocalStorage({ state }) {
      localStorage.setItem("personal", JSON.stringify(state));
    },
    async updateData({ commit, dispatch }, data) {
      await commit("updatePersonal", data);
      dispatch("saveToLocalStorage");
    },
  },
};
