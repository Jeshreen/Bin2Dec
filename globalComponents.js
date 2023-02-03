import { BRow, BCol, BContainer } from "bootstrap-vue";

const GlobalComponents = {
  install(Vue) {
    Vue.component("b-row", BRow);
    Vue.component("b-col", BCol);
    Vue.component("b-container", BContainer);
  }
};

export default GlobalComponents;