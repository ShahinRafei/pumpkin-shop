<template>
    <div class="w-full px-10">
        <swiper :pagination="true" :slidesPerView="4" :freeMode="true" :modules="modules">
            <swiper-slide class="flex justify-center items-center">
                <div class="w-32 h-32 aspect-square">
                    <img src="@/assets/images/categories1.png" alt="categories1" class="w-full h-full object-cover">
                </div>
            </swiper-slide>
            <swiper-slide class="flex justify-center items-center">
                <div class="w-32 h-32 aspect-square">
                    <img src="@/assets/images/categories2.png" alt="categories1" class="w-full h-full object-cover">
                </div>
            </swiper-slide>
            <swiper-slide class="flex justify-center items-center">
                <div class="w-32 h-32 aspect-square">
                    <img src="@/assets/images/categories3.png" alt="categories1" class="w-full h-full object-cover">
                </div>
            </swiper-slide>
            <swiper-slide class="flex justify-center items-center">
                <div class="w-32 h-32 aspect-square">
                    <img src="@/assets/images/categories4.png" alt="categories1" class="w-full h-full object-cover">
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
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

let modules = [Pagination];

</script>