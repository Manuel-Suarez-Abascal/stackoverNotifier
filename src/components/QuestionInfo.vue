<template>
  <div class="question">
    <div class="question_card container">
      <div class="question_tag p-5 pb-0 pl-0 ml-5">
        <span class="question_tag_parameter">Tag:</span>
        <span 
          class="question_tag_value px-3 py-1 ml-2"
          data-test="question_tag_value">
            {{ tag }}
        </span>
      </div>
      <form 
        class="p-5 py-3"
        @submit.prevent="updateTag"
      >
        <input
          class="question_tag_value_input"
          data-test="question_tag_value_input"
          placeholder="Enter a stackoverflow tag..."
          type="text"
          v-model="newTag"
        />
      </form>
      <div class="question_title p-5 pt-0 pb-3 pl-0 ml-5">
        <div
          class="pt-3 m-3"
          data-test="question_title"
        >
          Question: 
        </div>
        <h2
          class="pt-1 m-3"
          data-test="question_title_value"
        > 
          {{ details.title }}
        </h2>
      </div>
      <div class="question-wrapper_details p-5 pt-0 pb-0">
        <div class="question_status p-5 pl-0">
          <BaseChip :display-info="details.is_answered" />
          <div 
            class="question_param_status"
            data-test="question_answered"
          >
            Answered
          </div>
        </div>
        <div class="question_views p-5" data-test="question_views_value">
          <BaseChip :display-info="details.view_count" />
          <div 
            class="question_param_views"
            data-test="question_views"
          >
            Views
          </div>
        </div>
        <div class="question_answers p-5">
          <BaseChip :display-info="details.answer_count" />
          <div 
            class="question_param_answers"
            data-test="question_answers"
          >
            Answers
          </div>
        </div>
        <div class="question_score p-5" data-test="question_score_value">
          <BaseChip :display-info="details.score" />
          <div 
            class="question_param_score"
            data-test="question_score"
          >
            Score
          </div>
        </div>
      </div>
      <div class="pl-5 pb-4">
        <a 
          :href="details.link"
          :title="details.link"
          class="question_link"
          data-test="question_link"
          rel="noopener"
          target="_blank"
        >
          Go to answer question 
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BaseChip from './BaseChip';

export default {
  name: 'QuestionInfo',
  components: {
    BaseChip,
  },
  data(){
    return {
      lastQuestion: [],
      details: [],
      tag: `javascript`,
      newTag: '',
      notificationMessage: null
    }
  },
  mounted(){
    this.getTag()
  },
  methods: {
    updateTag() {
      this.tag = this.newTag
      this.getQuestion()
      this.newTag = ''
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
  &_title {
    background: #fff;
    border-radius: 10px;
    color: #343a40;
    font-size: 1.3rem;
    font-weight: 900;
    max-width: 80%;
  }
  &_card {
    background: #0F2027;  
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
    border-radius: 1rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  }
  &_tag {
    &_value {
      background: #808080;
      border-radius: 10px;
      color: rgb(216, 216, 216);
      text-align: center;
      &_input {
        background-clip: padding-box;
        background-color: #fff;
        border-radius: .25rem;
        border: 1px solid #ced4da;
        color: #495057;
        font-size: 1rem;
        line-height: 1.5;
        padding: .375rem .75rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        width: 35%;
          &:focus {
          color: #495057;
          background-color: #fff;
          border-color: #80bdff;
          box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
          outline: 0;
        }
      }
    }
  }
  &_link {
    background-color: transparent;
    color: #28a745;
    font-size: 1.2rem;
    font-weight: 900;
    text-decoration: none;
    &:hover {
      color: #2d9445;
      
      transition: color 0.8s;
    }
    & span {
      position: relative;
      left: 0;
    }
    &:hover {
      cursor: pointer;
      & span {
        left: 5px;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  &_param {
    &_status, &_views, &_answers, &_score {
      font-size: 1.2rem;
      font-weight: 900;
    }
  }
  &-wrapper {
    &_details {
      display: flex;
      text-align: center;
    }
  }
}
</style>
