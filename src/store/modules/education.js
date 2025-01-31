export default {
  namespaced: true,
  state: () => ({
    eduHistory: [
      {
        degree: "",
        school: "",
        gradYear: "",
      },
    ],
  }),
  mutations: {
    updateEducation(state, education) {
      state.eduHistory = education;
    },
    addNew(state) {
      const newItem = {
        degree: "",
        school: "",
        gradYear: "",
      };
      state.eduHistory.push(newItem);
    },
    remove(state, index) {
      state.eduHistory.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }) {
      const educationData = localStorage.getItem("edu");
      if (educationData) {
        const parseData = JSON.parse(educationData);

        commit("updateEducation", parseData);
      }
    },
    saveToLocalStorage({ state }) {
      localStorage.setItem("edu", JSON.stringify(state.eduHistory));
    },
    addNew({ commit }) {
      commit("addNew");
    },
    async remove({ commit, dispatch }, index) {
      await commit("remove", index);
      dispatch("saveToLocalStorage");
    },
  },
};
