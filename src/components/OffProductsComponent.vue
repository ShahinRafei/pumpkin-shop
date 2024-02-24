<template>
    <div
        class="container mx-auto bg-gradient-to-b from-orange-100 to-orange-500 rounded-lg shadow-inner outline outline-4 outline-orange-200 py-5 px-1 my-5">
        <swiper :navigation="true" :slidesPerView="'auto'" :grabCursor="true" :spaceBetween="5" :freeMode="true" :modules="modules">
            <swiper-slide>
                <div class="w-52 pl-5">
                    <img src="@/assets/images/up-to-off-percentage-15.png" alt="" class="w-full h-full object-cover">
                </div>
            </swiper-slide>
            <swiper-slide v-for="product in productsList" :key="product">
                <div class="w-52 bg-white p-3 shadow-md rounded-md">
                    <div class="w-full h-52 mb-2 rounded-t-md overflow-hidden border-b-2">
                        <img :src="product.image" :alt="product.title" class="w-full h-full object-contain">
                    </div>
                    <div class="w-full mb-2 font-serif whitespace-nowrap text-ellipsis overflow-hidden">{{ product.title }}</div>
                    <div class="flex justify-between items-center mb-5">
                        <div class="flex items-end gap-1">
                            <span class="font-semibold">${{ product.price }}</span>
                            <span class="text-slate-400 line-through text-xs">${{ parseFloat(product.price * 1.1).toFixed(2) }}</span>
                        </div>
                        <div class="bg-orange-600 rounded-full px-3 text-white font-mono">10%</div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
//imports
import store from '@/store';
import { computed, ref, onMounted } from 'vue';

//import swiper in component
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

let modules = [FreeMode, Navigation];

//data
const showSkeleton = ref(false);

//api
function getProductsList(){
    return store.dispatch('getProductsListFromApi');
}
const productsList = computed(()=>{
    return store.getters.getProductsList;
});

onMounted(async() => {
    showSkeleton.value = true;
    await getProductsList();
    showSkeleton.value = false;
})
</script>

<style scoped>
.swiper-slide {
    width: auto;
}
</style>