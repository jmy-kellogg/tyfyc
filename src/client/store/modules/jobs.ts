import { type Job, type JobsState, type Context}  from "../../types/index"

interface JobsContext extends Context {
  state: JobsState
}

export default {
  namespaced: true,
  state: ():JobsState => ({
    jobsList: [
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
    updateJobs(state: JobsState, jobs:  Array<Job>) {
      state.jobsList = jobs;
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
      state.jobsList.push(newItem);
    },
    remove(state: JobsState, index: number) {
      state.jobsList.splice(index, 1);
    },
  },
  actions: {
    syncWithLocalStorage({ commit }: JobsContext) {
      const jobsData = localStorage.getItem("jobs");
      if (jobsData) {
        const parseData: Array<Job> = JSON.parse(jobsData);
        commit("updateJobs", parseData);
      }
    },
    saveToLocalStorage({ state }: JobsContext) {
      localStorage.setItem("jobs", JSON.stringify(state.jobsList));
    },
    updateJobs( {commit }: JobsContext, jobs:  Array<Job>) {
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
