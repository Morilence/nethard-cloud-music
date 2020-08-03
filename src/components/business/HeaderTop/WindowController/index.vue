<template>
    <div id="window-controller">
        <font-awesome-icon class="icon mini" :icon="['fal', 'external-link-square']" title="mini模式" />
        <font-awesome-icon class="icon minimize" :icon="['fal', 'minus']" title="最小化" />
        <font-awesome-icon class="icon maximize" :icon="['fal', 'window-maximize']" title="最大化" />
        <font-awesome-icon class="icon close" :icon="['fal', 'times']" title="关闭" @click="close()" />
    </div>
</template>

<script>
export default {
    name: "WindowController",
    methods: {
        close() {
            window.close();
        }
    }
};
</script>

<style lang="stylus" scoped>
#window-controller
    display flex
    flex-direction row
    justify-content center
    align-items center

    .icon
        color rgba(255, 255, 255, 0.5)
        font-size 12.5px
        cursor pointer

        &:not(:first-child)
            margin-left 12.4px

        &.mini
            box-sizing content-box
            padding-bottom 0.8px
            transform scale(1.25, 1.05) rotate(180deg)
        &.minimize
            transform scale(1.35, 0.85)
        &.maximize
            transform scaleX(1.02)
        &.close
            margin-left 13.2px
            transform scale(1.55, 1.5)

        &:hover
            color $header_top_stress_fontcolor
</style>
