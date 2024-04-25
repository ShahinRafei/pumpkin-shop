<template>
    <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-3">
        <div v-for="image in props.images" :key="image" @click="showImageModel(image)"
            class="relative w-20 aspect-square shadow-md ring-1 ring-slate-200 rounded p-2 overflow-hidden transition-transform hover:scale-105 cursor-pointer">
            <img :src="image.src" :alt="image.alt">
            <div class="absolute w-full h-full top-0 left-0 bg-black/20 backdrop-blur-[2px]"></div>
        </div>
    </div>

    <ModalComponent :is-show="isShow" @modalShow="(show) => isShow = show">
        <img :src="showImage.src" :alt="showImage.alt" class="h-[50vh] object-contain">
    </ModalComponent>
</template>

<script setup>
//imports
import { defineProps, ref } from 'vue';

//components
import ModalComponent from '@/components/ModalComponent.vue';

//data
const props = defineProps(['images']);
const showImage = ref();
const isShow = ref(false);

//methods
function showImageModel(image){
    showImage.value = image;
    isShow.value = true;
}

</script>