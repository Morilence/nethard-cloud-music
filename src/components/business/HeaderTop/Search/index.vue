<template>
    <div class="search">
        <label v-show="!(isFocused || keyword.length != 0)" class="placeholder">{{ placeholder }}</label>
        <input type="text" v-model="keyword" @focus="isFocused = true" @blur="isFocused = false" />
        <font-awesome-icon :class="{ icon: true, active: isFocused }" :icon="['fal', 'search']" />
    </div>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            // static data
            placeholder: "搜索音乐，视频，歌词，电台",
            // variables
            isFocused: false,
            keyword: ""
        };
    }
};
</script>

<style lang="stylus" scoped>
.search
    display flex
    flex-direction row
    justify-content center
    align-items center

    position relative

    margin-left 10.6px

    color $header_top_secondary_fontcolor

    .placeholder
        position absolute
        top 45%
        transform translateY(-50%)
        left 8.8px

        font-size 12px

        user-select none
        pointer-events none

    .icon
        position absolute
        top 47%
        transform translateY(-50%)
        right 10px

        color rgba(255, 255, 255, 0.5)
        font-size 12.6px
        font-weight bold

        &.active
            color $header_top_stress_fontcolor

    input
        outline none

        padding 3px 15px 4.5px 8.8px
        min-width 217px
        border none
        border-radius 12px
        background-color rgba(0, 0, 0, 0.15)

        color $header_top_stress_fontcolor
        font-size 12px
</style>
