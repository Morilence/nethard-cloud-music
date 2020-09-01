<template>
    <div class="popover-frame">
        <div class="arrow"></div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopoverFrame"
};
</script>

<style lang="stylus">
.popover-frame
    display flex
    flex-direction column
    justify-content flex-start
    align-items center

    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.12)
</style>
