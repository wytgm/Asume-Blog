<template>
  <div class="container mx-auto">
    <!-- 开场动画 -->
    <div class="z-0 w-full h-full bg-fuchsia-500 absolute top-0 left-0">
      <div id="left" class="Left overflow-hidden">
        <div id="imgL">
        <!-- <img id="imgLB" class="imgLeftBtm" src="https://images4.alphacoders.com/135/1353112.png" alt="">   -->
        <!-- <img id="imgLT" class="z-32" src="https://images7.alphacoders.com/134/1347439.jpeg" 
        style="scale:1;
        position: absolute;
        top: -45px;
        left: -65px;
        " 
        alt="">   -->
      </div>
      </div>

      <div id="right" class="Right">
        <img id="imgRB" class="" src="../assets/img/heroR.png" alt="">
        <img id="imgRT" class="" src="../assets/img/heroR.png" alt="">
      </div>

      <div id="center">
        <div id="circleB" class="circleB circleB-bg"></div>
        <div id="circleT" class="circleT" style="">
          <img  class=" w-full h-full object-cover relative" src="http://cdn.sonderwyt.top/Cover/avatar/02.webp" alt="">
        </div>
      </div>

    </div>

    
  </div>
</template>

<script>




</script>


<style scoped>




/* PC端 */
body {
  margin: 0;
  padding: 0;   
  overflow-x: hidden;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}

