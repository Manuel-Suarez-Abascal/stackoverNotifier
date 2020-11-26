<template>
    <div>{{ displayInfo }}</div>
</template>

<script>
export default {
    name: 'BaseChip',
    data(){
        return {}
    },
    props: {
        displayInfo: {
            type: String,
            required: true,
            default: '0',
        }
    }
}
</script>

<style>

</style>