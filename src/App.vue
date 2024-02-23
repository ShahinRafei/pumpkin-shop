<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>
  
<style lang="scss">
body {
  background-color: rgb(244, 244, 244);
}
textarea:focus, input:focus{
    outline: none;
}
</style>  