import {  type PersonalState, type Context}  from "../../types/index.ts"


interface PersonalContext extends Context {
  commit: Function;
  dispatch: Function;
  state: PersonalState
}

interface StateUpdateData {
  field:  keyof PersonalState;
  value: string;
}

export default {
  namespaced: true,
  state: (): PersonalState => ({
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
    updatePersonalData(state: PersonalState, { field, value }: StateUpdateData) {
      if (state.hasOwnProperty(field)) {
        state[field] = value;
      }
    },
  },
  actions: {
    syncWithLocalStorage({ commit }: PersonalContext) {
      const personalData = localStorage.getItem("personal");
      if (personalData) {
        const parseData: PersonalState = JSON.parse(personalData);
        let field:  keyof PersonalState;

        for (field in parseData){
          const value = parseData[field];
          commit("updatePersonalData", { field, value });
        }
      }
    },
    saveToLocalStorage({ state }: PersonalContext) {
      localStorage.setItem("personal", JSON.stringify(state));
    },
    async updateData({ commit, dispatch }: PersonalContext, data: StateUpdateData) {
      await commit("updatePersonalData", data);
      dispatch("saveToLocalStorage");
    },
  },
};
