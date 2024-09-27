<template>
  <div class="container mx-auto w-full h-full blur-background">
    <!-- 总网格布局 -->
    <div class="grid grid-cols-3 gap-6 gridposi">
      <!-- 左列最低部 bg-rose-500 -->
      <div class="col-span-1" >
          <!-- divIDcard信息 bg-green-400-->
          <div class="grid grid-rows-2 grid-cols-2 gap-3 w-full h-75 p-3">
            <!-- 头像名称等级 -->
            <div class="col-start-1 col-end-3 
            outline-double rounded-xl 
            flex items-center justify-center 
            h-36">
              <div>
                <img class="avatar-left"
                    src="http://cdn.sonderwyt.top/Cover/avatar/02.webp" 
                    alt="">
              </div>
              <div class="name-left">
              Sonder🚀
              <hr class="-mt-3">
              <div class="w-49 relative top-1 text-justify modal-textfont">
                <p style="font-size:12px;">
                我们重拾起没落乐章的残篇，得以再现辉煌时刻的盛宴；
                我们解密未知科技的核心，得以窥见文明的智慧结晶是多么耀眼。
                学者们将自己化作一叶扁舟，渡过浩瀚银河的尽头。
                而在彼岸静默的答案，则是我们前进的最好回应。
                </p>
              </div>
            </div>
              
            </div>
            <!-- 黑塔空间站的角色收集  -->
            <div class="col-start-1 col-end-2 
            outline-dashed
            rounded-xl
            flex items-center justify-center 
            mt-3">
            粉丝<br>
            15474647
            </div>
            <!-- 计算json中共有多少数据（动态） -->
            <div class="col-start-2 col-end-3
                  outline-dashed
                  rounded-xl
                  flex items-center justify-center 
                  mt-3">
                  
            </div>
          </div>
          <div class="grid-flow-row gap-0 
                h-12 
                outline-dotted rounded-3xl
                flex items-center 
                justify-center 
                mt-2 ml-0.5">
          还没想好要放什么
          </div>
          <div class="grid-flow-row gap-0 
                h-12 
                outline-dotted rounded-3xl
                flex items-center 
                justify-center 
                mt-3 ml-0.5"
          > 还没想好要放什么</div>
          <div class="grid-flow-row gap-0 
          h-12 
                outline-dotted rounded-3xl
                flex items-center 
                justify-center 
                mt-3 ml-0.5"
          >此网页参考”罗浮杂俎“的页面布局</div>
        </div>
      <!-- 右列最低部 -->
      <div class="col-span-2
      p-3 
      overflow-scroller
      overflow-x-hidden
      custom-scrollbar rounded-xl" >
        <!-- 信息卡片 -->
       <button @click="openModal(index)" class="btn btn-ghost hover:outline-0 hover:btn-ghost relative left-0 mt-0 p-0" v-for="(Herta, index) in Hertas" :key="index">
        <div
        :id="Herta.id" 
        class="grid-flow-row h-36 w-173 rounded-xl 
              outline-6 outline-double 
              flex items-center justify-center
              mt-1 bg-slate-700">
        <!-- 左侧图片 -->
        <div class="w-63 h-full relative left-0 overflow-hidden">
          <img class="w-full h-full object-cover rounded-xl" :src="Herta.poster" alt="">
        </div>
        <!-- 右侧文本 -->
        <div class="w-110 h-full overflow-hidden">
          <!-- 头像标题 flex-row-reverse-->
          <div class="flex p-2">
            <img style="width: 30px;height: 30px;border-radius: 50%;" src="http://cdn.sonderwyt.top/Cover/avatar/02.webp" alt="">
            <div class="relative m-1 text-xs">{{Herta.name}}</div>
          </div>
          <!-- 文本标题 -->
          <div class="relative p-1 -top-2 text-left text-lg text-lime-500 ml-3 text-ellipsis">{{Herta.title}}</div>
          <!-- 文本简介 bg-yellow-900-->
          <div class="flex relative ml-4 w-100 -top-3">
            <span  class="relative  text-left text-sm text-clip">
              <span class="text-emerald-400 underline decoration-wavy leading-6">
                {{Herta.idtag}}
              </span>
              &nbsp; {{Herta.intro}}
            </span>
          </div>
          <!-- 图标评论 -->
          <div class="flex relative ml-3 "> 
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path class="hover:fill-red-500" fill="#ffffff" fill-rule="evenodd" d="M3.788 1.314c.988.02 2.085.49 3.214 1.56c1.127-1.067 2.223-1.536 3.21-1.555c1.04-.02 1.918.46 2.536 1.18c1.218 1.42 1.47 3.85-.058 5.377l-.001.001l-4.247 4.208c-.81.802-2.07.802-2.88 0L1.316 7.877C-.217 6.343.032 3.913 1.25 2.491c.617-.72 1.495-1.2 2.537-1.178Z" clip-rule="evenodd"/></svg>
                <p class="ml-2">{{Herta.love}}</p>
                <svg class="ml-6" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="hover:fill-sky-500" fill="#ffffff" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm8-11V9h-2v2zm-4 0V9h-2v2zm-4 0V9H7v2z"/></svg>
                <p class="ml-2">{{Herta.coment}}</p>
          </div>
         
        </div>
        </div>
      </button>

      <!-- You can open the modal using ID.showModal() method -->
      <dialog id="myModal" class="modal">
        <div class="modal-box w-10/12 max-w-6xl h-148 max-h-3xl shadow-lg" style="background-color: rgba(125, 255, 255, 0);">
          <div class="flex w-full h-full border-10 border-rose-500 border-double rounded-lg">
            <div class="w-5/12 h-full  bg-red-600 overflow-hidden rounded-xl">
              <div class="carousel carousel-vertical w-full h-full object-cover relative left-0 ">
                <div class="carousel-item overflow-hidden" v-for="(img, index) in currentHertas.hertaimg" :key="index" >
                  <img class="w-full object-cover overflow-hidden" :src="img" />
                </div>
              </div>
            </div>
            <!-- underline decoration-dotted font-bold-->
              <div class="w-7/12 h-ful overflow-scroll rounded-xl modal-textbg overflow-x-hidden">
                <article class="
                antialiased
                modal-textfont
                p-8
                text-justify 
                text-black 
                space-y-10
                
                " 
                v-html="currentHertas.content"> </article>
                <a class="underline decoration-pink-500" :href="currentHertas.link">任务详情链接</a>
              </div>
            

          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      </div>
    </div>
    
    
  </div>
