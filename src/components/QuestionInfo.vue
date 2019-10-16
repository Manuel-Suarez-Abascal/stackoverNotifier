<template>
  <div class="question container-fluid">
    <h1 class="my-3"
    >
    Last "<span class="question_tag">{{ tag }}</span>" Question Details
    </h1>
    <b-form
      class="my-4" 
      @submit.prevent="updateTag"
    >
      <b-form-input
        class="w-auto"
        placeholder="Enter a stackoverflow tag"
        type="text"
        v-model="newTag"
      >
      </b-form-input>
    </b-form>
    <div class="question_title my-2">
      <strong>Title: </strong> <span>{{ details.title }}</span>
    </div>
    <div class="question_status my-2">
      <strong>Question answered: </strong><span>{{ details.is_answered }}</span>
    </div>
    <div class="question_views my-2">
      <strong>Views: </strong><span>{{ details.view_count }}</span>
    </div>
    <div class="question_answers my-2">
      <strong>Answers Count: </strong><span>{{ details.answer_count }}</span>
    </div>
    <div class="question_link my-2">
      <strong>Check question: </strong>
      <a :href="details.link"
      :title="details.link"
      rel="noopener"
      target="_blank"
      >
        Here
      </a>
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
      tag: `jquery`,
      newTag: ''
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
      }, 10000);
    },
    updateTag() {
      this.tag = this.newTag
      this.getTag();
    },
  },
}
</script>

<style scoped lang="scss">
.question {
  &_tag {
    text-transform: capitalize;
  }
}
</style>
