import { type PersonalState, type Context, type StateUpdateData}  from "../../types/index.ts"


interface PersonalContext extends Context {
  commit: Function;
  dispatch: Function;
  state: PersonalState
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
    updatePersonal(state: PersonalState, { field, value }: StateUpdateData) {
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
        Object.keys(parseData).forEach((field) => {
          const value = parseData[field];
          commit("updatePersonal", { field, value });
        });
      }
    },
    saveToLocalStorage({ state }: PersonalContext) {
      localStorage.setItem("personal", JSON.stringify(state));
    },
    async updateData({ commit, dispatch }: PersonalContext, data: StateUpdateData) {
      await commit("updatePersonal", data);
      dispatch("saveToLocalStorage");
    },
  },
};
