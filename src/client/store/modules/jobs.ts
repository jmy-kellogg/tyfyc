import type { JobsList, JobsState, Context } from "../../../types/index";

interface JobsContext extends Context {
  state: JobsState;
}

export default {
  namespaced: true,
  state: (): JobsState => ({
    list: [
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
    updateJobs(state: JobsState, jobs: JobsList) {
      state.list = jobs;
    },
    addNew(state: JobsState) {
      const newItem = {
        title: "",
        company: "",
        location: "",
        start: "",
        end: "",
        description: "",
      };
      state.list.push(newItem);
    },
    remove(state: JobsState, index: number) {
      state.list.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }: JobsContext) {
      const jobsData = localStorage.getItem("jobs");
      if (jobsData) {
        const parseData: JobsList = JSON.parse(jobsData);
        commit("updateJobs", parseData);
      }
    },
    saveToLocalStorage({ state }: JobsContext) {
      localStorage.setItem("jobs", JSON.stringify(state.list));
    },
    updateJobs({ commit }: JobsContext, jobs: JobsList) {
      commit("updateJobs", jobs);
    },
    addNew({ commit }: JobsContext) {
      commit("addNew");
    },
    async remove({ commit, dispatch }: JobsContext, index: number) {
      await commit("remove", index);
      dispatch("saveToLocalStorage");
    },
  },
};
