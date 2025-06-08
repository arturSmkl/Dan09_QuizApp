<script setup>
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quizStore'

const router = useRouter()
const quizStore = useQuizStore()

const categories = Object.keys(quizStore.allQuestions)

function start(category) {
  quizStore.startQuiz(category)
  router.push(`/quiz/${category}`)
}
</script>

<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center">
    <h1>Choose a category</h1>
    <v-btn
        v-for="category in categories"
        :key="category"
        class="ma-2"
        @click="start(category)"
        color="primary"
        prepend-icon="mdi-play-circle"
    >
      {{ category }}
    </v-btn>
  </v-container>
</template>

