<template>
  <div class="running-days-container">
    <div class="flex w-full h-full relative items-center justify-center">
      <div class="flex w-full h-full items-center justify-center">
        <p class="text-sm">网站已运行</p>
        <span class="days-count">{{ days }} 天</span>
      </div>
    </div>
    <!-- <p>网站已运行</p>
    <div class="days">

      <span class="days-count">{{ days }} 天</span>
    </div>
     -->
  </div>
</template>

<style scoped>
.running-days-container {
  @apply w-full h-full;
  text-align: center;
}


.days {
  @apply w-full h-full absolute object-cover;
}

.days-count {
  @apply text-sm
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

const days = ref(0);

function calculateDays() {
  const startDate = new Date('2024-09-01'); // 设置网站的启动日期
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  days.value = diffDays;
}

onMounted(() => {
  calculateDays();
  setInterval(calculateDays, 1000 * 60 * 60 * 24); // 每天更新一次
});
</script>