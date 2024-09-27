<template>
  <div class="w-full h-full overflow-hidden wrap cursorcus">
    <div id="pc" :class="['grid', 'grid-cols-5', 'grid-rows-5','gap-3', 'p-3', 'w-full', 'h-full', { hidden: isPhone }]">
      <NuxtLink class="col-start-1 col-end-6 item-center collectbg overflow-hidden" to="/Movie">  
        <span class="hover:text-sky-500" style="z-index:2">电子收藏柜</span>
        <div class="h-full w-full absolute" style="z-index: 1">
        <img id="herta" class="h-full absolute -top-4" style="scale: 1.6;" src="https://blog.jixiaob.cn/backup/hertakuru/img/hertaa1.gif"/>
        </div>
      </NuxtLink>
      <NuxtLink class="w-full h-full col-start-1 col-end-3 overflow-hidden" to="/chat">  
      <div class="chatbg col-start-1 col-end-3 item-center">
        说说空间
      </div>
      </NuxtLink>
      <div class="col-start-3 col-end-4 item-center">
        <Sakana class="relative -left-5 top-3 object-cover scale-[0.85] "/>
      </div>
      <div class="col-start-4 col-end-6 row-span-2 item-center">
        <Wechat class="z-20"/>
      </div>
      <div class="col-start-1 col-end-4 row-span-2 item-center">
        <Photo/>
      </div>
      <div class="bg-green-700 col-start-4 col-end-5 row-span-2 item-center">
        <RunningDay/>
      </div>
      <div class="bg-rose-700 col-start-5 col-end-6 row-span-2 item-center">旅行足迹</div>
      <div class="col-start-1 col-end-4 item-center ">
        <div class="grid grid-cols-4 gap-1 items-center justify-center">
          <img src="https://img.shields.io/badge/Nuxt-v3.4.2-brightgreen.svg"/>
          <img src="https://img.shields.io/badge/vite-v5.2.0-blue.svg"/>
          <img src="https://img.shields.io/badge/daisyui-v4.10.1-blueviolet.svg"/>
          <img src="https://img.shields.io/badge/tailwindcss-v3.4.3-royalblue.svg"/>
          <img src="https://img.shields.io/badge/gsap-v3.12.5-lime.svg"/>
          <img src="https://img.shields.io/badge/Pixi.js-v6.5.10-orange.svg"/>
          <img src="https://img.shields.io/badge/aplyer-v1.10.1-yellow.svg"/>
        </div>
      </div>
    </div>


    <!-- 手机端布局 -->
    <div id="phone" :class="['grid', 'grid-cols-1', 'w-full', 'h-full', 'overflow-auto', { hidden: !isPhone }]">
      <div class="grid grid-cols-3">
        <div class="bg-green-500 col-start-1 col-end-4 item-center">
          <NuxtLink class="col-start-1 col-end-6 item-center topcus overflow-hidden" to="/Collection">  
            <span class="hover:text-sky-500" style="z-index:2">电子收藏柜</span>
        </NuxtLink>
        </div>
        <div class="bg-blue-500 col-start-1 col-end-2 item-center">02</div>
        <div class="bg-yellow-500 col-start-2 col-end-4 item-center">03</div>
        <div class="bg-red-500 col-start-1 col-end-3 item-center">04</div>
        <div class="bg-green-700 col-start-3 col-end-4 item-center">05</div>
        <div class="bg-sky-700 col-start-1 col-end-4 item-center">06</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const isPhone = ref(false);

function checkScreenSize() {
  isPhone.value = window.innerWidth <= 964;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
   // 黑塔转圈圈
  // 获取父元素的宽度
  const parentElement = document.querySelector('.col-start-1.col-end-6');
  const parentWidth = parentElement.getBoundingClientRect().width;
  gsap.to("#herta", {
    x: parentWidth, 
    duration: 6, 
    ease: "none", 
    repeat: -1, 
    yoyo: true,
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.wrap{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
  font-size: 66px;
}
.hidden {
  display: none;
}
.item-center{
  @apply w-full h-full flex items-center justify-center text-white
}
.cursorcus{
  cursor: url('https://img.icons8.com/?size=36&id=lKAxelEWuaDu&format=png&color=000000'), auto;
}
/* #4EABC9 */
.collectbg{
  border-radius: 85px;
  border: 5px solid #112220;
  --c: #7f1899;
  background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
              repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 1%),
              linear-gradient(180deg,#2d2d2d,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(5);
  color: #000;
  box-shadow: 0px 0px 0px 5px white;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.chatbg{
  border-top-right-radius: 25px;
  border-bottom-left-radius: 65px;
  border: 5px solid #112220;
  --c: #65f423;
  background: repeating-linear-gradient(45deg,var(--c),#000,var(--c) 1.5%),
              repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 1.5%),
              linear-gradient(0deg,#121212db,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(5);
  box-shadow: 0px 0px 0px 5px white;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: #000;

}

</style>