<template>
  <div :class="this.classProps">
    <span class="tag_label mr-1" v-if="isLabelVisible">Current Tag:</span>
    <a
      class="tag_value px-3 py-1 ml-2"
      data-test="tag_value"
      :href="tagUrl"
      target="_blank"
    >
      {{ tagName }}
    </a>
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
    isLabelVisible: {
      type: Boolean,
      required: false,
      default: true,
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
  data() {
    return {
      tagUrl: `https://stackoverflow.com/questions/tagged/${this.tagName}`,
    };
  },
};
</script>

<style scoped lang="scss">
.tag {
  &_value {
    background: #808080;
    border-radius: 10px;
    color: #d8d8d8;
    text-align: center;
    text-decoration: none;
    &:hover {
      color: #959494;
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>
