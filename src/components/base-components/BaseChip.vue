<template>
  <div class="chip p-3 mb-4">
    <p class="chip-info">{{ displayInfo }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseChip",
  props: {
    displayInfo: {
      type: [String, Number, Boolean],
      required: true,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.chip {
  background: #343a40;
  border-radius: 50%;
  min-width: 60px;
}
</style>
