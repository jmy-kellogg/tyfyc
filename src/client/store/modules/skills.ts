import type {
  SkillsList,
  Skill,
  SkillsState,
  Context,
} from "../../../types/index";

interface SkillsContext extends Context {
  state: SkillsState;
}

export default {
  namespaced: true,
  state: () => ({
    list: [{ label: "JavaScript", name: "javascript" }],
  }),
  mutations: {
    updateSkills(state: SkillsState, skills: SkillsList) {
      state.list = skills;
    },
    addSkill(state: SkillsState, skill: Skill) {
      state.list.push(skill);
    },
    remove(state: SkillsState, index: number) {
      state.list.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }: SkillsContext) {
      const skillsData = localStorage.getItem("skills");
      if (skillsData) {
        const parseData: SkillsList = JSON.parse(skillsData);
        commit("updateSkills", parseData);
      }
    },
    saveToLocalStorage({ state }: SkillsContext) {
      localStorage.setItem("skills", JSON.stringify(state.list));
    },
    updateSkills({ commit }: SkillsContext, skills: SkillsList) {
      commit("updateSkills", skills);
    },
    async addSkill({ commit, dispatch }: SkillsContext, skill: Skill) {
      await commit("addSkill", skill);
      dispatch("saveToLocalStorage");
    },
    async remove({ commit, dispatch }: SkillsContext, index: number) {
      await commit("remove", index);
      dispatch("saveToLocalStorage");
    },
  },
};
