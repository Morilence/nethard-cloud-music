<template>
    <div id="header-top">
        <div class="left ">
            <logo />
            <history-controller />
            <search />
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
import Logo from "./Logo/index";
import HistoryController from "./HistoryController/index";
import Search from "./Search/index";
export default {
    name: "HeaderTop",
    components: {
        Logo,
        HistoryController,
        Search
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
        display flex
        flex-direction row
        justify-content flex-start
        align-items center
</style>
