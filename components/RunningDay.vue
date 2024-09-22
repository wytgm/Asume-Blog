<template>
  <div class="running-days-container">
    <h1 style="font-size: x-small;
    position: absolute;top: 5px;right: 5px;color: black;">网站已运行</h1>
    <div class="days">
      
      <span class="days-count">{{ days }} 天</span>
    </div>
    
  </div>
</template>

<style scoped>
.running-days-container {
  text-align: center;
  /* padding: 10px; */
  border-radius: 10px;
  /* background: repeating-conic-gradient(from 0deg at 60% 50%,#ff3eaf 0 6deg,#e3e628 0 12deg); */
  background-color: hsl(184, 43%, 37%);
	  background-image:repeating-linear-gradient(45deg,
	  hsla(0,0%,100%,.1),
	  hsla(0,0%,100%,.1) 15px,
	  transparent 0,
	  transparent 30px);
	  z-index: -1;
}


.days {
  /* margin-top: 25px; */
  font-size: 1.5em;
  font-weight: bold;
  color: #020202;
}

.days-count {
  /* margin-top: 25px; */
  font-size: 1.5em;
  color: #ffffff;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

const days = ref(0);

function calculateDays() {
  const startDate = new Date('2024-08-01'); // 设置网站的启动日期
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