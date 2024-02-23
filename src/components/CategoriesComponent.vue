<template>
    <div class="container mx-auto">
        <swiper :freeMode="true" :grabCursor="true" :slides-per-view="'auto'" :modules="modules">
            <swiper-slide>
                <img src="@/assets/images/categories1.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories2.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories3.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories4.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories1.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories2.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories3.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories4.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories1.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories2.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories3.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/categories4.png" alt="categories1" class="w-32 h-32 aspect-square object-cover">
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

// import required modules
import { FreeMode } from 'swiper/modules';

let modules = [FreeMode];

</script>

<style scoped>
.swiper-slide {
    width: auto;
}
</style>