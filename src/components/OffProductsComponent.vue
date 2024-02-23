<template>
    <div
        class="container mx-auto bg-gradient-to-b from-orange-100 to-orange-500 rounded-lg shadow-inner outline outline-4 outline-orange-200 py-5 px-1 my-5">
        <swiper :navigation="true" :slidesPerView="'auto'" :grabCursor="true" :spaceBetween="5" :freeMode="true" :modules="modules">
            <swiper-slide>
                <div class="w-52 pl-5">
                    <img src="@/assets/images/up-to-off-percentage-15.png" alt="" class="w-full h-full object-cover">
                </div>
            </swiper-slide>
            <swiper-slide v-for="item in 10" :key="item">
                <div class="w-52 bg-white p-3 shadow-md rounded-md">
                    <div class="w-full h-52 mb-2 rounded-t-md overflow-hidden border-b-2">
                        <img src="@/assets/images/banner1.webp" alt="" class="w-full h-full object-contain">
                    </div>
                    <div class="w-full mb-2 text-lg font-serif whitespace-nowrap text-ellipsis overflow-hidden">title</div>
                    <div class="flex justify-between items-center mb-5">
                        <div class="flex items-end gap-1">
                            <span class="font-semibold">$120.99</span>
                            <span class="text-slate-400 line-through text-xs">$190.99</span>
                        </div>
                        <div class="bg-orange-600 rounded-full px-3 text-white font-mono">10%</div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

let modules = [FreeMode, Navigation];

</script>

<style scoped>
.swiper-slide {
    width: auto;
}
</style>