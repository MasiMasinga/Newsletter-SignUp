<template>
    <div>
        <input
            :class="`rounded-md ${borderColor} ${borderWidth} ${borderRadius} ${padding} ${width} ${height} ${fontSize} ${fontWeight} ${textColor} ${textAlign} ${marginTop} ${marginBottom}`"
            :type="type" :placeholder="placeholder" :value="value" @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        onInput: {
            type: Function,
            required: true,
            default: () => { }
        },
        borderColor: {
            type: String,
            default: 'border-secondary'
        },
        borderWidth: {
            type: String,
            default: 'border-2'
        },
        borderRadius: {
            type: String,
            default: 'rounded-sm'
        },
        padding: {
            type: String,
            default: 'p-6'
        },
        width: {
            type: String,
            default: 'w-full'
        },
        height: {
            type: String,
            default: 'h-8'
        },
        marginTop: {
            type: String,
            default: 'mt-1'
        },
        marginBottom: {
            type: String,
            default: 'mb-1'
        },
    }
}
</script>