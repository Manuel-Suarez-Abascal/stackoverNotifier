<template>
    <label
        class="label"
        :data-test="this.labelMessage.toLowerCase()"
    >
        {{ labelMessage }}
    </label>
</template>


<script>
export default {
    name: 'BaseLabel',
    props: {
        labelMessage:  {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
.label {
    font-size: 1.2rem;
    font-weight: 900;
}
</style>