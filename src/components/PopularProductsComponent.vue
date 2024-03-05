<template>
    <div class="container border-2 border-slate-300 rounded-md mx-auto mt-5 p-3 flex flex-col items-center">
        <h2 class="font-semibold text-slate-600 text-lg">Popular Products</h2>
        <div class="w-full grid grid-cols-table-sm sm:grid-cols-table justify-items-center gap-2">
            <div v-for="product in productsList" :key="product" class="w-52">
                <img :src="product.image" :alt="product.title">
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