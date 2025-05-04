import { createI18n } from 'vue-i18n';

const messages = {
  fr: {
    nav: {
      currentTime: 'Heure actuelle',
      practice: 'Exercice'
    },
    practice: {
      title: 'Réglez l\'horloge pour afficher cette heure :',
      yourAnswer: 'Votre réponse :',
      checkAnswer: 'Vérifier',
      correct: 'Correct ! Bien joué !',
      incorrect: 'Pas tout à fait. Essayez encore !'
    }
  },
  en: {
    nav: {
      currentTime: 'Current Time',
      practice: 'Practice'
    },
    practice: {
      title: 'Set the clock to match this time:',
      yourAnswer: 'Your answer:',
      checkAnswer: 'Check Answer',
      correct: 'Correct! Well done!',
      incorrect: 'Not quite right. Try again!'
    }
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages
});