<template>
 
  <div class="weather-container" id="weather-data">
  <!-- 天气数据将动态插入到这里 -->
  </div>
   
    
</template>
<style>
.weather-container {
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 38px;
  max-width: 1300px; /* 调整容器的最大宽度 */
  display: flex; /* 使用 flex 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%; /* 确保父容器有高度 */
  flex-wrap:nowrap; /* bu允许换行 */
  justify-content: space-between; /* 子元素之间留有间隔 */
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';  
}
.weather-item {
  margin-bottom: 5px;
  flex: 1 1 200px; /* 每个子元素的宽度 */
  margin-right: 45px; /* 子元素之间的间隔 */
}
.weather-item span {
  font-weight: bold;
  /* vertical-align: middle; */ 
}
.weather-icon {
  position: relative;
  top: 35px;
  left: 0;
  width: 48px; /* 调整图标大小 */
  height: 48px;
  margin-right: 10px; /* 图标和文字之间的间隔 */

}
</style>

<script setup>
async function fetchWeatherData() {
  const url = 'https://api.vvhan.com/api/weather?ipinfo&type=week';
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('获取天气数据失败:', error);
  }
}

function displayWeatherData(data) {
  const container = document.getElementById('weather-data');
  container.innerHTML = ''; // 清空容器

  // 天气图标映射
  const weatherIcons = {
    '晴': 'sunny.png',
    '多云': 'cloudy.png',
    '阴': 'overcast.png',
    '小雨': 'srain.png',
    '中雨': 'mrain.png',
    '大雨': 'Lrain.png',
    '暴雨': 'baorain.png',
    '雷阵雨': 'Thunderstorm.png',
    '雪': 'Snowflake.png',
    '雾': 'fog.png',
    // 添加更多天气类型和图标
  };

  // 检查 data.data 是否是一个数组
  if (Array.isArray(data.data)) {
    data.data.forEach(item => {
      const weatherItem = document.createElement('div');
      weatherItem.className = 'weather-item';
      

      // 获取天气图标
      const icon = weatherIcons[item.type] || 'default.png'; // 默认图标
      const iconPath = `src/assets/img/Icons/${icon}`; // 拼接路径


      weatherItem.innerHTML = `
        <img src="${iconPath}" alt="${item.type}" class="weather-icon">
        <span>${item.type}</span><br>
        <span>${item.low}~</span> ${item.high}<br>
      `;
      container.appendChild(weatherItem);
    });
  } else if (typeof data.data === 'object' && data.data !== null) {
    // 如果 data.data 是一个对象
    const weatherItem = document.createElement('div');
    weatherItem.className = 'weather-item';

    // 获取天气图标
    const icon = weatherIcons[data.data.type] || 'default.png'; // 默认图标
    const iconPath = `src/assets/img/Icons/${icon}`; // 拼接路径

    weatherItem.innerHTML = `
      <img src="${iconPath}" alt="${data.data.type}" class="weather-icon">
      <span>${data.data.type}</span><br>
      <span>${data.data.low}</span> ${data.data.high}<br>
    `;
    container.appendChild(weatherItem);
  } else {
    console.error('数据格式不正确:', data);
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

// 初始加载数据
fetchWeatherData();

// 调度下一次更新
scheduleNextUpdate();
  </script>