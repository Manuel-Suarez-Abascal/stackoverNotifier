<template>
    <div class="tag p-5 pb-0 pl-0 ml-5">
        <span class="tag_label">Tag:</span>
        <span 
            class="tag_value px-3 py-1 ml-2"
            data-test="tag_value">
            {{ tagName }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'BaseTag',
    props: {
        tagName: {
            type: String,
            required: true,
            default: 'Default'
        }
    }
}
</script>

<style scoped lang="scss">
.tag {
    &_value {
      background: #808080;
      border-radius: 10px;
      color: rgb(216, 216, 216);
      text-align: center;
    }
  }
</style>