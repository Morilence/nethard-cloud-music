<template>
    <div id="history-controller">
        <button :class="{ backward: true, active: false }">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
        <button :class="{ forward: true, active: false }">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
    </div>
</template>

<script>
export default {
    name: "HistoryController"
};
</script>

<style lang="stylus" scoped>
#history-controller
    display flex
    flex-direction row
    justify-content center
    align-items center

    margin-left 62px

    button
        outline none

        display flex
        flex-direction row
        justify-content center
        align-items center

        padding 2.6px 8.5px 4.4px 8.5px
        border 1px solid rgba(0, 0, 0, 0.15)
        border-radius 2px
        background-color transparent

        color $header_top_placeholder_fontcolor
        font-size 12.5px

    &.active
        color $header_top_stress_fontcolor
        cursor pointer

    .backward
        border-right none
        border-top-right-radius 0
        border-bottom-right-radius 0

    .forward
        border-top-left-radius 0
        border-bottom-left-radius 0
</style>
