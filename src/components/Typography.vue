<template>
    <h1 :class="`${fontSize} ${fontWeight} ${textColor} ${textAlign} ${marginLeft} ${marginTop} ${marginBottom}`">
        {{ text }}
    </h1>
</template>

<script>
export default {
    name: 'Typography',
    props: {
        text: {
            type: String,
            required: true
        },
        fontSize: {
            type: String,
            default: 'text-2xl'
        },
        fontWeight: {
            type: String,
            default: 'font-bold'
        },
        textColor: {
            type: String,
            default: 'text-secondary'
        },
        textAlign: {
            type: String,
            default: 'text-center'
        },
        marginTop: {
            type: String,
            default: 'mt-0'
        },
        marginBottom: {
            type: String,
            default: 'mb-0'
        },
        marginLeft: {
            type: String,
            default: 'ml-0'
        },
        marginRight: {
            type: String,
            default: 'mr-0'
        },
    }
}
</script>