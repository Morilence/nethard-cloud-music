<template>
    <div id="header-top">
        <div class="left ">
            <logo />
            <history-controller />
            <search />
        </div>
        <div class="right">
            <login />
            <hr />
            <window-controller />
        </div>
    </div>
</template>

<script>
import Logo from "./Logo/index";
import HistoryController from "./HistoryController/index";
import Search from "./Search/index";
import Login from "./Login/index";
import WindowController from "./WindowController/index";
export default {
    name: "HeaderTop",
    components: {
        Logo,
        HistoryController,
        Search,
        Login,
        WindowController
    }
};
</script>

<style lang="stylus" scoped>
#header-top
    display flex
    flex-direction row
    justify-content space-between
    align-items center

    width 100%
    height $header_top_height
    background-color $forecolor

    color $header_top_primary_fontcolor

    .left
    .right
        display flex
        flex-direction row
        justify-content flex-start
        align-items center

    .right
        padding 0 18.5px

    hr
        outline none
        border none
        width 1.1px
        height 20px
        margin 0 18.5px
        background-color rgba(0, 0, 0, 0.15)
</style>
