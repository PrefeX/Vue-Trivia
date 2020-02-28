<template>
  <div>
    <h1 class="title">Game Over!</h1>

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
  }
};
</script>

<style>
</style>