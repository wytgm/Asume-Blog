<template>
  
  <div style="width: 80vw;height:800px;position: absolute;top: 0;left: 0;overflow: hidden;">
    <canvas style="" class="canvas" ref="canvas"></canvas>
    <button @click="motion" 
    style="z-index: 8;
    position: absolute;
    top: 5px;
    left: 250px;
    scale: 1;" 
    class="btn btn-circle btn-outline">
      动作
  </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { $PIXI, $Live2DModel } = useNuxtApp();

let app;
let model; 

const canvas = ref(null);
const modelLoaded = ref(false); 

const motionIndex = ref(0);
const motionNames = ['motion1', 'motion2', 'motion3']; // 动作名称数组

function motion() {
  console.log('motion function called, modelLoaded:', modelLoaded.value);
  if (modelLoaded.value) {
    const motionName = motionNames[motionIndex.value];
    console.log(`Playing motion: ${motionName}`);
    model.motion(motionName);
    // 更新计数器
    motionIndex.value = (motionIndex.value + 1) % motionNames.length;
  } else {
    console.error('Model is not loaded yet.');
  }
}

onMounted(async () => {
  try {
    app = new $PIXI.Application({
      view: canvas.value,
      height: window.innerHeight,
      width: window.innerWidth,
      resolution: window.devicePixelRatio,
      autoDensity: true,
      antialias: true,
      backgroundAlpha: 0, // 确保背景不透明
    });

    model = await $Live2DModel.from('src/assets/model/37/37.model3.json');
    app.stage.addChild(model);

    //设置模型的位置与大小
    model.x = 180;
    model.y = 520;
    model.scale.set(0.22, 0.22);
    model.anchor.set(0.5, 0.5);

    model.on('load', () => {
      modelLoaded.value = true;
      console.log('Model loaded successfully.');
    });

    model.on('error', (error) => {
      console.error('Model load error:', error);
    });

    console.log('Model initialized:', model);

  } catch (error) {
    console.error('Error loading Live2D model:', error);
  }
});
</script>