<template>
    <swiper :centeredSlides="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
    }" :pagination="{
    clickable: true,
}" :navigation="true" :loop="true" :modules="modules">
        <swiper-slide>
            <img src="@/assets/images/banner1.webp" alt="" class="w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] object-cover">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner3.jpg" alt="" class="w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] object-fill">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner4.png" alt="" class="w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] object-cover">
        </swiper-slide>
    </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

let modules = [Autoplay, Pagination, Navigation];

</script>

<style>
.swiper-button-prev,
.swiper-button-next {
    color: rgb(230, 107, 0);
    background-color: #FFFFFF;
    border-radius: 100%;
    padding: 30px;
    aspect-ratio: square !important;
    opacity: 30%;
    transform: scale(70%);
    transition: transform 0.2s ease-out;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
    box-shadow: 0 0 5px orange;
    opacity: 80%;
    transform: scale(100%);
}

.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 28px;
}

.swiper-pagination-bullet {
    background-color: rgba(136, 136, 136, 0.5) !important;
    opacity: 80% !important;
}

.swiper-pagination-bullet-active {
    background-color: rgb(0, 157, 81) !important;
}</style>
  