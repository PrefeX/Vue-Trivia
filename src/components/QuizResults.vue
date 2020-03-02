<template>
  <div>
    <section class="section">
    <h1 class="title">Game Over!</h1>
    <h3 class="subtitle">Final score: {{this.score}} / {{this.selectedAnswers.length*10}}</h3>
    </section>

    <section class="section" v-for="n in this.selectedAnswers.length" v-bind:key="n">
      <h1 class="title">Question {{n}}:</h1>
      <p v-html="questionObject[n-1].question"></p>
      <br />

      <h3 class="subtitle">Correct Answer:</h3>
      <p v-html="questionObject[n-1].correct_answer"></p>
      <br />

      <h3 class="subtitle">Your Answer:</h3>
      <p v-html="selectedAnswers[n-1]"></p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    questionObject: {
      required: true,
      type: Array
    },
    selectedAnswers: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      score: 0
    };
  },
  created() {
    for (let index = 0; index < this.selectedAnswers.length; index++) {
      if (
        this.questionObject[index].correct_answer ===
        this.selectedAnswers[index]
      ) {
        this.score += 10;
      }
    }
  }
};
</script>

<style>
</style>