<template>
    <swiper :centeredSlides="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
    }" :pagination="{
    clickable: true,
}" :navigation="true" :loop="true" :modules="modules" class="border-b-2 border-orange-400">
        <swiper-slide>
            <router-link to="/categories/jewelery">
                <img src="@/assets/images/banner1.webp" alt=""
                    class="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-fill">
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/categories/jewelery">
                <img src="@/assets/images/banner3.jpg" alt=""
                    class="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-fill">
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/categories/jewelery">
                <img src="@/assets/images/banner4.png" alt=""
                    class="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-fill">
            </router-link>
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

<style lang="scss">
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


    @media screen and (max-width: 767px) {
        transform: scale(50%);
    }

    @media screen and (max-width: 639px) {
        transform: scale(40%);
        display: none;
    }

    &:hover {
        box-shadow: 0 0 5px orange;
        opacity: 80%;
        transform: scale(75%);

        @media screen and (max-width: 767px) {
            transform: scale(55%);
        }

        @media screen and (max-width: 639px) {
            transform: scale(45%);
        }
    }

    &::after {
        font-size: 28px;
    }
}

.swiper-pagination-bullet {
    background-color: rgba(136, 136, 136, 0.5) !important;
    opacity: 80% !important;
}

.swiper-pagination-bullet-active {
    background-color: rgb(0, 157, 81) !important;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
    display: none !important;
}
</style>
  