<template>
  <div class="question_title p-5 pt-0 pb-3 pl-0 ml-5">
    <QuestionUser :user="question.owner" />
    <h2
      class="pt-1"
      data-test="question_title_value"
      v-html="question.title"
    ></h2>
  </div>
</template>

<script>
import QuestionUser from "./QuestionUser.vue";

export default {
  name: "QuestionTitle",
  props: {
    question: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  components: {
    QuestionUser,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.question {
  &_title {
    background: #fff;
    border-radius: 10px;
    color: #343a40;
    display: flex;
    font-size: 1.3rem;
    font-weight: 900;
    max-width: 80%;
    h2 {
      margin-top: 50px;
      text-align: left;
      width: 100%;
    }
  }
  &_value {
    background: #808080;
    border-radius: 10px;
    color: rgb(216, 216, 216);
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .question {
      &_title {
        display: flex;
        flex-direction: column;
        h2 {
          margin-top: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
