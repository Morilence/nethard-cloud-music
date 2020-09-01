<template>
    <div id="skin">
        <font-awesome-icon class="icon" :icon="['fal', 'tshirt']" />
        <popover-frame class="dropdown"></popover-frame>
    </div>
</template>

<script>
import PopoverFrame from "../../../common/PopoverFrame/index";
export default {
    name: "Skin",
    components: {
        PopoverFrame
    }
};
</script>

<style lang="stylus" scoped>
#skin
    display flex
    flex-direction row
    justify-content center
    align-items center

    position relative

    box-sizing content-box
    padding-bottom 1px
    margin-left 13.3px

    color rgba(255, 255, 255, 0.72)
    font-size 14px

    user-select none
    cursor pointer

    .icon
        &:hover
            color $header_top_stress_fontcolor

    .dropdown
        position absolute
        top $header_top_height
        left 0

        width 200px
        height 500px
        border-radius 4px
        background-color $view_box_bgcolor
</style>
