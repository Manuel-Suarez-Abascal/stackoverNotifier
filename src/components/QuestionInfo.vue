<template>
  <div class="question">
    <div class="question_card">
      <div class="question_tag">
        <span class="question_tag_parameter">Tag:</span>
        <span 
          class="question_tag_value"
          data-test="question_tag_value">
            {{ tag }}
        </span>
      </div>
      <form
        class="my-4" 
        @submit.prevent="updateTag"
      >
        <input
          class="w-50"
          data-test="question_tag_value_input"
          placeholder="Enter a stackoverflow tag..."
          type="text"
          v-model="newTag"
        />
      </form>
      <div class="question_title">
        <div 
          class="card-title"
          data-test="question_title"
        >
          Question: 
        </div>
        <h3 
          class="font-weight-bold"
          data-test="question_title_value"
        > 
          {{ details.title }}
        </h3>
      </div>
      <div class="row">
        <div class="question_status">
          <div 
            class="question_status_value"
            data-test="question_status_value"
          >
            {{ details.is_answered }}
          </div>
          <div 
            class="question_status_parameter mt-4 text-center"
            data-test="question_answered"
          >
            Answered
          </div>
        </div>
        <div class="question_views">
          <div 
            class="question_views_value"
            data-test="question_views_value"
          >
            {{ details.view_count }}
          </div>
          <div 
            class="question_views_parameter mt-4 text-center"
            data-test="question_views"
          >
            Views
          </div>
        </div>
        <div class="question_answers m-4">
          <div class="question_answers_value">{{ details.answer_count }}</div>
          <div 
            class="question_answers_parameter"
            data-test="question_answers"
          >
            Answers
          </div>
        </div>
        <div class="question_score m-4">
          <div 
            class="question_score_value"
            data-test="question_score_value"
          >
            {{ details.score }}
          </div>
          <div 
            class="question_score_parameter"
            data-test="question_score"
          >
            Score
          </div>
        </div>
      </div>
      <div class="question_link">
        <a 
          :href="details.link"
          :title="details.link"
          class="text-success"
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

export default {
  name: 'QuestionInfo',
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
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 
  height: 100%;
  color: #fff;
  &_card {
    background: #0F2027;  
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
  }
  &_tag {
    &_value {
      background: #808080;
      color: rgb(216, 216, 216);
    }
  }
  &_link {
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
}
</style>
