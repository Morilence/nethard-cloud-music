<template>
    <div class="progress-bar wrap" :style="{ width: width + 'px', height: height + 'px' }">
        <div class="inner" ref="inner" :style="{ height }" @mousedown="move($event)">
            <div class="loaded" :style="{ width: loadedProgress + '%' }"></div>
            <div class="played" :style="{ width: playedProgress + '%' }">
                <div
                    class="thumb"
                    :style="{ width: thumbDiam + 'px', height: thumbDiam + 'px', right: -(thumbDiam / 2) + 'px' }"
                    @click="slide($event)"
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
            default: 5
        }
    },
    data() {
        return {
            loadedProgress: 50,
            playedProgress: 20
        };
    },
    computed: {
        thumbDiam: {
            get() {
                return this.height + 6.6;
            }
        },
        dotDiam: {
            get() {
                return this.height - 1;
            }
        }
    },
    methods: {
        move(evt) {
            if (evt.target == this.$refs.inner) {
                this.playedProgress = (evt.offsetX / this.width) * 100;
            }
        },
        slide(evt) {
            console.log("distance to the left:", evt.clientX - this.$refs.inner.getBoundingClientRect().left);
        }
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

    .inner
        display flex
        flex-direction row
        justify-content flex-start
        align-items center

        position relative

        width 100%
        height 4.8px
        background-color rgba(0, 0, 8, 0.065)

        .loaded
            width 0%
            height 100%
            background-color rgba(0, 0, 5, 0.155)

            pointer-events none

        .played
            position absolute

            width 0%
            height 100%
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
