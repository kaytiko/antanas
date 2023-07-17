<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in" @after-leave="startAnim">
      <component :is="Component" />
    </transition>
</router-view>
</template>

<style>
.slide-enter-active,.slide-leave-active {
    transition: all 1s ease
}

.slide-enter-to,.slide-leave-from {
    opacity: 1
}

.slide-enter-from,.slide-leave-to {
    opacity: 0
}
</style>
<script>
// import GalleryItem from '@/components/GalleryItem.vue'
import * as animation from "../src/assets/layout/js/animation.js";  

export default {
  mounted() {
    this.startAnim();
  },
  methods: {
    startAnim() {
      animation.headerAnim();
      animation.deleteAnim();
    }
  }
}
</script>
