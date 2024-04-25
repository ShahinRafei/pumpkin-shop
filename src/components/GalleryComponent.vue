<template>
    <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-3">
        <div v-for="image in props.images" :key="image" class="relative w-20 aspect-square shadow-md ring-1 ring-slate-200 rounded p-2 overflow-hidden transition-transform hover:scale-105 cursor-pointer">
            <img :src="image.src" :alt="image.alt">
            <div class="absolute w-full h-full top-0 left-0 bg-black/20 backdrop-blur-[2px]"></div>
        </div>
    </div>
</template>

<script setup>
//imports
import { defineProps } from 'vue';

const props = defineProps(['images']);
</script>