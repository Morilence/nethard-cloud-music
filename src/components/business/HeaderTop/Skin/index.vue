<template>
    <div id="skin">
        <font-awesome-icon class="icon" :icon="['fal', 'tshirt']" />
    </div>
</template>

<script>
export default {
    name: "Skin"
};
</script>

<style lang="stylus" scoped>
#skin
    display flex
    flex-direction row
    justify-content center
    align-items center

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
</style>
