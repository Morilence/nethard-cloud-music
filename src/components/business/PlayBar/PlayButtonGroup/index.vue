<template>
    <div id="play-button-group">
        <button class="backward">
            <font-awesome-icon :icon="['fas', 'step-backward']" />
        </button>
        <button :class="isPlaying ? 'pause' : 'play'" @click="isPlaying = !isPlaying">
            <font-awesome-icon :icon="['fas', isPlaying ? 'pause' : 'play']" />
        </button>
        <button class="forward">
            <font-awesome-icon :icon="['fas', 'step-forward']" />
        </button>
    </div>
</template>

<script>
export default {
    name: "PlayButtonGroup",
    data() {
        return {
            isPlaying: false
        };
    }
};
</script>

<style lang="stylus" scoped>
#play-button-group
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    user-select none

    button
        outline none

        display flex
        flex-direction row
        justify-content center
        align-items center

        border none
        border-radius 100%

        background-color $second_forecolor

        color #ffffff
        font-size 15px

        transition background-color 0.45s

        cursor pointer

        &:hover
            background-color $forecolor

        &:not(:first-child)
            margin-left 23.8px

        &.play, &.pause
            width 34.5px
            height 34.5px
            font-size 13.5px

        &.play
            padding-left 2.5px

        &.backward, &.forward
            width 30px
            height 30px
            font-size 12px
</style>
