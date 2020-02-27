<template>
  <div>
    <quiz-question
      v-show="curQuestion < questions.length"
      v-bind:questionObject="questions[curQuestion]"
      v-on:answer="checkAnswer"
    ></quiz-question>

    <quiz-results
      v-show="curQuestion >= questions.length"
      v-bind:questionObject="questions"
      v-bind:selectedAnswers="selectedAnswers"
    ></quiz-results>
  </div>
</template>

<script>
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import axios from "axios";

export default {
  name: "GamePlay",
  components: {
    QuizQuestion,
    QuizResults
  },
  data() {
    return {
      questions: [],
      selectedAnswers: [],
      curQuestion: 0,
      correctAnswers: 0,
      showAnswer: false
    };
  },
  methods: {
    checkAnswer(val) {
      this.selectedAnswers.push(val);

      if (val === this.questions[this.curQuestion].correct_answer) {
        this.correctAnswers++;
      }
      this.curQuestion++;
    }
  },
  created() {
    axios.get("https://opentdb.com/api.php?amount=10").then(response => {
      this.questions = response.data.results;
    });
  }
};
</script>

<style>
</style>