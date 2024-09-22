<template>
  <div class="weather-container">
    <div v-for="item in weatherData" :key="item.type" class="weather-item">
      <img :src="getIconPath(item.type)" :alt="item.type" class="weather-icon">
      <span>{{ item.type }}</span><br>
      <span>{{ item.low }}~</span> {{ item.high }}<br>
    </div>
  </div>
</template>

<style>
.weather-container {
  padding: 10px;
  border-radius: 38px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: smaller;
}
.weather-item {
  margin-bottom: 5px;
  flex: 1 1 200px;
  margin-right: 45px;
}
.weather-item span {
  font-weight: bold;
}
.weather-icon {
  position: relative;
  top: 28px;
  left: 0;
  width: 48px;
  height: 48px;
  margin-right: 10px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

const weatherData = ref([]);

const weatherIcons = {
  '晴': 'http://example.com/01.png',
  '多云': 'http://example.com/02.png',
  '阴': 'http://example.com/03.png',
  '小雨': 'http://example.com/04.png',
  '中雨': 'http://example.com/05.png',
  '大雨': 'http://example.com/06.png',
  '暴雨': 'http://example.com/07.png',
  '雷阵雨': 'http://example.com/08.png',
  '雪': 'http://example.com/09.png',
  '雾': 'http://example.com/10.png',
  // 添加更多天气类型和图标
};

function getIconPath(type) {
  return weatherIcons[type] || 'http://example.com/default.png';
}

async function fetchWeatherData() {
  const url = 'https://api.vvhan.com/api/weather?ipinfo&type=week';
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (Array.isArray(data.data)) {
      weatherData.value = data.data;
    } else if (typeof data.data === 'object' && data.data !== null) {
      weatherData.value = [data.data];
    } else {
      console.error('数据格式不正确:', data);
    }
  } catch (error) {
    console.error('获取天气数据失败:', error);
  }
}

function scheduleNextUpdate() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(6, 0, 0, 0); // 设置为第二天早上6:00

  const timeUntilNextUpdate = tomorrow - now;

  setTimeout(() => {
    fetchWeatherData(); // 第一次更新
    setInterval(fetchWeatherData, 24 * 60 * 60 * 1000); // 每天早上6:00更新一次
  }, timeUntilNextUpdate);
}

onMounted(() => {
  fetchWeatherData();
  scheduleNextUpdate();
});
</script>