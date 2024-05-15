<template>
    <div
        class="container mx-auto bg-gradient-to-b from-orange-700/5 to-orange-600/60 rounded-lg shadow-inner outline outline-4 outline-orange-700/5 py-2 lg:py-5 px-1 my-2 sm:my-5">
        <swiper :navigation="true" :slidesPerView="'auto'" :grabCursor="true" :spaceBetween="5" :freeMode="true"
            :modules="modules" class="max-w-max">
            <swiper-slide>
                <div class="w-28 sm:w-36 md:w-44 lg:w-52 pl-5 opacity-80">
                    <img src="@/assets/images/up-to-off-percentage-15.png" alt="" class="w-full h-full object-cover">
                </div>
            </swiper-slide>
            <swiper-slide v-for="product in productsList" :key="product">
                <router-link :to="{ name: 'product', params: { id: product.id } }">
                    <div class="w-28 sm:w-36 md:w-44 lg:w-52 bg-white p-3 shadow-md rounded-md">
                        <div class="w-full h-20 sm:h-32 md:h-40 lg:h-48 mb-2 rounded-t-md overflow-hidden border-b-2">
                            <img :src="product.image" :alt="product.title" class="w-full h-full object-contain">
                        </div>
                        <div
                            class="w-full mb-2 font-serif whitespace-nowrap text-ellipsis overflow-hidden text-xs md:text-sm lg:text-base">
                            {{ product.title }}</div>
                        <div class="flex justify-between items-start flex-wrap sm:mb-2">
                            <div class="flex flex-col items-start gap-1 text-xs md:text-sm lg:text-base">
                                <span class="font-semibold">${{ product.price }}</span>
                                <span class="text-slate-400 line-through text-xs">${{ parseFloat(product.price *
                                    1.1).toFixed(2) }}</span>
                            </div>
                            <div
                                class="bg-orange-600 rounded-full px-2 md:px-3 text-white font-mono text-xs md:text-sm lg:text-base">
                                10%</div>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
//imports
import store from '@/store';
import { computed, onMounted } from 'vue';

//import swiper in component
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

let modules = [FreeMode, Navigation];

//api
function getProductsList() {
    return store.dispatch('getProductsListFromApi');
}
const productsList = computed(() => {
    return store.getters.getProductsList;
});

onMounted(async () => {
    await getProductsList();
})
</script>

<style scoped>
.swiper-slide {
    width: auto;
}
</style>