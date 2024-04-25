<template>
    <div v-if="props.isShow"
        class="fixed top-0 left-0 z-50 w-screen h-[100svh] bg-black/20 backdrop-blur-sm flex justify-center items-center">
        <div class="relative max-w-max p-10 bg-white rounded-md flex justify-center items-center scale-0 transition-transform"
            ref="modal">
            <div @click="$emit('modalShow', false)" class="absolute top-5 right-5">
                <font-awesome-icon icon="fa-solid fa-xmark"
                    class="text-xl opacity-75 hover:text-red-700 cursor-pointer"></font-awesome-icon>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
//imports
import { defineProps, watch, ref } from 'vue';

//data
const props = defineProps(['isShow']);
const modal = ref(null);

watch(props, () => {
    setTimeout(() => {
        if(props.isShow)
            modal.value.classList.add('scale-100');
    }, 50);
})
</script>