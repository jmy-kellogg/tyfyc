export default {
  namespaced: true,
  state: () => ({
    jobsHistory: [
      {
        title: "",
        company: "",
        location: "",
        start: "",
        end: "",
        description: "",
      },
    ],
  }),
  mutations: {
    updateJobs(state, jobs) {
      state.jobsHistory = jobs;
    },
    addNew(state) {
      const newItem = {
        title: "",
        company: "",
        location: "",
        start: "",
        end: "",
        description: "",
      };
      state.jobsHistory.push(newItem);
    },
    remove(state, index) {
      state.jobsHistory.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }) {
      const jobsData = localStorage.getItem("jobs");
      if (jobsData) {
        const parseData = JSON.parse(jobsData);
        commit("updateJobs", parseData);
      }
    },
    saveToLocalStorage({ state }) {
      localStorage.setItem("jobs", JSON.stringify(state.jobsHistory));
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
