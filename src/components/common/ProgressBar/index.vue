<template>
    <div class="progress-bar wrap" :style="{ width: width + 'px', height: height + 'px' }">
        <div class="inner" :style="{ height }">
            <div class="loaded"></div>
            <div class="played">
                <div class="thumb" :style="{ width: thumbRadius + 'px', height: thumbRadius + 'px' }">
                    <i class="dot" :style="{ width: dotRadius + 'px', height: dotRadius + 'px' }"></i>
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
            progress: 0
        };
    },
    computed: {
        thumbRadius: {
            get() {
                return this.height + 6.5;
            }
        },
        dotRadius: {
            get() {
                return this.height - 1;
            }
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

    user-select none

    .inner
        display flex
        flex-direction row
        justify-content flex-start
        align-items center

        position relative

        width 100%
        height 5px
        background-color rgba(0, 0, 8, 0.065)

        .loaded
            width 50%
            height 100%
            background-color rgba(0, 0, 5, 0.155)

        .played
            position absolute

            width 20%
            height 100%
            background-color $second_forecolor

            .thumb
                display flex
                flex-direction row
                justify-content center
                align-items center

                position absolute
                top 50%
                transform translateY(-50%)
                right -2px

                box-sizing content-box
                border 1px solid rgb(194, 194, 196)
                border-radius 100%
                background-color #fff

                cursor pointer

                .dot
                    border none
                    border-radius 100%
                    background-color $second_forecolor
</style>
