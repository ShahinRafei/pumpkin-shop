<template>
    <div class="w-full flex flex-col gap-3 mb-5">
        <div v-for="comment in props.comments" :key="comment" class="w-full flex items-start gap-3 p-2 shadow-md ring-1 ring-slate-200 rounded-lg rounded-tl-3xl">
            <div
                class="w-12 flex-shrink-0 aspect-square bg-slate-200 shadow-inner rounded-full flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-user" class="opacity-40" />
            </div>
            <div class="w-full">
                <div class="flex justify-between items-center">
                    <p class="font-semibold text-slate-700">{{ comment.user }}</p>
                    <p class="text-xs font-bold opacity-40">{{ comment.date }}</p>
                </div>
                <div class="relative flex flex-col max-w-max">
                    <div class="absolute w-full flex gap-1">
                        <span v-for="number in 5" :key="number"
                            class="text-sm md:text-base lg:text-lg text-red-700 opacity-50">♥</span>
                    </div>
                    <div class="relative flex gap-1 bg-red-700 bg-clip-text overflow-hidden" :style="`width: ${comment.rating * 20}%`">
                        <span v-for="number in 5" :key="number"
                            class="text-sm md:text-base lg:text-lg text-transparent">♥</span>
                    </div>
                </div>

                <p class="text-lg font-medium mb-2">
                    {{ comment.title }}
                </p>
                <p class="text-sm text-justify mb-4">
                    {{ comment.review }}
                </p>

                <div v-for="point in comment.positive_points" :key="point" class="flex items-center gap-1 py-1">
                    <font-awesome-icon icon="fa-solid fa-plus" class="text-xs text-green-600" />
                    <p class="text-xs opacity-50">{{ point.text }}</p>
                </div>
                <div v-for="point in comment.negative_points" :key="point" class="flex items-center gap-1 py-1">
                    <font-awesome-icon icon="fa-solid fa-minus" class="text-xs text-red-600" />
                    <p class="text-xs opacity-50">{{ point.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import
import { defineProps } from 'vue';

//data
const props = defineProps(['comments']);

</script>