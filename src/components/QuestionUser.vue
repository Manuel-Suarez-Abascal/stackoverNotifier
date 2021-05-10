<template>
  <div class="question_user pt-3 m-3">
    <div class="question_user_image mb-2">
      <img
        :src="user.profile_image"
        data-test="question_user_image_value"
        alt="user profile image"
      />
    </div>
    <div class="question_user_name mb-1" data-test="question_user_name_value">
      {{ user.display_name }}
    </div>
    <div class="question_user_rep" data-test="question_user_rep_value">
      Rep: {{ user.reputation }}
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionUser",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.question_user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: inline-block;
  }

  &_image {
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    text-align: center;
    overflow: hidden;
    border: 2px solid black;
    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>
