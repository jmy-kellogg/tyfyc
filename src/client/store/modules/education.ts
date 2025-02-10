import {
  type EducationList,
  type EducationState,
  type Context,
} from "../../../types/index";

interface EduContext extends Context {
  state: EducationState;
}

export default {
  namespaced: true,
  state: (): EducationState => ({
    list: [
      {
        degree: "",
        school: "",
        gradYear: "",
      },
    ],
  }),
  mutations: {
    updateEducation(state: EducationState, list: EducationList) {
      state.list = list;
    },
    addNew(state: EducationState) {
      const newItem = {
        degree: "",
        school: "",
        gradYear: "",
      };
      state.list.push(newItem);
    },
    remove(state: EducationState, index: number) {
      state.list.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }: EduContext) {
      const educationData = localStorage.getItem("education");
      if (educationData) {
        const parseData: EducationList = JSON.parse(educationData);

        commit("updateEducation", parseData);
      }
    },
    saveToLocalStorage({ state }: EduContext) {
      localStorage.setItem("education", JSON.stringify(state.list));
    },
    updateEducation({ commit }: EduContext, list: EducationList) {
      commit("updateEducation", list);
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