video {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bottomrect{
  z-index: 1;
  width: 1440px;
  height: 660px;
  background-color: #b3894e;
  --c: #d08926;
  background: repeating-linear-gradient(45deg,var(--c),#8887872c,var(--c) 0.5%),
              repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 0.5%),
              linear-gradient(0deg,#060606db,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(1.1);
  position: absolute;
  right: 3%;
  top: 6%;
  border-radius: 35px;
  border-color: #000;
  border-width: 15px;
  scale: 1.015;
}
.grid{
  z-index: 2;
 padding: 10px;
}
.overly{
  z-index: 3;
  --c: #7e46c7;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 0.5%),
	            repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 0.5%),
	            linear-gradient(180deg,#202020,var(--c));
	/* 设置背景图片与元素背景颜色的混合模式 */
	background-blend-mode: color-dodge;
	filter: contrast(5);
	/* mix-blend-mode: soft-light; */
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 55px;
}
.overlysay{
  z-index: 3;
  --c: #56bfd4;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1.2%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 1.2%),
	            linear-gradient(0deg,#202020,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 25px;
}
.overlymus{
  z-index: 3;
  --c: #ff0051;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1.2%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 1.2%),
	            linear-gradient(180deg,#161616,var(--c));
	background-blend-mode: color-dodge;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 25px;
}

.overlymovie{
  z-index: 1;
  border-radius: 10px;
  --c: #1500ff52;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1.5%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 1.5%),
	            linear-gradient(180deg,#161616,var(--c));
	background-blend-mode: color-dodge;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
}
.overlychat{
  z-index: 1;
  border-radius: 10px;
  --c: #84ff00;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 4%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 5%),
	            linear-gradient(0deg,#000000,var(--c));
	background-blend-mode: color-dodge;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
}
.overlyhot{
  z-index: 1;
  border-radius: 15px;
  --c: #006aff;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1.2%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 1.2%),
	            linear-gradient(130deg,#000000,var(--c));
	background-blend-mode: color-dodge;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  color: white;
}
.overlyfoot{
  z-index: 1;
  border-radius: 15px;
  --c: #762e2e;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1.2%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 1.2%),
	            linear-gradient(0deg,#1a1a1a,var(--c));
	background-blend-mode: color-dodge;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  color: white;
}
.overlygame{
  z-index: 1;
  border-radius: 15px;
  --c: #00ff84;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1.2%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 1.2%),
	            linear-gradient(120deg,#1a1a1a,var(--c));
	background-blend-mode: color-dodge;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  color: rgb(0, 0, 0);
}
.overlytravel{
  z-index: 1;
  border-radius: 15px;
  --c: #0bd700;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1.2%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 1.2%),
	            linear-gradient(290deg,#1a1a1a,var(--c));
	background-blend-mode: color-dodge;
 
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  color: rgb(0, 0, 0);
}


.LEFTBG{
  --c: #ff7300;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
	            repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 1%),
	            linear-gradient(90deg,#161616,var(--c));
	background-blend-mode: color-dodge;
  filter: contrast(5);
  border-width: 14PX;
  border-color: #000;
}
.RIGHTBG{
  --c: #2992bf;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 0.5%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 0.5%),
	            linear-gradient(270deg,#161616,var(--c));
	background-blend-mode: color-dodge;
  border-width: 14PX;
  border-color: #000;
  border-radius: 0px;
}

.text {
	font-size: 150px;
	color: lime;
	font-weight: 400;
	position: relative;
  left: 0;
  -webkit-text-stroke: #092f10;
  -webkit-text-stroke-width: 3px;
}
.amuse{
  z-index: 4;
  width: 100vw;
  height:100%;
  position: absolute;
  top: -13%;
  left: -10%;
  transform: scale(0.42);
}
.amuse-1 {
  fill: none;
  stroke: #231815;
  stroke-width: 40px;
  
}
.amuse-2 {
  fill: #fff;
  stroke-width: 0px;
}
.blog{
  z-index: 4;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -23%;
  right: 18%;
  scale: 0.4;
  transform: rotateY(50deg);
}
.blog-2 {
  fill: none;
  stroke: #000;
  stroke-width: 40px;
}
.blog-1{
  fill: #fff;
  stroke-width: 0px;

}
/* 手机端 */
.Left {
  @apply bg-red-500 w-full h-1/2;
  --c: #ff7300;
  background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
              repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 1%),
              linear-gradient(90deg,#1f1f1f,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(5);
  border: 10px solid black;
}
.Right{
  @apply bg-yellow-300 w-full h-1/2 absolute bottom-0;
  --c: #00a2ff;
  background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
              repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 1%),
              linear-gradient(90deg,#1f1f1f,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(5);
  /* mix-blend-mode: soft-light; */
  border: 10px solid black;
}
.circleT{
  @apply z-30 rounded-full;
  height: 200px;
  width: 200px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 10px solid black;
  overflow: hidden;

}
.circleB{
  @apply z-20 ;

}
.circleB-bg{
  @apply z-20 rounded-full;
  height: 245px;
  width: 245px;
  --c: #3c8f51;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
	            repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 1%),
	            linear-gradient(180deg,#303030,var(--c));
	background-blend-mode: color-dodge;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 10px double black;
}
/* PC端  */
@media (min-width: 768px) {
  .Left {
    @apply bg-blue-500 h-full w-1/2;
    --c: #ff7300;
    background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
                repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 1%),
                linear-gradient(90deg,#1f1f1f,var(--c));
    background-blend-mode: color-dodge;
    filter: contrast(5);
    /* mix-blend-mode: soft-light; */
    border: 10px solid black;
  }
 .Right{
  @apply bg-yellow-300 h-full w-1/2 absolute right-0;
  --c: #00a2ff;
  background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
              repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 1%),
              linear-gradient(90deg,#1f1f1f,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(5);
  /* mix-blend-mode: soft-light; */
  border: 10px solid black;
 }
 .circleT{
  @apply z-30 rounded-full;
  height: 350px;
  width: 350px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 10px solid black;
  overflow: hidden;

}
.circleB{
  @apply z-20 ;

}
.circleB-bg{
  @apply z-20 rounded-full;
  height: 400px;
  width: 400px;
  --c: #3c8f51;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 1%),
	            repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 1%),
	            linear-gradient(180deg,#303030,var(--c));
	background-blend-mode: color-dodge;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 10px double black;
}
}

</style>