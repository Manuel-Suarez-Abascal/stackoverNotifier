<template>
  <div class="question container-fluid d-flex ">
    <div class="question_card align-self-center col-12 col-md-8 border-gray p-4 mx-auto  shadow rounded">
      <div class="question_tag my-3">
        <span class="question_tag_parameter">Tag: </span>
        <span class="question_tag_value px-3 py-1 ml-2">{{ tag }}</span>
      </div>
      <b-form
        class="my-4" 
        @submit.prevent="updateTag"
      >
        <b-form-input
          class="w-auto"
          placeholder="Enter a stackoverflow tag..."
          type="text"
          v-model="newTag"
        >
        </b-form-input>
      </b-form>
      <div class="question_title bg-light d-inline-block p-3 rounded text-dark">
        <div class=" card-title">Question: </div>
        <h3 class="font-weight-bold">{{ details.title }}</h3>
      </div>
      <div class="row">
        <div class="question_status m-4">
          <div class="question_status_value bg-dark p-4 rounded-circle text-center">{{ details.is_answered }}</div>
          <div class="question_status_parameter mt-4 text-center">Answered</div>
        </div>
        <div class="question_views m-4">
          <div class="question_views_value bg-dark p-4 rounded-circle text-center">{{ details.view_count }}</div>
          <div class="question_views_parameter mt-4 text-center">Views</div>
        </div>
        <div class="question_answers m-4">
          <div class="question_answers_value bg-dark p-4 rounded-circle text-center">{{ details.answer_count }}</div>
          <div class="question_answers_parameter mt-4 text-center">Answers</div>
        </div>
      </div>
      <div class="question_link ml-1 my-3">
        <a 
          class="text-success"
          :href="details.link"
          :title="details.link"
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
      details: [],
      tag: `phaser`,
      newTag: '',
      notificationMessage: null
    }
  },
  mounted() {
    this.getTag()
  },
  methods: {
    getTag(){
      setInterval(() => {
        axios.get(`https://api.stackexchange.com//2.2/questions?order=desc&sort=creation&tagged=${this.tag}&site=stackoverflow`).then(response => {
          this.details = response.data.items[0]
        // console.log an error if get() method is unsuccessful
        }).catch(err => {
          console.log(err)
        })
      }, 70000);
    },
    updateTag() {
      this.tag = this.newTag
      this.getTag()
    },
    sendNotification() {
      if ('Notification' in window) {
        let ask = Notification.requestPermission()
        ask.then( permission => {
          if ( permission === 'granted') {
            this.notificationMessage = new Notification('Title', {
              body: 'Test message'
            })
          }
        })
      }
    }
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
