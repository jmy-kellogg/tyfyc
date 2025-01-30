export default {
  namespaced: true,
  state: () => ({
    firstName: "Jess",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    gitHub: "",
    city: "",
    state: "",
    summary: "",
    gradYear: "",
  }),
  mutations: {
    updatePersonal(state, { field, value }) {
      if (state.hasOwnProperty(field)) {
        state[field] = value;
      }
    },
  },
  actions: {
    syncWithLocalStorage({ commit, state }) {
      const personal = localStorage.getItem("personalData");
      if (personal) {
        const data = JSON.parse(personal);
        Object.keys(data).forEach((field) => {
          const value = data[field];
          commit("updatePersonal", { field, value });
        });
      }
    },
    saveToLocalStorage({ state }) {
      // ToDo: change personalData to personal once all fields are updated
      localStorage.setItem("personalData", JSON.stringify(state));
    },
    async updateData({ commit, dispatch }, data) {
      await commit("updatePersonal", data);
      dispatch("saveToLocalStorage");
    },
  },
};
