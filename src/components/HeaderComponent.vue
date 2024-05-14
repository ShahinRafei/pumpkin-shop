<template>
    <header class="w-full">
        <div class="relative z-50 bg-neutral-100 shadow-md">
            <div class="container mx-auto flex justify-between items-center p-2">
                <!-- menu button and search -->
                <div class="flex items-center">
                    <!-- menu btn -->
                    <div class="lg:hidden w-9 h-9 rounded-md border-2 border-neutral-300 flex flex-col gap-[5px] justify-center items-center cursor-pointer transition-all shadow-sm mr-3"
                        :class="{ '!border-red-400': openNav }" @click="openNav = !openNav">
                        <div class="w-3/4 h-[2px] bg-neutral-400 rounded-full rotate-0 transition-all"
                            :class="{ '!rotate-45 translate-y-[3.5px] !bg-red-400': openNav }"></div>
                        <div class="w-3/4 h-[2px] bg-neutral-400 rounded-full" :class="{ 'hidden': openNav }"></div>
                        <div class="w-3/4 h-[2px] bg-neutral-400 rounded-full rotate-0 transition-all"
                            :class="{ '!-rotate-45 -translate-y-[3.5px] !bg-red-400': openNav }"></div>
                    </div>

                    <!-- search -->
                    <div class="flex items-center gap-2 border-2 border-neutral-300 rounded-md overflow-hidden">
                        <div
                            class="w-7 h-7 shadow-sm bg-orange-400 flex justify-center items-center cursor-pointer text-neutral-50">
                            <font-awesome-icon icon="fa-solid fa-search"></font-awesome-icon>
                        </div>
                        <input type="text" class="px-1 py-[2px] bg-transparent w-36 sm:w-auto text-neutral-500"
                            placeholder="search . . .">
                    </div>
                </div>

                <!-- shopping cart and login -->
                <div class="flex items-center divide-x-2">
                    <!-- login btn -->
                    <div
                        class="mr-3 border-2 border-neutral-300 rounded-md px-2 py-[5px] sm:py-1 flex items-center text-neutral-400 hover:text-neutral-50 hover:bg-orange-400 hover:shadow-md hover:border-orange-400 cursor-pointer">
                        <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                        <span class="ml-2 font-mono hidden sm:inline-block">Login</span>
                    </div>
                    <!-- shopping cart -->
                    <div class="text-neutral-400 px-3 cursor-pointer hover:text-orange-400 hover:drop-shadow-md">
                        <font-awesome-icon icon="fa-solid fa-shopping-cart" class="text-2xl"></font-awesome-icon>
                    </div>
                </div>


                <!-- logo -->
                <div
                    class="absolute hidden xl:block z-50 top-full left-1/2 -translate-x-1/2 drop-shadow-[0_4px_2px_rgb(0,0,0,0.1)]">
                    <div class="trapezoid bg-neutral-100 px-5 pb-3">
                        <router-link to="/" class="flex items-end">
                            <img src="@/assets/images/logo.png" alt="pumpkin-shop" class="h-9">
                            <span
                                class="font-bold text-xl bg-gradient-to-r from-orange-500 from-40% to-green-600 bg-clip-text text-transparent">Pumpkin</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </header>
</template>

<script setup>
//imports
import { provide, ref } from 'vue';
//data
const openNav = ref(false);
//provide
provide("openNav", openNav)
</script>

<style>
.trapezoid {
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
}
</style>