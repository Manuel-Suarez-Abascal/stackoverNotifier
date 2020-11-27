<template>
  <div class="question">
    <div class="question_card container">
      <BaseTag :tag-name="this.tag" />
      <BaseForm @handleInputForm="updateTag($event)" />
      <QuestionTitle :question-title="details.title" />
      <div class="question_details p-5 pt-0 pb-0">
        <div class="p-5 pl-0" data-test="question_status_value">
          <BaseChip :display-info="details.is_answered" />
          <BaseLabel labelMessage="Answered" />
        </div>
        <div class="p-5" data-test="question_views_value">
          <BaseChip :display-info="details.view_count" />
          <BaseLabel labelMessage="Views" />
        </div>
        <div class="p-5">
          <BaseChip :display-info="details.answer_count" />
          <BaseLabel labelMessage="Answers" />
        </div>
        <div class="p-5" data-test="question_score_value">
          <BaseChip :display-info="details.score" />
          <BaseLabel labelMessage="Score" />
        </div>
      </div>
      <BaseLink
        :link-href="details.link"
        :link-title="details.title"
        link-message="Go to answer the question"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      details: [],
      tag: `javascript`,
      notificationMessage: null
    };
  },
  mounted() {
    this.getTag();
  },
  methods: {
    updateTag(formValue) {
      this.tag = formValue;
      this.getQuestion();
    },
    getTag() {
      setInterval(() => {
        this.getQuestion();
      }, 61000);
    },
    getQuestion() {
      axios
        .get(
          `https://api.stackexchange.com//2.2/questions?order=desc&sort=creation&tagged=${this.tag}&site=stackoverflow&key=sRtlAYT6ufs8EkbTzH3hlQ((`
        )
        .then(response => {
          this.details = response.data.items[0];
          if (this.lastQuestion !== this.details.title) {
            this.sendNotification();
            this.lastQuestion = this.details.title;
          }
        })
        .catch(err => {
          console.log(err);
        });
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
    this.getQuestion();
  }
};
</script>

<style scoped lang="scss">
.question {
  -ms-transform: translateY(-50%);
  color: #fff;
  margin: 0;
  position: absolute;
  right: 25%;
  top: 50%;
  transform: translateY(-50%);
  &_card {
    background: #0f2027;
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  &_details {
    display: flex;
    text-align: center;
  }
}
</style>
