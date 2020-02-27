<template>
  <div>
    GAME OVER
    <section v-for="n in this.length" v-bind:key="n">
        {{n}}
      <h3>Question:</h3>
      <p>{{questionObject[n].question}}</p>
      <h3>Your answer:</h3>
      <p>{{selectedAnswers[n]}}</p>
      <h3>Correct answer:</h3>
      <p>{{questionObject[n].correct_answer}}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    questionObject: {
      required: true,
      type: Object
    },
    selectedAnswers: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      length: 0
    };
  },
  beforeUpdate() {
    this.length = this.questionObject.length;
  }
};
</script>

<style>
</style>