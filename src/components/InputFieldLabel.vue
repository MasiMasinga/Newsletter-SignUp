<template>
    <label :class="`${textColor} ${fontSize} ${fontWeight} ${textAlign} ${marginTop} ${marginBottom}`">
        {{ label }}
    </label>
</template>

<script>
export default {
    name: 'InputFieldLabel',
    props: {
        label: {
            type: String,
            required: true
        },
        fontSize: {
            type: String,
            default: 'text-base'
        },
        fontWeight: {
            type: String,
            default: 'font-normal'
        },
        textColor: {
            type: String,
            default: 'text-black'
        },
        textAlign: {
            type: String,
            default: 'text-left'
        },
        marginTop: {
            type: String,
            default: 'mt-0'
        },
        marginBottom: {
            type: String,
            default: 'mb-0'
        },
    }
}
</script>