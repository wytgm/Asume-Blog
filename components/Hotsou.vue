<template>
  <div class="hot-search">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: currentTab === index }]"
        @click="currentTab = index"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="content-container">
      <div class="content">
        <div v-if="currentTab === 0">
          <ul>
            <li v-for="(item, index) in weiboHot" :key="index">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div v-if="currentTab === 1">
          <ul>
            <li v-for="(item, index) in biliHot" :key="index">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div v-if="currentTab === 2">
          <ul>
            <li v-for="(item, index) in douyinHot" :key="index">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: "HotSearch",
  setup() {
    const currentTab = ref(0);
    const tabs = [
      { name: "微博热搜", api: "https://api.vvhan.com/api/hotlist/wbHot" },
      { name: "B站热搜", api: "https://api.vvhan.com/api/hotlist/bili" },
      { name: "抖音热搜", api: "https://api.vvhan.com/api/hotlist/douyinHot" },
    ];

    const weiboHot = ref([]);
    const biliHot = ref([]);
    const douyinHot = ref([]);

    const fetchData = async (api, target) => {
      try {
        const response = await axios.get(api);
        target.value = response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData(tabs[0].api, weiboHot);
      fetchData(tabs[1].api, biliHot);
      fetchData(tabs[2].api, douyinHot);
    });

    return {
      currentTab,
      tabs,
      weiboHot,
      biliHot,
      douyinHot,
    };
  },
};
</script>

<style scoped>
.hot-search {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';

}

.tabs {
  display: flex;
  scale: 0.88;
  justify-content: space-around;
  margin-bottom: 5px;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  background-color: #212121;
  color: gold;
  cursor: pointer;
}

.tab-button.active {
  /* background-color: #007bff; */
  --c: #d08926;
  background: repeating-linear-gradient(45deg,var(--c),#8887872c,var(--c) 2%),
              repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 2%),
              linear-gradient(0deg,#060606db,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(1.2);
  filter: contrast(5);
  mix-blend-mode: soft-light;
  color: white;
}

.content-container {
  width: 520px; /* 固定宽度 */
  height: 150px;
  margin: 0 auto; /* 居中 */
  /* border: 5px solid #1b1b1b; */
  border-radius: 15px;
  padding: 20px;
  overflow: auto;
}

.content {
  width: 100%; /* 确保内容宽度与容器一致 */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding:5px 0;
  border-bottom: 1px solid #7473732d;
}
</style>