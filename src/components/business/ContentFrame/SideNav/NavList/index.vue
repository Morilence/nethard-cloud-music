<template>
    <div class="nav-list">
        <label class="label">{{ label }}</label>
        <ul class="list">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavList",
    props: {
        label: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="stylus" scoped>
.nav-list
    display flex
    flex-direction column
    justify-content flex-start
    align-items flex-start

    margin-bottom 7.9px

    user-select none

    .label
        padding 9.7px 10px

        font-size 11.8px
        color $placeholder_fontcolor

    .list
        width 100%
</style>
