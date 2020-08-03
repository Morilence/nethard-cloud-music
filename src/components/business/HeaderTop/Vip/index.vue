<template>
    <div id="vip">
        <span>开通VIP</span>
    </div>
</template>

<script>
export default {
    name: "Vip"
};
</script>

<style lang="stylus" scoped>
#vip
    margin-left 13px

    font-size 11.6px

    cursor pointer
    user-select none

    & span
        &:hover
            color $header_top_stress_fontcolor
</style>
