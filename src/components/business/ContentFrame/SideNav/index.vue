<template>
    <div id="side-nav">
        <nav-list label="推荐">
            <nav-item :faicon="['fas', 'music']" title="发现音乐" :active="true" />
            <nav-item :faicon="['fas', 'music']" title="私人FM" />
            <nav-item :faicon="['fas', 'music']" title="LOOK直播" />
            <nav-item :faicon="['fas', 'music']" title="视频" />
            <nav-item :faicon="['fas', 'music']" title="朋友" />
        </nav-list>
    </div>
</template>

<script>
import NavList from "./NavList/index";
import NavItem from "./NavItem/index";
export default {
    name: "SideNav",
    components: {
        NavList,
        NavItem
    }
};
</script>

<style lang="stylus">
#side-nav
    min-width $side_nav_min_width
    height 100%
    background-color $side_nav_bgcolor
</style>
