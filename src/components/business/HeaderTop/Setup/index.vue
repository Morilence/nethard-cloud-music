<template>
    <div id="setup">
        <font-awesome-icon class="icon" :icon="['fal', 'cog']" title="设置" />
    </div>
</template>

<script>
export default {
    name: "Setup"
};
</script>

<style lang="stylus" scoped>
#setup
    display flex
    flex-direction row
    justify-content center
    align-items center

    box-sizing content-box
    padding-bottom 1px
    margin-left 25.9px

    color rgba(255, 255, 255, 0.72)
    font-size 15.6px

    user-select none
    cursor pointer

    .icon
        &:hover
            color $header_top_stress_fontcolor
</style>
