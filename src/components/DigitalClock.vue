<template>
  <div class="digital-time" :style="styles">
    {{ formattedTime }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  time: {
    type: Date,
    required: true
  },
  styles: {
    type: Object,
    default: () => ({
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#000'
    })
  }
});

const formattedTime = computed(() => {
  return props.time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
});
</script>

<style scoped>
.digital-time {
  font-family: sans-serif;
}
</style>