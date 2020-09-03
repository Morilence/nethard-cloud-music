<template>
    <div id="skin-peeler">
        <ul class="types">
            <li :class="['type', 'theme', optIndex == 0 ? 'active' : '']" @click="choose(0)">主题</li>
            <li :class="['type', 'purecolor', optIndex == 1 ? 'active' : '']" @click="choose(1)">纯色</li>
        </ul>
        <div class="container">
            <theme-selector v-if="optIndex == 0" />
            <purecolor-selector v-else />
        </div>
    </div>
</template>

<script>
import PurecolorSelector from "./PurecolorSelector/index";
import ThemeSelector from "./ThemeSelector/index";
export default {
    name: "SkinPeeler",
    data() {
        return {
            optIndex: 0
        };
    },
    components: {
        PurecolorSelector,
        ThemeSelector
    },
    methods: {
        choose(index) {
            this.optIndex = index;
        }
    }
};
</script>

<style lang="stylus" scoped>
#skin-peeler
    display flex
    flex-direction column
    justify-content flex-start
    align-items center

    position relative

    width 100%
    height 100%

    user-select none

    .types
        display flex
        flex-direction row
        justify-content flex-start
        align-items center

        list-style none

        position relative

        padding 0 1px
        width 100%

        &::after
            content ""
            display block

            position absolute
            left 0
            bottom 0

            width 100%
            height 1.4px
            background-color rgb(225, 225, 225)

        .type
            padding-bottom 2.6px
            border-bottom 1.8px solid transparent

            position relative

            color $secondary_fontcolor
            font-size 12.3px

            z-index 1
            cursor pointer

            &:not(:first-child)
                margin-left 18px

            &:hover
                color $primary_fontcolor
            &.active
                color $primary_fontcolor
                border-bottom 1.8px solid rgb(136, 136, 136)

    .container
        display flex
        flex-direction row
        justify-content center
        align-items center

        margin-top 10.6px
        width 100%
        height 100%
</style>
