<template>
  <div class="w-full">
    <HeaderComponent>
      <NavBarComponent />
    </HeaderComponent>
    <HeaderSwiperComponent />
    <CategoriesComponent />
  </div>
</template>

<script setup>
//components
import HeaderComponent from '@/components/HeaderComponent.vue';
import HeaderSwiperComponent from '@/components/HeaderSwiperComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import CategoriesComponent from '@/components/CategoriesComponent.vue';
</script>
