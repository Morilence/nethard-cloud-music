<template>
    <div id="play-bar">
        <div class="left">
            <play-button-group />
            <play-progress />
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
import PlayButtonGroup from "./PlayButtonGroup/index";
import PlayProgress from "./PlayProgress/index";
export default {
    name: "PlayBar",
    components: {
        PlayButtonGroup,
        PlayProgress
    },
    methods: {}
};
</script>

<style lang="stylus" scoped>
#play-bar
    display flex
    flex-direction row
    justify-content space-between
    align-items center

    width 100%
    height $play_bar_height
    padding-left 29.6px
    border-top 1px solid $base_line_color
    background-color $play_bar_bgcolor

    .left
    .right
        display flex
        flex-direction row
        justify-content flex-start
        align-items center
</style>
