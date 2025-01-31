export default {
  namespaced: true,
  state: () => ({
    skillsList: [{ name: "JavaScript", id: "js" }],
  }),
  mutations: {
    updateSkills(state, skills) {
      state.skillsList = skills;
    },
    addSkill(state, skill) {
      state.skillsList.push(skill);
    },
    remove(state, index) {
      state.skillsList.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }) {
      const skillsData = localStorage.getItem("skills");
      if (skillsData) {
        const parseData = JSON.parse(skillsData);
        commit("updateSkills", parseData);
      }
    },
    saveToLocalStorage({ state }) {
      localStorage.setItem("skills", JSON.stringify(state.skillsList));
    },
    async addSkill({ commit, dispatch }, skill) {
      await commit("addSkill", skill);
      dispatch("saveToLocalStorage");
    },
    async remove({ commit, dispatch }, index) {
      await commit("remove", index);
      dispatch("saveToLocalStorage");
    },
  },
};
