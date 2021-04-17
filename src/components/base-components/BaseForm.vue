<template>
  <form class="py-3 ml-5" @submit.prevent="handleInput">
    <input
      class="input input_tag"
      data-test="question_input"
      placeholder="Enter a stackoverflow tag..."
      type="text"
      v-model="inputValue"
    />
  </form>
</template>

<script>
export default {
  name: "BaseForm",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleInput: function () {
      this.$emit("handleInputForm", this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>

<style scoped lang="scss">
.input_tag {
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  color: #495057;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 35%;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }
}
@media only screen and (max-width: 750px) {
  .input_tag {
    width: 50%;
  }
}
</style>
