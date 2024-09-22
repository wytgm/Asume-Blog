<template>
  <div class="container mx-auto w-full h-full">
    <div id="player" style="border-radius: 15px;">
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import axios from 'axios';

export default {
  name: "newHome",
  setup() {
    const audioList = ref([]);

    onMounted(async () => {
      
      try {
        const response = await axios.get('/src/json/music.json');
        audioList.value = response.data;

        const ap = new APlayer({
          container: document.getElementById('player'),
          autoplay: false, 
          listFolded: false,
          listMaxHeight: 90,
          lrcType: 3,
          audio: audioList.value
        });
      } catch (error) {
        console.error('Error loading audio list:', error);
      }
    });

    return {
      audioList
    };
  }
}
</script>

<style>
.aplayer {
  display: flex;
  flex-direction: row-reverse;
  background: rgb(42, 42, 42,0);
  border: none;
  box-shadow: none;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
  font: 600;
  overflow: auto
}
.aplayer-body {
  width: 65%;
  height: 350px;
  overflow: auto;
}

/* 图片 */
.aplayer.aplayer-withlrc .aplayer-pic {
  float: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  left: 0;
  right: 0;
}

/* 标题与副标题 */
.aplayer.aplayer-withlist .aplayer-info  {
  margin: 0 20px 0 20px;
  border-bottom: none;
}

.aplayer-info .aplayer-music {
  text-align: center;
  height: auto;
  margin: 15px;
}
.aplayer-info .aplayer-music .aplayer-author,
.aplayer-info .aplayer-music .aplayer-title {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
}

/* 歌词 */
.aplayer .aplayer-info .aplayer-lrc {
  height: 150%;
  margin-top: 30px;
  margin-bottom: 3px;
}
.aplayer-info .aplayer-lrc p {
  font-size: 14px;
  color: #191919;
  overflow: hidden;
  transform: translateY(45px);
  height: 450px;
}

.aplayer .aplayer-lrc:after,
.aplayer .aplayer-lrc:before {
  display: none;
}

/* 控制器 */
.aplayer .aplayer-info .aplayer-controller {
    position: absolute;
    /* display: flex; */
    top: 95px;
    right: 45px;
    width: 220px;
}

/* 歌单列表 */
.aplayer-list {
  width: 40%;
  max-height: none !important;
  height: 100%;
  
}
ol {
  max-height: 75vh !important;
  padding-right: 25px;
}
ol > li:hover {
  background: #ffffff33;
  border-radius: 8px;
}
ol > li span {
  color: rgb(253, 170, 62);
  font-size: 16px;
}

ol > li span.aplayer-list-author {
  opacity: 1;
  color: blueviolet;
}
</style>