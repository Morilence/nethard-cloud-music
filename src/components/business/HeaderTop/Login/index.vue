<template>
    <div id="login">
        <div class="avatar">
            <img src="" alt="" />
        </div>
        <div class="status">
            <span class="uname">未登录</span>
            <font-awesome-icon class="icon unfold" :icon="['fas', 'sort-down']" />
        </div>
        <popover-frame v-if="false"></popover-frame>
    </div>
</template>

<script>
import PopoverFrame from "../../../common/PopoverFrame/index";
export default {
    name: "Login",
    components: {
        PopoverFrame
    }
};
</script>

<style lang="stylus" scoped>
#login
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    user-select none

    .avatar
        width 23px
        height 23px
        border-radius 23px
        background-color rgb(225, 227, 228)

        line-height 23px
        cursor pointer

    .status
        display flex
        flex-direction row
        justify-content flex-start
        align-items center

        font-size 12px
        cursor pointer

        &:hover
            color $header_top_stress_fontcolor

        .uname
            margin 0 8.4px 0 7px

        .icon
            box-sizing content-box
            padding-bottom 6px
            font-size 13.5px
            transform scaleX(1.05)
</style>
