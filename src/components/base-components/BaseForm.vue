<template>
    <form
        class="p-5 py-3"
        @submit.prevent="handleInput"
    >
        <input
            class="input"
            data-test="question_input"
            placeholder="Enter a stackoverflow tag..."
            type="text"
            v-model="inputValue"
        />
    </form>
</template>

<script>
export default {
    name: 'BaseForm',
    data(){
        return {
            inputValue: ''
        }
    },
    methods: {
        handleInput: function() {
            this.$emit('handleInputForm', this.inputValue);
        }
    }
}
</script>


<style scoped lang="scss">
input {
    background-clip: padding-box;
    background-color: #fff;
    border-radius: .25rem;
    border: 1px solid #ced4da;
    color: #495057;
    font-size: 1rem;
    line-height: 1.5;
    padding: .375rem .75rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 35%;
      &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
      outline: 0;
    }
}
</style>