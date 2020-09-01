<template>
    <div class="popover-frame">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "PopoverFrame"
};
</script>

<style lang="stylus">
.popover-frame
    position relative

    background-color $view_box_bgcolor
    border-radius 4px
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.12)

    cursor default

    &::before
        content ""
        position absolute
        top -6.8px
        left 50%

        width 0
        height 0
        border-style: solid;
        border-width: 7.8px;
        border-color: $view_box_bgcolor $view_box_bgcolor transparent transparent;
        transform: rotate(-45deg) translate(-5.51px, -5.51px);
        box-shadow 2px -2px 6px -2px rgba(0, 0, 0, 0.12)
</style>
