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
.popover-frame {
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>
