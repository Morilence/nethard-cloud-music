<template>
    <div id="skin-peeler">
        <ul class="options">
            <li :class="['opt', 'theme', optIndex == 0 ? 'active' : '']" @click="choose(0)">主题</li>
            <li :class="['opt', 'purecolor', optIndex == 1 ? 'active' : '']" @click="choose(1)">纯色</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SkinPeeler",
    data() {
        return {
            optIndex: 0
        };
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

    user-select none

    .options
        display flex
        flex-direction row
        justify-content flex-start
        align-items center

        list-style none

        position relative

        width 100%

        &::after
            content ""
            display block

            position absolute
            left 0
            bottom 0

            width 100%
            height 1.8px
            background-color rgb(225, 225, 225)

        .opt
            padding-bottom 2.6px
            border-bottom 1.4px solid transparent

            position relative

            color $secondary_fontcolor
            font-size 12px

            z-index 1
            cursor pointer

            &:not(:first-child)
                margin-left 18px

            &:hover
                color $primary_fontcolor
            &.active
                color $primary_fontcolor
                border-bottom 1.4px solid rgb(136, 136, 136)
</style>
