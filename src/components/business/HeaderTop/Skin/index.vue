<template>
    <div id="skin">
        <font-awesome-icon class="icon" :icon="['fal', 'tshirt']" @click="isDropped ? retract() : drop()" />
        <popover-frame ref="dropdown" v-show="isDropped" class="dropdown">
            <skin-peeler />
        </popover-frame>
    </div>
</template>

<script>
import PopoverFrame from "../../../common/PopoverFrame/index";
import SkinPeeler from "./SkinPeeler/index";
export default {
    name: "Skin",
    components: {
        PopoverFrame,
        SkinPeeler
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
        top $header_top_height - 25.5px

        width 319px
        height 251px

        padding 14.4px 15px
</style>
