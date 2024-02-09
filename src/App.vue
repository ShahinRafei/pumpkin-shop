<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>
  
<style lang="scss">
textarea:focus, input:focus{
    outline: none;
}
</style>  