<template>
  <div class="clock" :style="clockStyle">
    <div class="hand hour" :style="[hourStyle, handStyles.hour]"></div>
    <div class="hand minute" :style="[minuteStyle, handStyles.minute]"></div>
    <div class="hand second" :style="[secondStyle, handStyles.second]"></div>
    <div class="center-dot" :style="centerDotStyle"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  time: {
    type: Date,
    required: true
  },
  size: {
    type: Number,
    default: 200
  },
  styles: {
    type: Object,
    default: () => ({
      border: '8px solid #333',
      background: 'white',
      hands: {
        hour: { backgroundColor: '#000', width: '6px' },
        minute: { backgroundColor: '#555', width: '4px' },
        second: { backgroundColor: 'red', width: '2px' }
      },
      centerDot: { backgroundColor: '#000' }
    })
  }
});

const clockStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  border: props.styles.border,
  background: props.styles.background
}));

const handStyles = computed(() => props.styles.hands);

const centerDotStyle = computed(() => props.styles.centerDot);

const hourStyle = computed(() => ({
  transform: `rotate(${(props.time.getHours() % 12) * 30 + props.time.getMinutes() * 0.5}deg)`
}));

const minuteStyle = computed(() => ({
  transform: `rotate(${props.time.getMinutes() * 6}deg)`
}));

const secondStyle = computed(() => ({
  transform: `rotate(${props.time.getSeconds() * 6}deg)`
}));
</script>

<style scoped>
.clock {
  position: relative;
  border-radius: 50%;
}

.hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
}

.hour {
  height: 25%;
}

.minute {
  height: 35%;
}

.second {
  height: 45%;
}

.center-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>