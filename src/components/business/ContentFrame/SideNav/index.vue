<template>
    <div id="side-nav">
        <nav-list v-for="list in navs" :label="list.label" :key="list.label">
            <nav-item
                v-for="item in list.items"
                :title="item.title"
                :faicon="item.faicon"
                :active="item.index == currentIndex"
                :key="item.index"
                @click.native="onItemClick(item.index)"
            />
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
    },
    data() {
        return {
            // static data
            navs: [
                {
                    label: "推荐",
                    items: [
                        { index: 0, title: "发现音乐", faicon: ["fal", "music"] },
                        { index: 1, title: "私人FM", faicon: ["fal", "broadcast-tower"] },
                        { index: 2, title: "LOOK直播", faicon: ["fal", "tv-retro"] },
                        { index: 3, title: "视频", faicon: ["fal", "video"] },
                        { index: 4, title: "朋友", faicon: ["fal", "user-friends"] }
                    ]
                },
                {
                    label: "我的音乐",
                    items: [
                        { index: 5, title: "本地音乐", faicon: ["fal", "compact-disc"] },
                        { index: 6, title: "下载管理", faicon: ["fal", "download"] }
                    ]
                }
            ],
            // variables
            currentIndex: 0
        };
    },
    methods: {
        // local handlers
        onItemClick(index) {
            this.currentIndex = index;
        }
    }
};
</script>

<style lang="stylus" scoped>
#side-nav
    min-width $side_nav_min_width
    height 100%
    border-right 1px solid $base_line_color
    background-color $side_nav_bgcolor
</style>
