<template>
    <header class="w-full bg-neutral-100 shadow-md">
        <div class="container mx-auto flex justify-between items-center p-2">
            <!-- nav button -->
            <div class="sm:hidden w-9 h-9 rounded-md border-2 flex flex-col gap-[5px] justify-center items-center cursor-pointer transition-all shadow-sm" :class="{'border-red-400' : openNav}" @click="openNav = !openNav">
                <div class="w-3/4 h-[2px] bg-neutral-400 rounded-full rotate-0 transition-all" :class="{'!rotate-45 translate-y-[3.5px] !bg-red-400' : openNav}"></div>
                <div class="w-3/4 h-[2px] bg-neutral-400 rounded-full" :class="{'hidden' : openNav}"></div>
                <div class="w-3/4 h-[2px] bg-neutral-400 rounded-full rotate-0 transition-all" :class="{'!-rotate-45 -translate-y-[3.5px] !bg-red-400' : openNav}"></div>
            </div>

            <!-- logo -->
            <div class="flex items-end">
                <img src="@/assets/images/logo.png" alt="pumpkin-shop" class="h-9">
                <span class="font-bold text-xl bg-gradient-to-r from-orange-500 from-40% to-green-600 bg-clip-text text-transparent">Pumpkin</span>
            </div>

            <!-- search -->
            <div class="w-9 h-9 shadow-sm border-2 rounded-md flex justify-center items-center cursor-pointer text-neutral-400 hover:text-neutral-500">
                <font-awesome-icon icon="fa-solid fa-search" class="text-lg"></font-awesome-icon>
            </div>
        </div>
        <slot></slot>
    </header>
</template>

<script setup>
//imports
import { ref } from 'vue';
//data
const openNav = ref(false);
</script>