</template>


<script>
import { onMounted } from 'vue';
import Hertas from '/src/json/Herta.json';
export default {
  name:"Herta",
  data() {
    return {
      Hertas: Hertas,
      currentHertas:{}
    };
  },
  setup() {
    
  },
  methods:{
    // 打开弹窗的函数
    openModal(index) {
      // Validate the index
      if (Number.isInteger(index) && index >= 0 && index < this.Hertas.length) {
        this.currentHertas = this.Hertas[index];
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
    }
  },
  
}
</script>

<style>
/* @import url('https://static.zeoseven.com/cn/7/main/result.css'); */
@import url('https://static.zeoseven.com/cn/6/main/result.css');
body{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
  color: #b8deff;
  background-image: url("https://webstatic.mihoyo.com/upload/op-public/2022/05/07/cad3482de507e5136a0f4d54703c5854_7927756332864927413.png");
  background-position: center center; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #d55252; 
}
.blur-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px); /* 背景模糊效果 */
 
}
.gridposi{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%,-50%);
  height:700px;
  width: 1360px;
  overflow: hidden;
}
.avatar-left{
  width: 100px;
  height: 100px;
  border-radius: 50%; 
  position: relative;
  top: -5px;left: -20px;
}
.name-left{
  font-size: 45px;
  color: aliceblue;
  position: relative;
  top: -12px;
}
.modal-textbg{
  --c: #2686d0;
  background: repeating-linear-gradient(45deg,var(--c),#8887872c,var(--c) 0.3%),
              repeating-linear-gradient(-30deg,var(--c), #1e1e1e, var(--c) 0.3%),
              linear-gradient(0deg,#191919db,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(5);
  mix-blend-mode: soft-light;
}
@font-face {
  font-family: "XuandongKaishu";
  src: url(https://static.zeoseven.com/cn/6/main/result.css);
}
.modal-textfont{
  font-family: "XuandongKaishu";
}
.space-y-10 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.8rem* calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2.5rem* var(--tw-space-y-reverse));
}
</style>