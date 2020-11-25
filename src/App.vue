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
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
