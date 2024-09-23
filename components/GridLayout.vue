<template>
  <div class="w-full h-full overflow-hidden">
    <div id="pc" :class="['grid', 'grid-cols-5', 'grid-rows-5', 'bg-fuchsia-500', 'w-full', 'h-full', { hidden: isPhone }]">
      <div class="bg-green-500 col-start-1 col-end-6 item-center">01</div>
      <div class="bg-yellow-500 col-start-1 col-end-3 item-center">02</div>
      <div class="bg-sky-500 col-start-3 col-end-4 item-center">03</div>
      <div class="bg-orange-500 col-start-4 col-end-6 row-span-2 item-center">04</div>
      <div class="bg-green-700 col-start-1 col-end-4 row-span-2 item-center">05</div>
      <div class="bg-blue-700 col-start-4 col-end-5 row-span-2 item-center">06</div>
      <div class="bg-rose-700 col-start-5 col-end-6 row-span-2 item-center">07</div>
      <div class="bg-rose-700 col-start-1 col-end-4 item-center">08</div>
    </div>

    <div id="phone" :class="['grid', 'grid-cols-1', 'w-full', 'h-full', 'overflow-auto', { hidden: !isPhone }]">
      <div class="grid grid-cols-3">
        <div class="bg-green-500 col-start-1 col-end-4 item-center">01</div>
        <div class="bg-blue-500 col-start-1 col-end-2 item-center">02</div>
        <div class="bg-yellow-500 col-start-2 col-end-4 item-center">03</div>
        <div class="bg-red-500 col-start-1 col-end-3 item-center">04</div>
        <div class="bg-green-700 col-start-3 col-end-4 item-center">05</div>
        <div class="bg-sky-700 col-start-1 col-end-4 item-center">06</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isPhone = ref(false);

function checkScreenSize() {
  isPhone.value = window.innerWidth <= 964;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.hidden {
  display: none;
}
.item-center{
  @apply w-full h-full flex items-center justify-center text-white

}
</style>