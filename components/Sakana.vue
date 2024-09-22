<template>
  <div class="container mx-auto">
    <div style="position: relative;" id="sakana-widget"></div>
  </div>
</template>

<style>
/* .cursor{

} */

</style>

<script>
import 'sakana-widget/lib/index.css';
import SakanaWidget from 'sakana-widget';

export default {
  mounted() {
     // 获取并修改角色
    const Star = SakanaWidget.getCharacter('chisato');
    Star.image = `http://cdn.sonderwyt.top/Biaoqingbao/yinyue02y.png`;
    SakanaWidget.registerCharacter('Star', Star);

    // 创建 SakanaWidget 实例并关闭控制栏
    new SakanaWidget({
      character: 'Star',
      controls: false, // 关闭控制栏
      rod: false
    }).setState({ i: 0.01, d: 1,y:0.5 }).mount('#sakana-widget');
  }
}
</script>