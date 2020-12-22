import Snow from "./Snow.vue";
import "./style/tree.scss";
import "./style/index.scss";

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  Vue.component("Snow", Snow);
};
