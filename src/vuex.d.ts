import { type Store } from 'vuex'
import {type State} from "./types/index"

declare module 'vue' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare module "vuex" {
    export * from "vuex/types/index.d.ts";
    export * from "vuex/types/helpers.d.ts";
    export * from "vuex/types/logger.d.ts";
    export * from "vuex/types/vue.d.ts";
}