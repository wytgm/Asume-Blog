<template>
  <div>
  <topmeitu/>
  <div class="container mx-auto w-full h-full absolute center bg-slate-700"> 
    <div class="grid grid-cols-3 gap-6 p-4 relative center w-full h-[700px] -mt-6 ml-6">
      <!-- 左列最低部 bg-rose-500 -->
      <div class="col-span-1" >
          <!-- divIDcard信息 bg-green-400-->
          <div class="grid grid-rows-2 grid-cols-2 gap-3 w-full h-75 p-3 relative" >
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
              <div class="w-44 -relative top-1 text-justify modal-textfont">
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
          > 还没想好要放什么</div>
          <div class="grid-flow-row gap-0 
          h-12 
                outline-dotted rounded-3xl
                flex items-center 
                justify-center 
                mt-3 ml-0.5"
          >此网页参考”罗浮杂俎“的页面布局</div>
      </div>
      <!-- 右侧 -->
      <div class="col-span-2 p-3 flex flex-col-reverse w-full relative gap-6 overflow-x-hidden overflow-scroll">
      <div role="button" 
      @click="openModal(herta)"
      class="flex w-11/12 h-full border-4 items-center justify-center ml-4" 
      v-for="herta in hertas" :key="herta._path">
        <div class="w-2/3 h-full relative left-0 bg-sky-950">
          <div class="flex p-2 ">
            <img class="w-12 h-12 rounded-full" v-lazy="herta.avatar" alt="">
            <div class="relative m-1 text-xs">{{herta.name}}</div>
          </div>
          <!-- 文本标题 -->
          <div class="relative p-1 -top-2 text-left text-lg text-lime-500 ml-3">{{herta.subtitle}}</div>
           <!-- 文本简介 bg-yellow-900-->
           <div class="flex relative ml-4 w-100 -top-3">
            <span  class="relative  text-left text-sm text-clip">
              <span class="text-emerald-400 underline decoration-wavy leading-6">
                {{herta.idtag}}
              </span>
              &nbsp; {{herta.intro}}
            </span>
          </div>
           <!-- 图标评论 -->
           <div class="flex relative ml-3 "> 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path class="hover:fill-red-500" fill="#ffffff" fill-rule="evenodd" d="M3.788 1.314c.988.02 2.085.49 3.214 1.56c1.127-1.067 2.223-1.536 3.21-1.555c1.04-.02 1.918.46 2.536 1.18c1.218 1.42 1.47 3.85-.058 5.377l-.001.001l-4.247 4.208c-.81.802-2.07.802-2.88 0L1.316 7.877C-.217 6.343.032 3.913 1.25 2.491c.617-.72 1.495-1.2 2.537-1.178Z" clip-rule="evenodd"/></svg>
              <p class="ml-2">{{herta.love}}</p>
              <svg class="ml-6" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path class="hover:fill-sky-500" fill="#ffffff" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm8-11V9h-2v2zm-4 0V9h-2v2zm-4 0V9H7v2z"/></svg>
              <p class="ml-2">{{herta.comment}}</p>
          </div>
        </div>
        <div class="w-1/3 h-full relative object-cover">
          <img class="w-full h-full relative object-cover" :src="herta.poster" alt="">
        </div>
      </div>
    </div>
    <!-- 模态框 -->
    <dialog id="myModal" class="modal">
      <div class="modal-box w-8/12 max-w-6xl">
        <div class="flex w-full h-full border-10 border-double rounded-lg">
          <!-- 图片部分 -->
          <div class="w-[490px] h-[650px] overflow-hidden rounded-xl" v-if="selectedHerta && selectedHerta.images">
            <div class="carousel carousel-vertical w-full h-full object-cover" >
              <div  class="carousel-item h-full object-cover" v-for="(image, index) in selectedHerta.images" :key="index">
               <a :href="image"> 
                <img class=" w-full h-full object-cover relative" :src="image" />
               </a>
              </div>
            </div>
          </div>
          <!-- 文字部分 -->
         
          <div class="w-full h-[650px] overflow-scroll overflow-x-hidden p-10 text-justify -mt-5" v-if="selectedHerta">
            <div role="alert" class="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          <span>右侧图片可以向下滑动浏览哦~</span>
          </div>
            <ContentDoc class="mt-3" :path="selectedHerta._path" />
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

<script setup>
import { ref } from 'vue';
import topmeitu from '~/components/topmeitu.vue';

const modal = ref(null);
const selectedHerta = ref(null);

const { data: hertas } = await useAsyncData('hertas', async () => {
  return await queryContent('herta').find();
});

const openModal = (herta) => {
  selectedHerta.value = herta;
  const modal = document.getElementById('myModal');
  if (modal && modal.showModal) {
    modal.showModal();
  } else {
    console.error('showModal is not supported');
  }
};

// const closeModal = () => {
//   selectedHerta.value = null;    
// };

onMounted(() => {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    lightGallery(gallery, {
      download: false, // 禁用下载按钮
      share: false,   // 禁用分享按钮
      // 其他配置选项...
    });
  }
});


</script>

<style scoped>
@import url('https://static.zeoseven.com/cn/6/main/result.css');
@font-face {
  font-family: "XuandongKaishu";
  src: url(https://static.zeoseven.com/cn/6/main/result.css);
}
.modal-textfont{
  font-family: "XuandongKaishu";
}
.container{
  font-family:XuandongKaishu   ;
}
.center{ 
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
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










/* 确保 Markdown 内容的样式正确 */
.modal :deep(h1),
.modal :deep(h2),
.modal :deep(h3),
.modal :deep(h4),
.modal :deep(h5),
.modal :deep(h6) {
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.modal :deep(p) {
  margin-bottom: 1em;
}

.modal :deep(ul),
.modal :deep(ol) {
  margin-left: 1.5em;
  margin-bottom: 1em;
}

.modal :deep(pre) {
  background-color: #f4f4f4;
  padding: 1em;
  overflow-x: auto;
}

.modal :deep(code) {
  background-color: #f4f4f4;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}
</style>