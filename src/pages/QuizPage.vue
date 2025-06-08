<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quizStore'

const router = useRouter()
const quizStore = useQuizStore()

const answered = ref(false)
const selectedAnswer = ref('')

const currentQuestion = computed(() =>
    quizStore.questions[quizStore.currentQuestionIndex]
)

const progress = computed(() => {
  const total = quizStore.questions.length
  const current = quizStore.currentQuestionIndex
  return (current / total) * 100
})

// When currentQuestion becomes null/undefined => auto go to result
watch(currentQuestion, (newValue) => {
  if (!newValue) {
    goToResult()
  }
})

function selectAnswer(option) {
  selectedAnswer.value = option
  answered.value = true

  if (option === currentQuestion.value.correct) {
    quizStore.correctAnswers++
  }
}

function getButtonColor(option) {
  if (!answered.value) return 'secondary'

  if (option === currentQuestion.value.correct) {
    return 'success' // green
  }

  if (option === selectedAnswer.value) {
    return 'error' // red
  }

  return 'secondary' // default gray
}

function nextQuestion() {
  quizStore.currentQuestionIndex++
  answered.value = false
  selectedAnswer.value = ''
}

function goToResult() {
  router.push('/result')
}
</script>

<template>
  <v-container class="fill-height d-flex flex-column align-center" >
    <!-- Progress Bar -->
    <v-progress-linear
        style="max-width: 480px"
        :model-value="progress"
        color="primary"
        rounded
        height="8"
        class="mb-6"
    ></v-progress-linear>

    <div class="d-flex flex-column align-center" >
      <h2 class="mb-6">{{ currentQuestion.question }}</h2>
      <v-btn
          v-for="option in currentQuestion.options"
          :key="option"
          class="ma-1"
          :color="getButtonColor(option)"
          :disabled="answered"
          @click="selectAnswer(option)"
          block
      >
        {{ option }}
      </v-btn>

      <v-btn
          v-if="answered"
          class="mt-6"
          color="primary"
          @click="nextQuestion"
          prepend-icon="mdi-arrow-right"
      >
        Next
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.v-container {
  margin-top: 35vh;
}
</style>
