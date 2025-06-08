import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
    state: () => ({
        selectedCategory: '',
        questions: [],
        currentQuestionIndex: 0,
        correctAnswers: 0,
        allQuestions: {
            History: [
                { question: 'When did World War II begin?', options: ['1918', '1941', '1939', '1945'], correct: '1939' },
                { question: 'Who was the first President of the United States?', options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'Theodore Roosevelt'], correct: 'George Washington' },
                { question: 'Which empire built the Colosseum?', options: ['Ottoman Empire', 'Roman Empire', 'British Empire', 'Mongol Empire'], correct: 'Roman Empire' },
                { question: 'In which year did the Berlin Wall fall?', options: ['1961', '1975', '1991', '1989'], correct: '1989' },
                { question: 'Who was the leader of Nazi Germany?', options: ['Adolf Hitler', 'Joseph Stalin', 'Winston Churchill', 'Franklin D. Roosevelt'], correct: 'Adolf Hitler' },
            ],
            Programming: [
                { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Hot Mail', 'How to Make Lasagna', 'None of the above'], correct: 'Hyper Text Markup Language' },
                { question: 'Which language runs in the browser?', options: ['C++', 'JavaScript', 'Python', 'Go'], correct: 'JavaScript' },
                { question: 'What is the correct syntax to print in Python?', options: ['print("Hello")', 'echo "Hello"', 'console.log("Hello")', 'printf("Hello")'], correct: 'print("Hello")' },
                { question: 'Which of these is a JavaScript framework?', options: ['Flask', 'Laravel', 'Django', 'React'], correct: 'React' },
                { question: 'What is the value of 2 + "2" in JavaScript?', options: ['undefined', '4', '22', 'NaN'], correct: '22' },
            ],
            Geography: [
                { question: 'What is the capital of France?', options: ['Paris', 'London', 'Madrid', 'Berlin'], correct: 'Paris' },
                { question: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Danube'], correct: 'Amazon' },
                { question: 'Which continent is Australia located in?', options: ['Austria', 'Asia', 'Australia', 'Africa'], correct: 'Australia' },
                { question: 'Which country has the largest population?', options: ['India', 'China', 'USA', 'Indonesia'], correct: 'China' },
                { question: 'Which ocean is the deepest?', options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Arctic Ocean'], correct: 'Pacific Ocean' },
            ],
        },
    }),
    actions: {
        startQuiz(category) {
            this.selectedCategory = category
            this.questions = this.allQuestions[category]
            this.currentQuestionIndex = 0
            this.correctAnswers = 0
        },
        answerQuestion(answer) {
            const currentQuestion = this.questions[this.currentQuestionIndex]
            if (answer === currentQuestion.correct) {
                this.correctAnswers++
            }
            this.currentQuestionIndex++
        },
        resetQuiz() {
            this.selectedCategory = ''
            this.questions = []
            this.currentQuestionIndex = 0
            this.correctAnswers = 0
        },
    },
})
