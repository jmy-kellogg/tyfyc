import { type Education, type EducationState, type Context}  from "../../types/index.ts"


interface EduContext extends Context {
  state: EducationState
}

export default {
  namespaced: true,
  state: ():EducationState => ({
    educationList: [
      {
        degree: "",
        school: "",
        gradYear: "",
      },
    ],
  }),
  mutations: {
    updateEducation(state: EducationState, educationList: Array<Education>) {
      state.educationList = educationList;
    },
    addNew(state: EducationState) {
      const newItem = {
        degree: "",
        school: "",
        gradYear: "",
      };
      state.educationList.push(newItem);
    },
    remove(state: EducationState, index: number) {
      state.educationList.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }: EduContext) {
      const educationData = localStorage.getItem("education");
      if (educationData) {
        const parseData: Array<Education> = JSON.parse(educationData);

        commit("updateEducation", parseData);
      }
    },
    saveToLocalStorage({ state }: EduContext) {
      localStorage.setItem("education", JSON.stringify(state.educationList));
    },
    addNew({ commit }: EduContext) {
      commit("addNew");
    },
    async remove({ commit, dispatch }: EduContext, index: number) {
      await commit("remove", index);
      dispatch("saveToLocalStorage");
    },
  },
};
