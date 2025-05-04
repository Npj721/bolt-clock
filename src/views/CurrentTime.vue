<template>
  <div class="current-time-view">
    <AnalogClock :time="time" :styles="clockStyles" />
    <DigitalClock :time="time" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AnalogClock from '../components/AnalogClock.vue';
import DigitalClock from '../components/DigitalClock.vue';

const time = ref(new Date());

const clockStyles = {
  border: '8px solid #333',
  background: 'white',
  hands: {
    hour: { backgroundColor: '#000', width: '6px' },
    minute: { backgroundColor: '#555', width: '4px' },
    second: { backgroundColor: 'red', width: '2px' }
  },
  centerDot: { backgroundColor: '#000' }
};

const updateTime = () => {
  time.value = new Date();
};

onMounted(() => {
  const interval = setInterval(updateTime, 1000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
.current-time-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>