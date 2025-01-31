import { createStore } from "vuex";
import personal from "./modules/personal";
// import skills from "./modules/skills";
import jobs from "./modules/jobs";
import education from "./modules/education";

export default createStore({
  actions: {
    getStateFromLocalStorage({ dispatch }) {
      dispatch("personal/syncWithLocalStorage");
      dispatch("education/syncWithLocalStorage");
      dispatch("jobs/syncWithLocalStorage");
    },
  },
  modules: {
    personal,
    // skills,
    jobs,
    education,
  },
});
