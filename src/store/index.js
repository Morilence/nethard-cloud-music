import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 子模块
import theme from "./modules/theme/index";
import play from "./modules/play/index";

export default new Vuex.Store({
    state: {},
    modules: {
        theme,
        play
    }
});
