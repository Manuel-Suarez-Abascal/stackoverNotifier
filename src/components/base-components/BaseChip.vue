<template>
  <div :class="[this.classProps]">
    <div class="chip label p-3 mb-4">
      <p class="chip-info">{{ displayInfo }}</p>
    </div>
    <label class="label" :data-test="this.labelMessage.toLowerCase()">
      {{ labelMessage }}
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseChip",
  props: {
    classProps: {
      type: String,
      required: false,
      default: "",
    },
    displayInfo: {
      type: [String, Number, Boolean],
      required: true,
      default: "",
    },
    labelMessage: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.chip {
  background: #343a40;
  border-radius: 50%;
  min-width: 60px;
}
.label {
  font-size: 1.2rem;
  font-weight: 900;
}
</style>
