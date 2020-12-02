<template>
  <div class="pb-4 ml-5">
    <a
      :href="linkHref"
      :title="linkTitle"
      class="link"
      data-test="question_link"
      rel="noopener"
      target="_blank"
    >
      {{ linkMessage }}
      <span>&rarr;</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    linkHref: {
      type: String,
      required: true,
      default: ""
    },
    linkTitle: {
      type: String,
      required: false
    },
    linkMessage: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.link {
  background-color: transparent;
  color: #28a745;
  font-size: 1.2rem;
  font-weight: 900;
  text-decoration: none;
  & span {
    position: relative;
    left: 0;
  }
  &:hover {
    color: #237a37;
    cursor: pointer;
    transition: color 0.8s;
    & span {
      left: 5px;
      transition: all 0.4s ease-in-out;
    }
  }
}
</style>
