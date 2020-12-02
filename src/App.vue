<template>
  <div id="app">
    <QuestionInfo />
  </div>
</template>

<script>
import QuestionInfo from "./components/QuestionInfo.vue";

export default {
  name: "app",
  components: {
    QuestionInfo
  }
};
</script>

<style lang="scss">
@import "./styles/layout-utilities.css";

* {
  box-sizing: border-box;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
}
#app {
  height: 100vh;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
}
</style>
