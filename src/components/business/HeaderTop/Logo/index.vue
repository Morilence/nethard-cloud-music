<template>
    <div id="logo">
        <font-awesome-icon class="icon" :icon="['fas', 'record-vinyl']" pull="left" />
        <h1 class="headline">网难云音乐</h1>
    </div>
</template>

<script>
export default {
    name: "Logo"
};
</script>

<style lang="stylus" scoped>
#logo
    display flex
    flex-direction row
    justify-content center
    align-items center

    margin 0 14.5px

    color $header_top_stress_fontcolor

    .icon
        font-size 20.8px
        margin-right 4.5px

    .headline
        font-size 16.8px
        font-family 'HanWangYenMediu221223bc8f2224a';
        font-weight 500
        letter-spacing 1.3px
</style>
