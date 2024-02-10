<template>
    <nav class="relative w-full h-0 lg:h-auto bg-white lg:shadow-md lg:border-b-2 lg:border-orange-400 z-10">
        <div class="container mx-auto transition-all -translate-y-96 lg:translate-y-0"
            :class="{ '!translate-y-0': openNav }">
            <ul
                class="w-1/2 sm:w-1/3 lg:w-full flex flex-col lg:flex-row gap-1 lg:gap-2 bg-white shadow-md lg:shadow-none rounded-b-md ml-2 sm:m-0 px-2 py-3 sm:px-3 lg:py-1 text-neutral-600">
                <li>
                    <router-link to="/"
                        active-class="!bg-orange-100 hover:bg-neutral-200 lg:!bg-transparent lg:before:absolute lg:before:w-full lg:befor lg:before:h-1 lg:before:-bottom-1 lg:before:left-0 lg:before:bg-orange-400 lg:before:rounded-t-md lg:hover:!text-neutral-600"
                        class="relative hover:bg-neutral-200 lg:hover:bg-transparent lg:hover:text-orange-600 py-2 lg:py-1 px-4 rounded-md block">
                        Lorem ipsum
                    </router-link>
                </li>
                <li>
                    <router-link to="/"
                        active-class="!bg-orange-100 hover:bg-neutral-200 lg:!bg-transparent lg:before:absolute lg:before:w-full lg:befor lg:before:h-1 lg:before:-bottom-1 lg:before:left-0 lg:before:bg-orange-400 lg:before:rounded-t-md lg:hover:!text-neutral-600"
                        class="relative hover:bg-neutral-200 lg:hover:bg-transparent lg:hover:text-orange-600 py-2 lg:py-1 px-4 rounded-md block">
                        Lorem ipsum
                    </router-link>
                </li>
                <li>
                    <router-link to="/"
                        active-class="!bg-orange-100 hover:bg-neutral-200 lg:!bg-transparent lg:before:absolute lg:before:w-full lg:befor lg:before:h-1 lg:before:-bottom-1 lg:before:left-0 lg:before:bg-orange-400 lg:before:rounded-t-md lg:hover:!text-neutral-600"
                        class="relative hover:bg-neutral-200 lg:hover:bg-transparent lg:hover:text-orange-600 py-2 lg:py-1 px-4 rounded-md block">
                        Lorem ipsum
                    </router-link>
                </li>
                <li>
                    <router-link to="/"
                        active-class="!bg-orange-100 hover:bg-neutral-200 lg:!bg-transparent lg:before:absolute lg:before:w-full lg:befor lg:before:h-1 lg:before:-bottom-1 lg:before:left-0 lg:before:bg-orange-400 lg:before:rounded-t-md lg:hover:!text-neutral-600"
                        class="relative hover:bg-neutral-200 lg:hover:bg-transparent lg:hover:text-orange-600 py-2 lg:py-1 px-4 rounded-md block">
                        Lorem ipsum
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
//import
import { inject } from 'vue';

//inject
const openNav = inject("openNav");
</script>