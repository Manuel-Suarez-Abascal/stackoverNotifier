<template>
  <div class="question_title p-5 pt-0 pb-3 pl-0 ml-5">
    <div class="question_title_label pt-3 m-3" data-test="question_title">
      Question:
    </div>
    <h2
      class="pt-1 m-3"
      data-test="question_title_value"
      v-html="questionTitle"
    ></h2>
  </div>
</template>

<script>
export default {
  name: "QuestionTitle",
  data() {
    return {};
  },
  props: {
    questionTitle: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.question {
  &_title {
    background: #fff;
    border-radius: 10px;
    color: #343a40;
    font-size: 1.3rem;
    font-weight: 900;
    max-width: 80%;
  }
  &_value {
    background: #808080;
    border-radius: 10px;
    color: rgb(216, 216, 216);
    text-align: center;
  }
}
</style>
