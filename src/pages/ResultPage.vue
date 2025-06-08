<script setup>
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quizStore'

const router = useRouter()
const quizStore = useQuizStore()

function restart() {
  quizStore.resetQuiz()
  router.push('/')
}
</script>

<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center text-center">
    <h1>Result</h1>
    <h2>
      {{ quizStore.correctAnswers }} / {{ quizStore.questions.length }}
    </h2>
    <v-btn color="primary" @click="restart" prepend-icon="mdi-restart">
      Try again
    </v-btn>
  </v-container>
</template>
