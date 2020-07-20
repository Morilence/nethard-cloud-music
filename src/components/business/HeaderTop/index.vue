<template>
    <div id="header-top">
        <logo />
    </div>
</template>

<script>
import Logo from "./Logo/index";
export default {
    name: "HeaderTop",
    components: {
        Logo
    }
};
</script>

<style lang="stylus">
#header-top
    display flex
    flex-direction row
    justify-content space-between
    align-items center

    width 100%
    height $header_top_height
    background-color $forecolor

    color $header_top_primary_fontcolor
</style>
