<template>
    <div id="letter">
        <font-awesome-icon class="icon" :icon="['fal', 'envelope']" @click="isDropped ? retract() : drop()" />
        <popover-frame ref="dropdown" v-show="isDropped" class="dropdown"></popover-frame>
    </div>
</template>

<script>
import PopoverFrame from "../../../common/PopoverFrame/index";
export default {
    name: "Letter",
    components: {
        PopoverFrame
    },
    data() {
        return {
            isDropped: false
        };
    },
    methods: {
        /**
         * 展开
         */
        drop() {
            this.isDropped = true;
        },
        /**
         * 收回
         */
        retract() {
            this.isDropped = false;
        }
    },
    mounted() {
        /**
         * 失焦收回
         */
        let blur = evt => {
            if (evt.path.indexOf(this.$el) == -1) {
                this.$options.methods.retract.bind(this)();
            }
        };
        window.addEventListener("click", blur);
        this.$once("hook:beforeDestroy", () => {
            window.removeEventListener("click", blur);
        });
    }
};
</script>

<style lang="stylus" scoped>
#letter
    display flex
    flex-direction row
    justify-content center
    align-items center

    position relative

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

    .dropdown
        position absolute
        top $header_top_height - 25px

        width 365px
        height 3850%
</style>
