<template>
  <div>{{ questionUser }}</div>
</template>

<script>
export default {
  name: "QuestionUser",
  props: {
    questionUser: {
      type: Object,
      required: true,
    },
  },
};
</script>
