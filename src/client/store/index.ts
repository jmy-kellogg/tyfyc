import { type InjectionKey } from 'vue';
import { createStore,  useStore as baseUseStore, type Store } from 'vuex';

import { type State, type Context}  from "../types/index.ts"
import personal from "./modules/personal";
import skills from "./modules/skills";
import jobs from "./modules/jobs";
import education from "./modules/education";

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  actions: {
    getStateFromLocalStorage({ dispatch }: Context) {
      dispatch("personal/syncWithLocalStorage");
      dispatch("education/syncWithLocalStorage");
      dispatch("jobs/syncWithLocalStorage");
      dispatch("skills/syncWithLocalStorage");
    },
  },
  modules: {
    personal,
    skills,
    jobs,
    education,
  },
});

export function useStore () {
  return baseUseStore(key)
}
