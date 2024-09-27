<template>
  <div>
    <topcollect/>
    <video autoplay muted controls loop style="z-index: -1;width:100%;height:100%;position: absolute;top:0;left: 0;opacity: 0.85;overflow: hidden;transform: scaleX(1.1);">
      <source src="../assets/img/BG.mp4" type="video/mp4">
    </video>
    <div class="container mx-auto">
      
      <div class="bg1" >   
        <div style="z-index:2; 
          position:relative;
          top: -40px;left: -40px;
          height: 100vh;width: 110%;
          scale: 0.95;
          opacity: 0.75;
          overflow: hidden;">
          <img style="background-blend-mode:multiply" src="https://pic.imge.cc/2024/09/02/66d567d032152.png" alt="">
        </div>
      </div>
      <div class="bg2">
        <MeituPubuliu />
        
      </div>

      <div style="z-index: 6;
      width: 320px;height: 55px;
      position: absolute;
      top: 30px;left: 30px;
      background-color: aliceblue;
      border-radius: 45px;
      border-color: black;
      border-width: 5px;" >
      <div class="data">
      <p id="count" style="color: rgb(37, 37, 37);">正在计算中ing💤...</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script> 
import { onMounted, ref } from 'vue';
import meitus from '~/assets/json/meitu.json';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
import MeituPubuliu from '../components/MeituPubuliu.vue';

export default  {
  name:"Gamebeauty",
  components:{
    LazyImg,Waterfall,MeituPubuliu
  },
  setup() {
  const list = ref([]); // 使用 ref 初始化 list

  const onImageLoad = (event) => {
    console.log('Image loaded:', event.target.src);
  };

  const onImageError = (event) => {
    console.error('Image failed to load:', event.target.src);
  };

  onMounted(() => {
    // 初始化 list 数据
    list.value = meitus;
    console.log('Waterfall component mounted');

    // 输出 list 数据信息到控制台
    console.log('List data:', list.value);

    // 确保 list 数据已经传递给 Waterfall 组件
    if (list.value.length > 0) {
      console.log('Waterfall component should render images now.');
    } else {
      console.log('List is empty, no images to render.');
    }

    // 灯箱图片放大插件
    lightGallery(document.getElementById('gallery'), {
      selector: 'a',
      mode: 'lg-fade',
      speed: 1000,
      download: false,
      plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen],
    });

    // 计算json文件中的数据数量
    fetch('/src/json/meitu.json')
      .then(response => response.json())
      .then(data => {
        const count = data.length;
        document.getElementById('count').textContent = `༺ 共收集 ${count} 张美图 ༻`;
      })
      .catch(error => {
        console.error('发生错误：', error);
        document.getElementById('count').textContent = '加载数据时发生错误。';
      });
  });
},
}
</script>

<style>
body{
  /* background: url(http://cdn.sonderwyt.top/amuseblogsucai/BG1.webp); */
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.bg1{
  z-index: 1;
  width:1400px;height: 666px;
  background-color: rgb(255, 54, 191);
  position: absolute;
  left: 5%;top: 5.8%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;  
}
.bg2{
  z-index: 4;
  width:1320px;height: 580px;
  background: repeating-linear-gradient(80deg,
  #ffbb29 0 2px,
  #ffed65 3px 4px,
  #ffbb29 5px);
  position: absolute;
  left: 7%;top: 11.7%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
  overflow: auto;
  overflow-x: hidden;
}
.imgcus {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  -o-object-fit: cover;
  object-fit: cover;
  inset: 0px;
  scale: 1.2;
}
.card {
  width:100%; /* 确保卡片宽度适应父容器 */
  height:fit-content;
  font-family:"comic" ;
  overflow: hidden;
  border-width: 5px;
  padding: 0.25em;
  border-color: black;
}
.data{
  position: relative;
  top: 3%;
  right: 0;
  font-size:x-large;
  font-weight: 800;
  color: aliceblue;
  text-align: center;
}
</style>