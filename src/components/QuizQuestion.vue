<template>
  <div>
    <div class="container">
      <h3 class="title">Category:</h3>
      <div v-html="questionObject.category"></div>

      <h3 class="title">Question:</h3>
      <div v-html="questionObject.question"></div>

      <h3 class="title">Answers:</h3>
      <div class="columns">
        <div
          v-for="answer in answerList"
          v-bind:key="answer"
          v-on:click="selectAnswer"
          class="column notification is-info"
          v-html="answer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizQuestion",
  props: {
    questionObject: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      answerList: [],
      correctAnswer: false,
      selectedAnswer: null
    };
  },
  methods: {
    randomInt: function(min, max) {
      // Creates a random int value between a min and max
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    selectAnswer: function(event) {
      this.selectedAnswer = event.target.textContent;
      this.correctAnswer =
        this.selectedAnswer === this.questionObject.correct_answer;
      this.$emit("answer", this.selectedAnswer);
    }
  },
  beforeUpdate() {
    this.answerList = [];
    let tmpList = [];

    // Populate a temp-list with all answers
    tmpList.push(this.questionObject.correct_answer);
    this.questionObject.incorrect_answers.forEach(answer => {
      tmpList.push(answer);
    });

    // Randomize the answer list
    while (tmpList.length > 0) {
      let i = this.randomInt(0, tmpList.length - 1);
      this.answerList.push(tmpList[i]);
      tmpList.splice(i, 1);
    }
  }
};
</script>

<style>
</style>