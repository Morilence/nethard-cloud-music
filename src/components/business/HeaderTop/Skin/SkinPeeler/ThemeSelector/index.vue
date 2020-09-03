<template>
    <ul class="theme-selector">
        <li :class="`theme ${theme.className}`" v-for="theme in themeList" :key="theme.name">
            <div class="background"></div>
            <label class="label">{{ theme.name }}</label>
        </li>
    </ul>
</template>

<script>
export default {
    name: "ThemeSelector",
    data() {
        return {
            themeList: [
                {
                    code: 0,
                    name: "酷炫黑",
                    className: "kuxuanhei"
                },
                {
                    code: 1,
                    name: "官方红",
                    className: "guanfanghong"
                }
            ]
        };
    }
};
</script>

<style lang="stylus" scoped>
$kuxuanhei_color = rgb(41, 44, 50)
$guanfanghong_color = rgb(205, 56, 53)

.theme-selector
    list-style none

    display grid
    grid-template-columns 1fr 1fr 1fr
    grid-template-rows 1fr 1fr
    grid-gap 8.5px 6px

    width 100%
    height 193px

    user-select none

    .theme
        display flex
        flex-direction row
        justify-content center
        align-items center

        position relative

        border-width 1px
        border-style solid
        border-color transparent

        cursor pointer

        &.kuxuanhei:hover
            border-color $kuxuanhei_color
        &.guanfanghong:hover
            border-color $guanfanghong_color

        .background
            width 99%
            height 99%

        &.kuxuanhei
            .background
                background-color $kuxuanhei_color
        &.guanfanghong
            .background
                background-color $guanfanghong_color

        .label
            position absolute
            left 0
            bottom 0

            padding-left 5px
            width 100%
            height 20px
            background-color rgba(0, 0, 0, 0.15)

            color #fff
            font-size 12px
            line-height 19px
</style>
