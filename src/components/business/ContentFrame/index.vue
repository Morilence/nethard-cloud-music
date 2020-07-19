<template>
    <div id="content-frame">
        <side-nav />
        <view-box />
    </div>
</template>

<script>
import SideNav from "./SideNav/index";
import ViewBox from "./ViewBox/index";
export default {
    name: "ContentFrame",
    components: {
        SideNav,
        ViewBox
    }
};
</script>

<style lang="stylus">
#content-frame
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    width 100%
    height 100%
</style>
