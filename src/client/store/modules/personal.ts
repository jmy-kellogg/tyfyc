import {  type PersonalState, type Context, type PersonalStateUpdate}  from "../../../types/index"


interface PersonalContext extends Context {
  commit: Function;
  dispatch: Function;
  state: PersonalState
}

export default {
  namespaced: true,
  state: (): PersonalState => ({
    firstName: "",
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
    updatePersonalData(state: PersonalState, { field, value }: PersonalStateUpdate) {
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
    async updateData({ commit, dispatch }: PersonalContext, data: PersonalStateUpdate) {
      await commit("updatePersonalData", data);
      dispatch("saveToLocalStorage");
    },
  },
};
