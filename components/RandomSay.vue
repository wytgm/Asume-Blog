<template>
  <div class="container mx-auto">
    <div class="random-poetry">
      <p v-if="loading" class="font">正在加载今日诗词....</p>
      <p v-else class="font">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      loading: true
    };
  },
  mounted() {
    // 引入 jinrishici SDK
    const script = document.createElement('script');
    script.src = 'https://sdk.jinrishici.com/v2/browser/jinrishici.js';
    script.charset = 'utf-8';
    script.onload = () => {
      jinrishici.load(result => {
        this.msg = result.data.content;
        this.loading = false;
      }, err => {
        console.error("加载古诗词失败", err);
        this.loading = false;
      });
    };
    document.head.appendChild(script);
  }
}
</script>

<style scoped>
.random-poetry {
  text-align: center;
  margin-top: 50px;
}
.font{
  padding: 20px;
  color: rgb(28, 41, 53);
}
</style>