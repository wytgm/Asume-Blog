<template>
  <div>
  <div class="z-10 w-full h-full absolute top-0 pointer-events-none" style="border-width: 45px;border-color: blueviolet;">
    <svg id="StripeTop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="90%" height="90%" x="0" y="0" class="z-20" style="scale: 1.13;">
      <polygon id="StripeTop01" class="BK-6" points="1268.87 66 1236.87 66 1267.87 3 1298.87 3 1268.87 66"/>
      <polygon id="StripeTop02" class="BK-6" points="1324.15 66 1292.15 66 1323.15 3 1354.15 3 1324.15 66"/>
      <polygon id="StripeTop03" class="BK-6" points="1385.15 66 1353.15 66 1384.15 3 1415.15 3 1385.15 66"/>
      <polygon id="StripeTop04" class="BK-6" points="1445.19 66 1413.19 66 1444.19 3 1475.19 3 1445.19 66"/>
      <polygon id="StripeTop05" class="BK-6" points="1511.23 66 1479.23 66 1510.23 3 1541.23 3 1511.23 66"/>
      <polygon id="StripeTop06" class="BK-6" points="1578.23 66 1546.23 66 1577.23 3 1608.23 3 1578.23 66"/>
    </svg>
   
    <svg id="StripeBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1083" width="90%" height="90%" x="0" y="0" class="z-20 absolute -bottom-1 -left-5" style="scale: 1.1;transform: translateX(-145px);">
      <polygon id="StripeBottom1" class="BK-6" points="530.87 1083 498.87 1083 529.87 1020 560.87 1020 530.87 1083"/>
      <polygon id="StripeBottom2" class="BK-6" points="586.15 1083 554.15 1083 585.15 1020 616.15 1020 586.15 1083"/>
      <polygon id="StripeBottom3" class="BK-6" points="647.15 1083 615.15 1083 646.15 1020 677.15 1020 647.15 1083"/>
      <polygon id="StripeBottom4" class="BK-6" points="707.19 1083 675.19 1083 706.19 1020 737.19 1020 707.19 1083"/>
      <polygon id="StripeBottom5" class="BK-6" points="773.23 1083 741.23 1083 772.23 1020 803.23 1020 773.23 1083"/>
      <polygon id="StripeBottom6" class="BK-6" points="840.23 1083 808.23 1083 839.23 1020 870.23 1020 840.23 1083"/>
    </svg>
  </div>
  <div class="dropdown dropdown-left z-30 absolute right-0 top-0">
  <div tabindex="0" role="button" class="btn btn-ghost hover:btn-ghost" style="background-color: rgba(155, 155, 155, 0);">
    <div id="circleB1" class="circleB">
      <div id="circleT1" class="circleT" style="">
      <img  class=" w-full h-full object-cover relative" src="http://cdn.sonderwyt.top/Cover/avatar/02.webp" alt="">
    </div>
    </div>
  </div>
  <div
    tabindex="0"
    class="
    dropdown-content 
    avacardhome
    w-64  
    shadow"
    >
    <div class="card-body">
      <h3 class="card-title space-y-10">欢迎欢迎 &nbsp;&nbsp; (●ˇ∀ˇ●)</h3>
      <p>全网搜罗的美丽图片存放处 真的超好看！</p>
      <NuxtLink to="/" >
        <div class="btn w-full btn-outline outline-double btn-sm  bg-rose-400 hover:bg-sky-500">朕已阅 回去吧</div>
      </NuxtLink>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import {gsap} from 'gsap';
export default {
  name: "top",
  setup() {
    onMounted(() => {
      gsap.to(["#StripeTop01","#StripeTop02","#StripeTop03","#StripeTop04","#StripeTop05","#StripeTop06"], { opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      })
      gsap.to(["#StripeBottom1","#StripeBottom2","#StripeBottom3","#StripeBottom4","#StripeBottom5","#StripeBottom6",], { opacity: 0,
        duration: 1,
        delay:0.5,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.3,
          from: "end" // 从最后一个元素开始
        }
      })
      gsap.to(["#circleB1","#circleT1"],{
        opacity:0,
      })
      gsap.to(["#circleB1","#circleT1"],{
        opacity:1,
        duration:0.8
      })
      
    });
    },

};
</script>
<style >
.circleT{
  @apply z-30 rounded-full;
  height: 100px;
  width: 100px;
  position:relative;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  overflow: hidden;

}
.circleB{
  @apply z-20 rounded-full;
  height: 128px;
  width: 128px;
  position:relative;
  right: -20px;
  top: 0;
  --c: #b404ff;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 4%),
	            repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 4%),
	            linear-gradient(180deg,#232323,var(--c));
	background-blend-mode: color-dodge;
  border: 5px double black;

}
.avacardhome{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
  height: 345px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 66px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  position: absolute;
  top: -50%;
  right: 0%;
  border: 10px solid black;
  --c: #81c916;
	background: repeating-linear-gradient(45deg,var(--c),
              #000000,var(--c) 1%),
	            repeating-linear-gradient(-30deg,var(--c), 
              #3c3c3c, var(--c) 1%),
	            linear-gradient(0deg,#0c0c0c,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(3);
  color: #000000;
}
.BK-6{
  fill: aliceblue ;
}

</style>