<template>
    <ul class="theme-selector">
        <li v-for="theme in themeList" :key="theme.name"></li>
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
                    name: "酷炫黑"
                },
                {
                    code: 1,
                    name: "官方红"
                },
                {
                    code: 2,
                    name: "可爱粉"
                },
                {
                    code: 3,
                    name: "天际蓝"
                },
                {
                    code: 4,
                    name: "清新绿"
                },
                {
                    code: 5,
                    name: "土豪金"
                }
            ]
        };
    }
};
</script>

<style lang="stylus" scoped>
.theme-selector
    list-style none
</style>
