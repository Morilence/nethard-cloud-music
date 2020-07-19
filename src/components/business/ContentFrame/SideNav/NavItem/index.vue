<template>
    <li :class="['nav-item', active ? 'active' : '']">
        <font-awesome-icon class="icon" v-if="faicon != false" :icon="faicon" />
        <span class="title">{{ title }}</span>
    </li>
</template>

<script>
export default {
    name: "NavItem",
    props: {
        faicon: {
            type: [Boolean, String, Array],
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        active: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="stylus" scoped>
.nav-item
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    padding 8.9px 15.5px
    border-left 2px solid transparent

    font-size 12px
    color $regular_fontcolor

    &.active
        border-left 2px solid $ornacolor
        background-color $side_nav_active_bgcolor
        color $stress_fontcolor

    .icon
        font-size 14.5px
        margin-right 10.5px
</style>
