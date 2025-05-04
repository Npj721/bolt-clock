<template>
  <div class="practice-view">
    <div class="target-time">
      <h2>Set the clock to match this time:</h2>
      <div class="digital-target">{{ formatTargetTime }}</div>
    </div>
    
    <div class="interactive-clock">
      <h2>Your answer:</h2>
      <div class="clock-controls">
        <button @click="adjustHour(-1)">-1h</button>
        <button @click="adjustHour(1)">+1h</button>
        <button @click="adjustMinute(-1)">-1m</button>
        <button @click="adjustMinute(1)">+1m</button>
      </div>
      <AnalogClock :time="userTime" :styles="practiceClockStyles" />
      <button class="check-button" @click="checkAnswer">Check Answer</button>
      <p v-if="feedback" :class="['feedback', feedbackType]">{{ feedback }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AnalogClock from '../components/AnalogClock.vue';

const targetTime = ref(new Date());
const userTime = ref(new Date());
const feedback = ref('');
const feedbackType = ref('');

// Format the target time as HH:mm
const formatTargetTime = computed(() => {
  const hours = targetTime.value.getHours().toString().padStart(2, '0');
  const minutes = targetTime.value.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
});

const practiceClockStyles = {
  border: '8px solid #4CAF50',
  background: 'white',
  hands: {
    hour: { backgroundColor: '#2196F3', width: '6px' },
    minute: { backgroundColor: '#FF9800', width: '4px' },
    second: { backgroundColor: 'transparent', width: '0px' }
  },
  centerDot: { backgroundColor: '#333' }
};

// Generate a new random time
const generateNewTime = () => {
  const newTime = new Date();
  newTime.setHours(Math.floor(Math.random() * 12));
  newTime.setMinutes(Math.floor(Math.random() * 60));
  newTime.setSeconds(0);
  targetTime.value = newTime;
  
  // Reset user time to midnight
  userTime.value = new Date();
  userTime.value.setHours(0);
  userTime.value.setMinutes(0);
  userTime.value.setSeconds(0);
  
  // Reset feedback
  feedback.value = '';
};

const adjustHour = (amount) => {
  const newTime = new Date(userTime.value);
  newTime.setHours(newTime.getHours() + amount);
  userTime.value = newTime;
};

const adjustMinute = (amount) => {
  const newTime = new Date(userTime.value);
  newTime.setMinutes(newTime.getMinutes() + amount);
  userTime.value = newTime;
};

const checkAnswer = () => {
  const targetH = targetTime.value.getHours() % 12;
  const targetM = targetTime.value.getMinutes();
  const userH = userTime.value.getHours() % 12;
  const userM = userTime.value.getMinutes();

  if (targetH === userH && targetM === userM) {
    feedback.value = 'Correct! Well done!';
    feedbackType.value = 'success';
    // Generate new time after a short delay
    setTimeout(generateNewTime, 2000);
  } else {
    feedback.value = 'Not quite right. Try again!';
    feedbackType.value = 'error';
  }
};

// Generate initial time when component is mounted
generateNewTime();
</script>

<style scoped>
.practice-view {
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: start;
  padding: 2rem;
}

.target-time, .interactive-clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.digital-target {
  font-size: 3rem;
  font-weight: bold;
  font-family: monospace;
  padding: 1rem 2rem;
  background-color: #333;
  color: #4CAF50;
  border-radius: 8px;
  margin: 1rem 0;
}

.clock-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.check-button {
  margin-top: 1rem;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
}

.feedback {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.feedback.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.feedback.error {
  background-color: #f2dede;
  color: #a94442;
}
</style>