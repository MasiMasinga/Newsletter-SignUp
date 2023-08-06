<template>
    <button :class="`text-white ${backgroundColor} ${width} hover:bg-primary rounded-md p-3`" @click="onClick">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        onClick: {
            type: Function,
            required: true,
            default: () => { }
        },
        backgroundColor: {
            type: String,
            default: 'bg-secondary'
        },
        width: {
            type: String,
            default: 'w-full'
        },
    }
}
</script>