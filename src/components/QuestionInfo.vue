<template>
  <div class="question">
    <div class="question_card container">
      <BaseTag :tag-name="this.tag" />
      <BaseForm @handleInputForm="updateTag($event)" />
      <QuestionTitle :question-title="allQuestions[0].title" />
      <div class="question_details p-5 pt-0 pb-0">
        <div class="p-5 pl-0" data-test="question_status_value">
          <BaseChip :display-info="allQuestions[0].is_answered" />
          <BaseLabel labelMessage="Answered" />
        </div>
        <div class="p-5" data-test="question_views_value">
          <BaseChip :display-info="allQuestions[0].view_count" />
          <BaseLabel labelMessage="Views" />
        </div>
        <div class="p-5">
          <BaseChip :display-info="allQuestions[0].answer_count" />
          <BaseLabel labelMessage="Answers" />
        </div>
        <div class="p-5" data-test="question_score_value">
          <BaseChip :display-info="allQuestions[0].score" />
          <BaseLabel labelMessage="Score" />
        </div>
      </div>
      <BaseLink
        :link-href="allQuestions[0].link"
        :link-title="allQuestions[0].title"
        link-message="Go to answer the question"
      />
    </div>
  </div>
</template>

<script>
import BaseChip from "./base-components/BaseChip";
import BaseForm from "./base-components/BaseForm";
import BaseLabel from "./base-components/BaseLabel";
import BaseLink from "./base-components/BaseLink";
import BaseTag from "./base-components/BaseTag";
import QuestionTitle from "./QuestionTitle";

export default {
  name: "QuestionInfo",
  components: {
    BaseChip,
    BaseForm,
    BaseLabel,
    BaseLink,
    BaseTag,
    QuestionTitle
  },
  data() {
    return {
      lastQuestion: [],
      allQuestions: this.questions,
      tag: `javascript`,
      notificationMessage: null
    };
  },
  props: {
    questions: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  methods: {
    updateTag(formValue) {
      this.tag = formValue;
      this.notifyNewPostedQuestion();
    },
    updateQuestion() {
      setInterval(() => {
        this.notifyNewPostedQuestion();
      }, 61000);
    },
    async notifyNewPostedQuestion() {
      this.allQuestions = await this.questions(this.tag);

      if (this.lastQuestion !== this.allQuestions[0].title) {
        this.sendNotification();
        this.lastQuestion = this.allQuestions[0].title;
      }
    },
    sendNotification() {
      if ("Notification" in window) {
        let ask = Notification.requestPermission();
        ask.then(permission => {
          if (permission === "granted") {
            this.notificationMessage = new Notification(`Here there!`, {
              body: `A new question has been asked!`
            });
          }
        });
      }
    }
  },
  created() {
    this.notifyNewPostedQuestion();
    this.updateQuestion();
  }
};
</script>

<style scoped lang="scss">
.question {
  color: #fff;
  height: 100%;
  position: relative;
  &_card {
    background: #0f2027;
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
    border-radius: 1rem;
    bottom: 0;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    height: 85%;
    left: 0;
    margin: auto;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
  }
  &_details {
    display: flex;
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    &_card {
      width: 100%;
    }
  }
}
</style>
