<template>
  <top/>
  <div class="container mx-auto">
    <div class="bg1"></div>
    <div class="bg2">
    <div id="staril" class="grid grid-cols-3 gridcus">
     <!-- 卡片 -->
     <div class="card"  v-for="(gacha, index) in gachas" :key="index">
      <div class="version" ></div>
      <!-- 卡片图片部分 -->
      <!-- <div class="imgcard">
          <img class="imgcus" :src="gacha.photo" :alt="gacha.photo" v-lazy="gacha.photo">
          <video autoplay muted controls loop style="scale: 1.25;">
            <source :src="gacha.video" type="video/mp4">
          </video>
      </div> -->
      <div class="imgcard">
        <template v-if="gacha.video">
          <video autoplay muted controls loop style="scale: 1.25;">
            <source :src="gacha.video" type="video/mp4">
          </video>
        </template>
        <template v-else>
          <a :href="gacha.photo">
            <img class="imgcus" :src="gacha.photo" :alt="gacha.photo" v-lazy="gacha.photo">
          </a>
        </template>
      </div>

      <div class="version">
      <span>{{gacha.version}}</span><br>
      <span>{{gacha.people}}</span>
      </div>
      <button class="btn buttoncus" @click="openModal(index)">记录一下</button>
    </div>
    </div>
     <!-- 卡片按钮弹窗：对话框列表 -->
     <dialog id="myModal" class="modal">
      <div class="modal-box" v-if="currentGacha" style="overflow: auto;">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost clobutton">✕</button>
        </form>
        <h3 class="modaltext">{{ currentGacha.people }} 卡池记录!</h3>
        <div style="margin-top: 3%;"><p>{{ currentGacha.content }}</p></div>
        <div style="margin-top: 2%;scale: 0.95;">
          <template v-if="currentGacha.video">
          <video autoplay muted controls loop>
            <source :src="currentGacha.video" type="video/mp4">
          </video>
        </template>
        <template v-else>
          <img :src="currentGacha.photo" :alt="currentGacha.photo" v-lazy="currentGacha.photo">
        </template>
        </div>
      </div>
    </dialog>
    </div>

    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="round1"></div>
    <div class="round2"></div>

  </div>
</template>

<script>
import { onMounted } from 'vue';
import gachas from '/src/json/gachadata.json';
import top from '../components/top.vue';
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


export default {

  name:"GameGacha",
  components:{top},

  data() {
    return {
      gachas: gachas,
      currentGacha:{}
    };
  },
  methods: {

  },

  setup() {
    onMounted(() => {

     

     
    });

  },
  methods:{
    openModal(index) {
      // Validate the index
      if (Number.isInteger(index) && index >= 0 && index < this.gachas.length) {
        this.currentGacha = this.gachas[index];
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
body {
  background: url(http://cdn.sonderwyt.top/amuseblogsucai/BG1.webp);
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.bg1{
  z-index: 1;
  width:1350px;height: 630px;
  background-color: rgb(157, 127, 255);
  position: absolute;
  left: 6.2%;top: 8.5%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;  
}
.bg2{
  z-index: 3;
  width:1300px;height: 550px;
  background: repeating-linear-gradient(80deg,#ad28ff 0 2px,#c362ff 3px 4px,#a31df7 5px);
  position: absolute;
  left: 7.8%;top: 11.8%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
  overflow: auto;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid {
  display: grid; 
 }
.gridcus{
  margin-top: 38px; 
  gap: 10px;
  margin-left: 23px;
  margin-right: 0px;
  overflow-x: hidden;
}
.card {
  position: relative;
  width: 410px;
  height: 285px;
  /* background: #202020; */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, .1);
  background-color: #202020;
  background-image:repeating-linear-gradient(45deg,
  hsla(0,0%,100%,.1),
  hsla(0,0%,100%,.1) 15px,
  transparent 0,
  transparent 30px);
}
.imgcard{
  z-index: 3;
  width: 380px;height: 200px;
  background: repeating-linear-gradient(120deg,#ff28f1 0 2px,#ff62e0 3px 4px,#ff28f1 5px);
  border-radius: 35px;
  position: absolute;
  left: 15px;top: -20px;
  overflow: hidden;
  /* border-width: 5px;
  border-color: rgb(250, 194, 62); */
}
.imgcus{
  object-fit: cover;
  transform: translate(0px,35px);
  scale: 1.3;
}
.version{
  background-color: rgb(171, 68, 250);
  width: 150px;height: 70px;
  position: absolute;
  left: 18px;
  bottom: 18px;
  border-radius: 35px;
  font-size: larger;
}
.buttoncus{
  position: absolute;
  bottom: 7%;
  right: 5%;
  color: #202020;
  font-size: 28px;
  scale: 0.85;
  background-color: coral;

}
.clobutton{
  position: absolute;
  right: 0.5rem ;
  top: 0.5rem;
  scale:0.5;
}
.modaltext{
  font-size: 36px;
  line-height: 1.75rem ;
  font-weight: 900;
  margin-top: 3%;
}
.rect1{
  z-index: 2;
  width: 150px;height:75px;
  background-color: rgb(255, 249, 127);
  position: absolute;
  left: 3%;top:20%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}
.rect2{
  z-index: 2;
  width: 150px;height:75px;
  background-color: rgb(255, 249, 127);
  position: absolute;
  left: 3%;top:35%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}
.round1{
  z-index: 4;
  width:50px;height:50px;
  background-color: aquamarine;
  position: absolute;
  left: 6.2%;top: 8.5%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}
.round2{
  z-index: 4;
  width:50px;height:50px;
  background-color: aquamarine;
  position: absolute;
  right: 6.5%;bottom: 14%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}





</style>