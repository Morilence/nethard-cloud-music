<template>
    <div id="play-progress">
        <span class="time current">00:00</span>
        <progress-bar :width="width" :loaded="loaded" :played="played" />
        <span class="time total">00:00</span>
    </div>
</template>

<script>
import ProgressBar from "../../../common/ProgressBar/index";
export default {
    name: "PlayProgress",
    components: {
        ProgressBar
    },
    data() {
        return {
            width: 377,
            loaded: 0,
            played: 0
        };
    },
    methods: {
        /**
         * 重置进度条宽度
         */
        resize() {
            const appMinWidth = Number(getComputedStyle(document.getElementById("app")).minWidth.split("px")[0]);
            let appWidth = document.getElementById("app").getBoundingClientRect().width;
            if (appWidth > appMinWidth) {
                this.width = 377 + (appWidth - appMinWidth);
            } else {
                this.width = 377;
            }
        }
    },
    mounted() {
        this.$options.methods.resize.bind(this)();
        window.addEventListener("resize", this.$options.methods.resize.bind(this));
        this.$once("hook:beforeDestroy", () => {
            window.removeEventListener("resize", this.$options.methods.resize.bind(this));
        });

        // 临时效果
        let loadTimer = setInterval(() => {
            if (this.loaded < 100) {
                this.loaded += 0.2;
            } else {
                clearInterval(loadTimer);
            }
        }, 2);
    }
};
</script>

<style lang="stylus" scoped>
#play-progress
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    margin-left 29.6px

    .time
        font-size 12px
        letter-spacing 1px

        transform scale(0.875, 0.96)
        cursor default

    .progress-bar
        margin 0 11px
</style>
