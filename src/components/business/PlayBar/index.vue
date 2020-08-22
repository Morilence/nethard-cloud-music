<template>
    <div id="play-bar">
        <play-button-group />
        <progress-bar />
    </div>
</template>

<script>
import PlayButtonGroup from "./PlayButtonGroup/index";
import ProgressBar from "./ProgressBar/index";
export default {
    name: "PlayBar",
    components: {
        PlayButtonGroup,
        ProgressBar
    }
};
</script>

<style lang="stylus" scoped>
#play-bar
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    width 100%
    height $play_bar_height
    padding-left 29.8px
    border-top 1px solid $base_line_color
    background-color $play_bar_bgcolor
</style>
