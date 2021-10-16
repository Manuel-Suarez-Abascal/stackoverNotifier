<template>
  <div class="question_user pt-3 m-4">
    <div class="question_user_image mb-2">
      <a :href="user.link" target="_blank">
        <img
          :src="user.profile_image"
          alt="user profile image"
          data-test="question_user_image_value"
        />
      </a>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;
  width: auto;

  &_image {
    border-radius: 50%;
    border: 2px solid #000000;
    height: 4rem;
    overflow: hidden;
    width: 4rem;
    img {
      height: 100%;
      max-width: 100%;
      width: 100%;
    }
  }

  &_rep {
    color: #808080;
  }
}
</style>
