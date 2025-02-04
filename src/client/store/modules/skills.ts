import { type Skill, type SkillsState, type Context}  from "../../types/index"

interface SkillsContext extends Context {
  state: SkillsState
}

export default {
  namespaced: true,
  state: () => ({
    skillsList: [{ name: "JavaScript", id: "js" }],
  }),
  mutations: {
    updateSkills(state: SkillsState, skills:  Array<Skill>) {
      state.skillsList = skills;
    },
    addSkill(state: SkillsState, skill: Skill) {
      state.skillsList.push(skill);
    },
    remove(state: SkillsState, index: number) {
      state.skillsList.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }: SkillsContext) {
      const skillsData = localStorage.getItem("skills");
      if (skillsData) {
        const parseData:Array<Skill> = JSON.parse(skillsData);
        commit("updateSkills", parseData);
      }
    },
    saveToLocalStorage({ state }: SkillsContext) {
      localStorage.setItem("skills", JSON.stringify(state.skillsList));
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
