<template>
  <div class="w-full">
    <HeaderComponent>
      <NavBarComponent />
    </HeaderComponent>
    <HeaderSwiperComponent />
    <CategoriesComponent />
    <OffProductsComponent />
    <div class="container mx-auto flex gap-2 items-center overflow-hidden">
      <img src="@/assets/images/woman_clothing_off.webp" alt="woman's clothing collection off" class="w-1/2 object-contain rounded-md shadow-md shadow-slate-400 border-2">
      <img src="@/assets/images/man_clothing_off.jpg" alt="man's clothing collection off" class="w-1/2 object-contain rounded-md shadow-md shadow-slate-400 border-2">
    </div>
    <PopularProductsComponent />
  </div>
</template>

<script setup>
//components
import HeaderComponent from '@/components/HeaderComponent.vue';
import HeaderSwiperComponent from '@/components/HeaderSwiperComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import CategoriesComponent from '@/components/CategoriesComponent.vue';
import OffProductsComponent from '@/components/OffProductsComponent.vue';
import PopularProductsComponent from '@/components/PopularProductsComponent.vue';
</script>
