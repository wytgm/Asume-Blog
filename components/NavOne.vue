<template>
  <div class="navcus">
    <div class="join" style="position: absolute;left: 5%;top: 25%;font-size: 38px;font-size: 38px;">
      <button class="btn join-item btn-ghost navFontsize" onclick="window.location.href='/Movie';">movie</button>
      <button class="btn join-item btn-ghost navFontsize" onclick="window.location.href='/Animation';">Animation </button>
      <!-- <button class="btn join-item btn-ghost navFontsize" onclick="window.location.href='/Game';">Game</button> -->
      <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn join-item btn-ghost navFontsize" onclick="window.location.href='/Game';">Game</div>
      <ul tabindex="0" class="dropdown-content men rounded-box z-[1] shadow" style="background-color: #4eb3a2; width: 6rem;font-size: large;">
        <li><a href="/gacha">抽卡记录</a></li>
        <li><a href="#">角色收集</a></li>
        <li><a href="/tupu">关系图谱</a></li>
        <li><a href="/gameimg">美图收藏</a></li>
      </ul>
    </div>
      
      <button class="btn join-item btn-ghost navFontsize" onclick="window.location.href='/Comic';">Comic</button>
      <button class="btn join-item btn-ghost navFontsize" onclick="window.location.href='/TV';">TV</button>
      <button class="btn join-item btn-ghost navFontsize" onclick="window.location.href='/Novel';">Novel</button>
    </div>
  </div>
</template>

<style>
.navcus{
  z-index: 5;
  width: 1300px;
  height: 85px;
  background-color: #4eb3a2;
  position: absolute;
  top: 0%;
  left: 0;
  border-width: 8px;
  border-color: black;
  border-style:double;

}
.navFontsize{
  font-size: 38px;
  color: aliceblue;
}
</style>