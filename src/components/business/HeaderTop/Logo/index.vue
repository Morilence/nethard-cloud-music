<template>
    <div class="logo">
        <font-awesome-icon class="icon" :icon="['fas', 'record-vinyl']" pull="left" />
        <h1 class="headline">网抑云音乐</h1>
    </div>
</template>

<script>
export default {
    name: "Logo"
};
</script>

<style lang="stylus" scoped>
.logo
    display flex
    flex-direction row
    justify-content center
    align-items center

    margin-left 15px

    color $header_top_stress_fontcolor

    cursor pointer
    user-select none

    .icon
        font-size 20.8px
        margin-right 4.3px

    .headline
        font-size 16.5px
        font-family 'YouYuan', 'Microsoft Yahei', Arial, sans-serif;
        font-weight 500
        letter-spacing 1.18px
</style>
