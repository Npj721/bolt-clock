<template>
    <div class="clock-container">
      <div class="clock">
        <div class="hand hour" :style="hourStyle"></div>
        <div class="hand minute" :style="minuteStyle"></div>
        <div class="hand second" :style="secondStyle"></div>
        <div class="center-dot"></div>
      </div>
      <div class="digital-time">
        {{ formattedTime }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  
  const time = ref(new Date())
  
  const updateTime = () => {
    time.value = new Date()
  }
  
  onMounted(() => {
    const interval = setInterval(updateTime, 1000)
    onUnmounted(() => clearInterval(interval))
  })
  
  const formattedTime = computed(() => {
    return time.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  })
  
  const hourStyle = computed(() => ({
    transform: `rotate(${(time.value.getHours() % 12) * 30 + time.value.getMinutes() * 0.5}deg)`
  }))
  
  const minuteStyle = computed(() => ({
    transform: `rotate(${time.value.getMinutes() * 6}deg)`
  }))
  
  const secondStyle = computed(() => ({
    transform: `rotate(${time.value.getSeconds() * 6}deg)`
  }))
  </script>
  
  <style scoped>
  .clock-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
  }
  
  .clock {
    position: relative;
    width: 200px;
    height: 200px;
    border: 8px solid #333;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  
  .hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    background: #333;
  }
  
  .hour {
    width: 6px;
    height: 50px;
    background-color: #000;
  }
  
  .minute {
    width: 4px;
    height: 70px;
    background-color: #555;
  }
  
  .second {
    width: 2px;
    height: 90px;
    background-color: red;
  }
  
  .center-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .digital-time {
    font-size: 1.5rem;
    font-weight: bold;
  }
  </style>
  