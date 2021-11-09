<template>
  <div class="question">
    <div class="question_card container">
      <BaseTag
        :class="['tag', 'p-5', 'pb-0', 'pl-0', 'ml-5']"
        :hasLabel="true"
        :tag-name="this.tag"
      />
      <BaseForm @handleInputForm="updateTag($event)" />
      <QuestionTitle :question="allQuestions[0]" />
      <div class="question_details p-5 pt-0 pb-0">
        <BaseChip
          :class="['p-5', 'pl-0']"
          :data-test="'question_status_value'"
          :display-info="allQuestions[0].is_answered"
          labelMessage="Answered"
        />
        <BaseChip
          :class="'p-5'"
          :data-test="'question_views_value'"
          :display-info="allQuestions[0].view_count"
          labelMessage="Views"
        />
        <BaseChip
          :class="'p-5'"
          :display-info="allQuestions[0].answer_count"
          labelMessage="Answers"
        />
        <BaseChip
          :class="'p-5'"
          :data-test="'question_score_value'"
          :display-info="allQuestions[0].score"
          labelMessage="Score"
        />
      </div>
      <BaseLink
        :link-href="allQuestions[0].link"
        :link-title="allQuestions[0].title"
        link-message="Go to answer the question"
      />

      <div class="question_tags ml-5">
        <span>Other tags:</span>
        <span
          v-for="questionTags in allQuestions[0].tags.slice(1, 5)"
          :key="questionTags"
        >
          <BaseTag :tag-name="questionTags" :isLabelVisible="false" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import BaseChip from "./base-components/BaseChip";
import BaseForm from "./base-components/BaseForm";
import BaseLink from "./base-components/BaseLink";
import BaseTag from "./base-components/BaseTag";
import QuestionTitle from "./QuestionTitle";
import axios from "axios";
import notificationAudio from "../assets/notification/notification-audio.mp3";

export default {
  name: "QuestionInfo",
  components: {
    BaseChip,
    BaseForm,
    BaseLink,
    BaseTag,
    QuestionTitle,
  },
  data() {
    return {
      lastQuestion: [],
      allQuestions: this.questions,
      tag: `javascript`,
      notificationMessage: null,
      notificationSound: new Audio(notificationAudio),
    };
  },
  props: {
    questions: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  methods: {
    notifySlack({ webhookUrl, text } = {}) {
      const jsonData = JSON.stringify({ text });
      axios.post(webhookUrl, jsonData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    },
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
        ask.then((permission) => {
          if (permission === "granted") {
            this.notificationMessage = new Notification(`Here there!`, {
              body: `A new question has been asked!`,
            });
            this.notificationSound.play();
            this.notifySlack({
              webhookUrl:
                "https://hooks.slack.com/services/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",
              text: `<!here> ${this.lastQuestion} Link: ${this.allQuestions[0].link}`,
            });
          }
        });
      }
    },
  },
  created() {
    this.notifyNewPostedQuestion();
    this.updateQuestion();
  },
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
  &_tags {
    display: flex;
  }
  @media only screen and (max-width: 600px) {
    &_card {
      width: 100%;
    }
  }
}
</style>
