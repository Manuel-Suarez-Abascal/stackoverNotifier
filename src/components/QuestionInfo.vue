<template>
  <div class="question">
    <div class="question_card container">
      <BaseTag :tag-name="this.tag" />
      <BaseForm @handleInputForm="updateTag($event)" />
      <QuestionTitle :question-title="details.title" />
      <div class="question_details p-5 pt-0 pb-0">
        <div class="p-5 pl-0" data-test="question_status_value">
          <BaseChip :display-info="details.is_answered" />
          <div
            class="question_param_status"
            data-test="question_answered"
          >
            Answered
          </div>
        </div>
        <div class="p-5" data-test="question_views_value">
          <BaseChip :display-info="details.view_count" />
          <div
            class="question_param_views"
            data-test="question_views"
          >
            Views
          </div>
        </div>
        <div class="p-5">
          <BaseChip :display-info="details.answer_count" />
          <div 
            class="question_param_answers"
            data-test="question_answers"
          >
            Answers
          </div>
        </div>
        <div class="p-5" data-test="question_score_value">
          <BaseChip :display-info="details.score" />
          <div 
            class="question_param_score"
            data-test="question_score"
          >
            Score
          </div>
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
import axios from 'axios'
import BaseChip from './BaseChip';
import BaseLink from './BaseLink';
import BaseForm from './BaseForm'
import BaseTag from './BaseTag';
import QuestionTitle from './QuestionTitle';

export default {
  name: 'QuestionInfo',
  components: {
    BaseChip,
    BaseLink,
    BaseForm,
    BaseTag,
    QuestionTitle,
  },
  data(){
    return {
      lastQuestion: [],
      details: [],
      tag: `javascript`,
      notificationMessage: null
    }
  },
  mounted(){
    this.getTag()
  },
  methods: {
    updateTag(formValue) { 
      this.tag = formValue
      this.getQuestion()
    },
    getTag(){
      setInterval(() => {
        this.getQuestion()
      }, 61000);
    },
    getQuestion(){
      axios.get(`https://api.stackexchange.com//2.2/questions?order=desc&sort=creation&tagged=${this.tag}&site=stackoverflow&key=sRtlAYT6ufs8EkbTzH3hlQ((`).then(response => {
        this.details = response.data.items[0]
        if(this.lastQuestion !== this.details.title){
          this.sendNotification()
          this.lastQuestion = this.details.title
        }
      }).catch(err => {
        console.log(err)
      })
    },
    sendNotification() {
      if ('Notification' in window) {
        let ask = Notification.requestPermission()
        ask.then( permission => {
          if ( permission === 'granted') {
            this.notificationMessage = new Notification(`Here there!`, {
              body: `A new question has been asked!`
            })
          }
        })
      }
    }
  },
  created(){
    this.getQuestion()
  },
}
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
    background: #0F2027;  
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
    border-radius: 1rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  }
  
  &_param {
    &_status, &_views, &_answers, &_score {
      font-size: 1.2rem;
      font-weight: 900;
    }
  }
  &_details {
    display: flex;
    text-align: center;
  }
}
</style>
