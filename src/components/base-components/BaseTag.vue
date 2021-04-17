<template>
  <div :class="this.classProps">
    <span v-if="this.hasLabel">Tag:</span>
    <span class="tag_value px-3 py-1 ml-2" data-test="tag_value">
      {{ tagName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseTag",
  props: {
    classProps: {
      type: String,
      required: false,
      default: "",
    },
    hasLabel: {
      type: Boolean,
      required: true,
      default: true
    },
    tagLabel: {
      type: String,
      required: false,
      defaul: "",
    },
    tagName: {
      type: String,
      required: true,
      default: "Default",
    },
  },
};
</script>

<style scoped lang="scss">
.tag_value {
  background: #808080;
  border-radius: 10px;
  color: rgb(216, 216, 216);
  text-align: center;
}
</style>
