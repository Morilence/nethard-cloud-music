<template>
    <div
        ref="wrap"
        :class="{ 'progress-bar': true, 'thumbhoveronly': thumbHoverOnly }"
        :style="{ width: width + 'px', padding: `${(thumbDiam - height) / 2}px 0` }"
        @mousedown="move($event)"
    >
        <div class="inner" :style="{ height: height + 'px' }">
            <div class="loaded" :style="{ width: loadedProgress + '%' }"></div>
            <div class="played" :style="{ width: playedProgress + '%' }">
                <div
                    ref="thumb"
                    :class="{ thumb: true, shadowed: thumbHoverShadow }"
                    :style="{ width: thumbDiam + 'px', height: thumbDiam + 'px', right: -(thumbDiam / 2) + 'px' }"
                    @mousedown="enableThumb()"
                    @mousemove="slide($event)"
                >
                    <i class="dot" :style="{ width: dotDiam + 'px', height: dotDiam + 'px' }"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: {
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 4.6
        },
        thumbHoverShadow: {
            type: Boolean,
            default: true
        },
        thumbHoverOnly: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            loadedProgress: 50,
            playedProgress: 20,
            isThumbActivated: false
        };
    },
    computed: {
        thumbDiam: {
            get() {
                return this.height + 6.8;
            }
        },
        dotDiam: {
            get() {
                return this.height - 0.8;
            }
        }
    },
    methods: {
        enableThumb() {
            this.isThumbActivated = true;
        },
        disableThumb() {
            this.isThumbActivated = false;
        },
        move(evt) {
            if (evt.target == this.$refs.wrap) {
                this.playedProgress = (evt.offsetX / this.width) * 100;
            }
        },
        slide(evt) {
            if (this.isThumbActivated) {
                let distance = evt.clientX - this.$refs.wrap.getBoundingClientRect().left;
                if (distance < 0) {
                    distance = 0;
                } else if (distance > this.width) {
                    distance = this.width;
                }
                this.playedProgress = (distance / this.width) * 100;
            }
        }
    },
    mounted() {
        window.addEventListener("mouseup", this.$options.methods.disableThumb.bind(this));
        window.addEventListener("mousemove", this.$options.methods.slide.bind(this));
        this.$once("hook:beforeDestroy", () => {
            window.removeEventListener("mouseup", this.$options.methods.disableThumb.bind(this));
            window.removeEventListener("mousemove", this.$options.methods.slide.bind(this));
        });
    }
};
</script>

<style lang="stylus" scoped>
.progress-bar
    display flex
    flex-direction column
    justify-content center
    align-items center

    position relative

    margin-left 10px

    user-select none

    &.thumbhoveronly
        &:hover
            .thumb
                display block
        .thumb
            display none

    .inner
        display flex
        flex-direction row
        justify-content flex-start
        align-items center

        position relative

        width 100%
        border-radius 2px
        background-color rgba(0, 0, 8, 0.065)

        pointer-events none

        .loaded
            width 0%
            height 100%
            background-color rgba(0, 0, 5, 0.155)
            border-radius 2px

            pointer-events none

        .played
            position absolute

            width 0%
            height 100%
            border-radius 2px
            background-color $second_forecolor

            pointer-events none

            .thumb
                position absolute
                top 50%
                transform translateY(-50%)
                right -7px

                box-sizing content-box
                border 1px solid rgb(194, 194, 196)
                border-radius 100%
                background-color #fff

                cursor pointer
                pointer-events auto

                &.shadowed:hover
                    box-shadow 0 0 3px 2.8px rgba(0, 0, 0, 0.1)

                .dot
                    position absolute
                    top 50%
                    left 50%
                    transform translate(-50%, -50%)

                    border none
                    border-radius 100%
                    background-color $second_forecolor

                    pointer-events none
</style>
