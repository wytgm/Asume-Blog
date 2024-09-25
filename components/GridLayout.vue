<template>
  <div class="w-full h-full overflow-hidden wrap cursorcus">
    <div id="pc" :class="['grid', 'grid-cols-5', 'grid-rows-5','gap-3', 'p-3', 'w-full', 'h-full', { hidden: isPhone }]">
       <NuxtLink class="col-start-1 col-end-6 item-center collectbg overflow-hidden" to="/Movie">  
            <span class="hover:text-sky-500" style="z-index:2">电子收藏柜</span>
            <div class="h-full w-full absolute" style="z-index: 1">
             <img id="herta" class="h-full absolute -top-4" style="scale: 1.6;" src="https://blog.jixiaob.cn/backup/hertakuru/img/hertaa1.gif"/>
            </div>
            <!-- <div class="w-full h-full absolute">
              <img class="w-full h-full z-10" src="https://c-ssl.duitang.com/uploads/blog/202307/02/z2SpMznBCxYQGn7.png" alt="">
            </div> -->
        </NuxtLink>
   
      <div class="chatbg col-start-1 col-end-3 item-center">
        说说空间
      </div>
      <div class="bg-sky-500 col-start-3 col-end-4 item-center">03</div>
      <div class="bg-orange-500 col-start-4 col-end-6 row-span-2 item-center">04</div>
      <div class="bg-green-700 col-start-1 col-end-4 row-span-2 item-center">05</div>
      <div class="bg-blue-700 col-start-4 col-end-5 row-span-2 item-center">06</div>
      <div class="bg-rose-700 col-start-5 col-end-6 row-span-2 item-center">07</div>
      <div class="bg-rose-700 col-start-1 col-end-4 item-center">08</div>
    </div>

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
  border: 10px solid #112220;
  --c: #7f1899;
  background: repeating-linear-gradient(45deg,var(--c),#d6d6d6,var(--c) 1%),
              repeating-linear-gradient(-30deg,var(--c), #d6d6d6, var(--c) 1%),
              linear-gradient(180deg,#000000db,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(5);
  color: #000;
  box-shadow: 0px 0px 0px 5px white;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.chatbg{
  border-top-right-radius: 65px;
  border-bottom-left-radius: 65px;
  border: 10px solid #112220;
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

}

</style>