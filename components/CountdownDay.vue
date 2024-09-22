<template>
  <div class="countdown-container">
    <div id="countdowns"></div>
  </div>
</template>

<style scoped>
.countdown-container {
    font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
    --c: #4ee7ff89;
	/* 1%更改的是圆点的大小，两个#000是调节渐变的那个*/
	background: repeating-linear-gradient(45deg,var(--c),#000,var(--c) 1.5%),
	            repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 1.5%),
	            linear-gradient(45deg,#242424,var(--c));
	/* 设置背景图片与元素背景颜色的混合模式 */
	background-blend-mode: color-dodge;
    text-align: center;
    color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.countdown-item {
    margin: 10px 0;
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';

const countdownsElement = ref(null);

// 设置多个目标时间
const targetDates = [
    { name: '新年', date: new Date('2025-01-01T00:00:00').getTime() },
    { name: '春节', date: new Date('2025-02-10T00:00:00').getTime() },
    { name: '国庆', date: new Date('2024-10-01T00:00:00').getTime() }
];

function updateCountdowns() {
    countdownsElement.value.innerHTML = ''; // 清空之前的倒数日

    targetDates.forEach(target => {
        const now = new Date().getTime();
        const timeLeft = target.date - now;

        if (timeLeft <= 0) {
            countdownsElement.value.innerHTML += `<div class="countdown-item">${target.name} 已到！</div>`;
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            countdownsElement.value.innerHTML += `<div class="countdown-item">距离 ${target.name} 还有 ${days} 天</div>`;
        }
    });
}

onMounted(() => {
    countdownsElement.value = document.getElementById('countdowns');
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
});
</script>