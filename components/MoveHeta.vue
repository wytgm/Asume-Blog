<template>
  <div  class="container mx-auto w-full h-full object-cover">
    <img class="heya" src="https://blog.jixiaob.cn/backup/hertakuru/img/hertaa1.gif"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
  name: "MovingImage",
  setup() {

    onMounted(() => {
      gsap.to(".heya", {
        x: 300, // 目标位置为容器宽度减去图片宽度
        duration: 2, // 动画持续时间，单位为秒
        ease: "none", // 线性动画
        repeat: -1, // 无限循环
        yoyo: true, // 来回运动
      });




    });

  }
}
</script>

<style scoped>
</style>