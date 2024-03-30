<template>
    <div class="container mx-auto">
        <swiper :freeMode="true" :grabCursor="true" :slides-per-view="'auto'" :modules="modules">
            <template v-for="number in 4" :key="number">
                <swiper-slide>
                    <router-link to="/categories/electronics">
                        <img src="@/assets/images/categories1.png" alt="categories1"
                            class="w-16 sm:w-20 md:w-24 lg:w-28 aspect-square object-cover">
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link to="/categories/jewelery">
                        <img src="@/assets/images/categories2.png" alt="categories1"
                            class="w-16 sm:w-20 md:w-24 lg:w-28 aspect-square object-cover">
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link to="/categories/men's clothing">
                        <img src="@/assets/images/categories3.png" alt="categories1"
                            class="w-16 sm:w-20 md:w-24 lg:w-28 aspect-square object-cover">
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link to="/categories/women's clothing">
                        <img src="@/assets/images/categories4.png" alt="categories1"
                            class="w-16 sm:w-20 md:w-24 lg:w-28 aspect-square object-cover">
                    </router-link>
                </swiper-slide>
            </template>
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