<template>
    <div id="play-bar"></div>
</template>

<script>
export default {
    name: "PlayBar"
};
</script>

<style lang="stylus" scoped>
#play-bar
    width 100%
    height $play_bar_height
    border-top 1px solid $base_line_color
    background-color $play_bar_bgcolor
</style>
