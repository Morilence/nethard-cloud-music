import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// normalize.css
import "normalize.css/normalize.css";

// temp.css
import "./style/css/temp.css";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//     faArrowAltToLeft as fasArrowAltToLeft,
//     faArrowAltToRight as fasArrowAltToRight
// } from "@fortawesome/pro-solid-svg-icons";
// import { faChevronLeft as farChevronLeft, faChevronRight as farChevronRight } from "@fortawesome/pro-regular-svg-icons";
// import { faWindowMinimize as farWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import {
    faRecordVinyl as fasRecordVinyl,
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
    faSortDown as fasSortDown,
    faPlay as fasPlay,
    faPause as fasPause,
    faStepForward as fasStepForward,
    faStepBackward as fasStepBackward
} from "@fortawesome/free-solid-svg-icons";
import {
    faMusic as falMusic,
    faBroadcastTower as falBroadcastTower,
    faTvRetro as falTvRetro,
    faVideo as falVideo,
    faUserFriends as falUserFriends,
    faCompactDisc as falCompactDisc,
    faDownload as falDownload,
    faSearch as falSearch,
    faExternalLinkSquare as falExternalLinkSquare,
    faMinus as falMinus,
    faWindowMaximize as falWindowMaximize,
    faTimes as falTimes,
    faTshirt as falTshirt,
    faEnvelope as falEnvelope,
    faCog as falCog
} from "@fortawesome/pro-light-svg-icons";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(
    falMusic,
    falBroadcastTower,
    falTvRetro,
    falVideo,
    falUserFriends,
    falCompactDisc,
    falDownload,
    falSearch,
    falExternalLinkSquare,
    falMinus,
    falWindowMaximize,
    falTimes,
    falTshirt,
    falEnvelope,
    falCog,
    fasRecordVinyl,
    fasChevronLeft,
    fasChevronRight,
    fasSortDown,
    fasPlay,
    fasPause,
    fasStepForward,
    fasStepBackward
);

// vue-scroll
import vuescroll from "vuescroll";
Vue.use(vuescroll, {
    name: "vueScroll",
    ops: {
        vuescroll: {
            mode: "native",
            sizeStrategy: "percent",
            detectResize: true,
            wheelScrollDuration: 360
        },
        scrollPanel: {
            easing: "easeInOutQuad"
        },
        rail: {
            gutterOfSide: "4px"
        },
        bar: {
            size: "8px",
            background: "rgb(144, 147, 153)",
            opacity: 0.2
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
