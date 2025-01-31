import { type Personal, type PersonalState, type Context}  from "../../types/index.ts"


interface PersonalContext extends Context {
  commit: Function;
  dispatch: Function;
  state: PersonalState
}

interface StateUpdateData {
  field: keyof Personal;
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
    updatePersonal(state: PersonalState, personal: Personal) {
      state = personal
    },
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
        
        commit("updatePersonal", parseData);
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
