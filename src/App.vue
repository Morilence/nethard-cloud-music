<template>
    <vue-scroll>
        <div id="app" class="fullscreen">
            <header-top />
            <content-frame />
            <play-bar />
        </div>
    </vue-scroll>
</template>

<script>
import HeaderTop from "./components/business/HeaderTop/index";
import ContentFrame from "./components/business/ContentFrame/index";
import PlayBar from "./components/business/PlayBar/index";
export default {
    name: "App",
    components: {
        HeaderTop,
        ContentFrame,
        PlayBar
    }
};
</script>

<style lang="stylus">
@import "./style/styl/global.styl";

#app
    display flex
    flex-direction column
    justify-content center
    align-items center

    position relative

    min-width $app_min_width
    min-height $app_min_height

    color $primary_fontcolor
    font-family 'Microsoft YaHei', Arial, sans-serif
</style>
