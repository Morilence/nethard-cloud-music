<template>
    <div id="view-box"></div>
</template>

<script>
export default {
    name: "ViewBox"
};
</script>

<style lang="stylus" scoped>
#view-box
    width 100%
    min-width $view_box_min_width
    height 100%
    background-color $view_box_bgcolor
</style>
