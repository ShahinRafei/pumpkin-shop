<template>
    <div class="container border-2 border-amber-700/10 rounded-xl mx-auto mt-5 p-3 flex flex-col items-center bg-amber-700/5 shadow-inner">
        <h2 class="font-semibold text-slate-600 text-2xl pb-10 pt-2">Popular Products</h2>
        <div class="w-full grid grid-cols-table-sm sm:grid-cols-table justify-items-center gap-5">
            <div v-for="product in productsList" :key="product"
                class="w-52 bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center border-2 border-red-100 hover:scale-105 transition-transform">
                <img :src="product.image" :alt="product.title" class="w-full aspect-square object-contain border-b-2 pb-5">
                <div class="w-full h-full flex flex-col justify-between items-center">
                    <div class="w-full pt-2 text-center">
                        {{ product.title }}
                    </div>
                    <div class="relative flex flex-col max-w-max">
                        <div class="absolute w-full flex gap-1">
                            <span v-for="number in 5" :key="number" class="text-lg text-slate-300">♥</span>
                        </div>
                        <div class="relative flex gap-1 bg-red-600 bg-clip-text overflow-hidden"
                            :style="`width: ${product.rating.rate * 20}%`">
                            <span v-for="number in 5" :key="number" class="text-lg text-transparent">♥</span>
                        </div>
                        <div class="text-center text-slate-400 -mt-2">({{ parseInt(product.rating.count) }} votes)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//imports
import store from '@/store';
import { computed, ref, onMounted } from 'vue';

//data
const showSkeleton = ref(false);

//api
function getProductsList() {
    return store.dispatch('getProductsListFromApi');
}
const productsList = computed(() => {
    return store.getters.getProductsList;
});

onMounted(async () => {
    showSkeleton.value = true;
    await getProductsList();
    showSkeleton.value = false;
})
</script>