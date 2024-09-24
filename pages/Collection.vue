<template>
  <div class="whole">
    <div class="bottomrect">
      <video muted autoplay loop class="-z-1 absolute top-0 rounded-3xl">
        <source src="/BG.mp4" type="video/mp4">
      </video>
      <div class="flexcus">
        <div class="flex-item-left"></div>
        <div class="flex-item-right overflow-auto">
          <div class="grid grid-cols-3 gap-2  overflow-scroll overflow-x-hidden rounded-2xl">
            <div class="card flex flex-row" v-for="(animation, index) in animations" :key="index">
              <div class="flex w-1/2 h-full bg-rose-400 relative">
                <div class="imgcard">
                  <img class="imgcus" v-lazy="animation.poster" :alt="animation.title" />
                </div>
              </div>
              <div class="flex flex-col w-1/2 h-full relative items-center justify-center space-y-2 p-3">
                <span class="title">{{ animation.title }}</span>
                <div class="rating">
                  <input class="mask mask-star-2 star"  v-for="n in Math.floor(animation.rating)" :key="n" />
                  <input class="mask mask-star-2 star1" v-for="n in 5 - Math.floor(animation.rating)" :key="n" />
                </div>
                <button class="btn buttoncus underline decoration-wavy" @click="openModal(index)">观影感受</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <!-- 卡片按钮弹窗：对话框列表 -->
     <dialog id="myModal" class="modal">
      <div class="modal-box" v-if="currentAnimation">
        <h3 class="modaltext mt-2">{{ currentAnimation.title }} 观影感受!</h3>
        <div class="flex flex-row p-4 mt-2">
          <span class="flex w-1/2 rounded-lg overflow-hidden">
            <img :src="currentAnimation.poster" alt="">
          </span>
          <div class="flex flex-col w-1/2 ml-4 space-y-4 ">
            <div class="rating">
              <span style="font-weight: 900;">个人评分：</span>
              <input class="mask mask-star-2 star"  v-for="n in Math.floor(currentAnimation.rating)" :key="n" />
              <input class="mask mask-star-2 star1" v-for="n in 5 - Math.floor(currentAnimation.rating)" :key="n" />
            </div>
            <div><span style="font-weight: 900;">观影时间：</span>{{ currentAnimation.watchtime}}</div>
            <p>{{ currentAnimation.info }}</p>
            <div class="tag flex items-end justify-end">
                <span class="badge badgecus " v-for="tag in currentAnimation.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>

</template>

<script>
import { onMounted } from 'vue';
import animations from '~/assets/json/animation.json';

export default {
  name: "Animation",
  data() {
    return {
      animations: animations,
      currentAnimation: null // 初始化为 null
    };
  },
  methods: {
    openModal(index) {
      console.log('Opening modal for index:', index); // 调试信息
      if (Number.isInteger(index) && index >= 0 && index < this.animations.length) {
        this.currentAnimation = this.animations[index];
        const modal = document.getElementById('myModal');
        if (modal && modal.showModal) {
          modal.showModal();
        } else {
          console.error('showModal is not supported');
        }
      } else {
        console.error('Invalid index:', index);
      }
    },
    closeModal() {
      const modal = document.getElementById('myModal');
      if (modal && modal.close) {
        modal.close();
      }
      this.currentAnimation = null; // 重置 currentAnimation
    }
  }
};
</script>


<style>
.whole{
  @apply 
  container 
  mx-auto 
  w-full h-full  
  center;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.bottomrect{
  z-index: 1;
  @apply 
  w-full 
  relative 
  center 
  flex items-center justify-center
  overflow-hidden;
  height: 720px;
  /* background-color: #4eb3a2; */
  /* --c: #cd1ef9;
  background: repeating-linear-gradient(45deg,var(--c),#000,var(--c) 0.5%),
              repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 0.5%),
              linear-gradient(180deg,#2a2a2adb,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(1.1); */
  /* background-color: #9ff002;
  background-image:repeating-linear-gradient(45deg,
  hsla(0,0%,100%,.5),
  hsla(0,0%,100%,.5) 15px,
  transparent 0,
  transparent 30px);
  border-radius: 45px; */
}
.bottom1{
  @apply 
  absolute
  top-3
  right-0 ;
  width: 1100px;
  height:680px;
  border-radius: 45px;
}
.flexcus{
  @apply 
  flex flex-row flex-nowrap 
  w-full h-full 
  relative 
  rounded-3xl  
  p-6 space-x-3;
}
.flex-item-left{
  @apply
  flex w-80 h-full bg-rose-200 ;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 65px;
}
.flex-item-right{
  @apply
  flex w-full h-full p-4 bg-rose-400;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px; 
}
.card {
  display: flex;
position: relative;
width: 360px;
height: 285px;
/* background: #202020; */
border-radius: 20px;
overflow: hidden;
box-shadow: 0 15px 35px rgba(0, 0, 0, .1);
/* #202020 #EDFE65 */
background-color:  #4ec401;
background-image:repeating-linear-gradient(45deg,
hsla(0,0%,100%,.8),
hsla(0,0%,100%,.8) 15px,
transparent 0,
transparent 30px);
/* --c: #22ff00;
  background: repeating-linear-gradient(45deg,var(--c),#000,var(--c) 1.2%),
              repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 1.2%),
              linear-gradient(0deg,#2a2a2adb,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(1.1);  */
}
.imgcard{
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
.imgcus{
  width:100%;
  height: 100%;
  object-fit: cover;
  transform: translate(0px,25px);
  scale: 1.25;
}
.cardbody{
  z-index: 4;
  @apply  w-1/2 h-full;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 0px;right:0;
 
  background-color: rgba(170, 213, 251, 0);
  border-radius: 15px;
  text-align: center;
  line-height: 1.85rem;
  font-size:small;
}
.badgecus{
  margin: 6px; 
  /* background-color: #EEAF3A; */
  color:black;
  --c: #ff9b05;
	background: repeating-linear-gradient(45deg,var(--c),
              #000000,var(--c) 4%),
	            repeating-linear-gradient(-30deg,var(--c), 
              #3c3c3c, var(--c) 4%),
	            linear-gradient(0deg,#000000,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
  box-shadow: 0px 0px 0px 1px rgb(255, 255, 255,0.8);  
  border-width: 3px;
  border-color: #000;
  border-radius: 5px;
}
.rating {
  position: relative;
  scale: 1;
  padding: 0;
}
.star{
  background-color: darkorange;
}
.star1{
  background-color: darkorange;
  opacity: 0.3;
}
.buttoncus{
  color: #202020;
  font-size:larger;

  --c: #05ff76;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 3%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 3%),
	            linear-gradient(45deg,#202020,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 45px;
  position: relative;
  bottom: -15px;
  scale: 0.85;
}

.modaltext{
  font-size: 24px;
  text-align: center;
  line-height: 1.75rem ;
  font-weight: 600;
  color: #000000;
  --c: #05ff6d;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 3%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 3%),
	            linear-gradient(45deg,#202020,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 10px;
}
.data{
  z-index: 6;
  font-size: x-small;
  font-weight: 800;
  color: aliceblue;
  position: absolute;
  top: 7%;
  right: 24%;
}
.title{
  text-align: center;
  color: #000000;
  --c: #058fff;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 5%),
	            repeating-linear-gradient(-30deg,var(--c), #100f0f, var(--c) 5%),
	            linear-gradient(270deg,#202020,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(3);
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 25px;
  line-height: 1.8rem;
}
</style>