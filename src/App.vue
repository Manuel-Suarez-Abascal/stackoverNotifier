<template>
  <div id="app">
    <QuestionInfo />
  </div>
</template>

<script>
import QuestionInfo from './components/QuestionInfo.vue'

export default {
  name: 'app',
  components: {
    QuestionInfo
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>
