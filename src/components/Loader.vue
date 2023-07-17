<template>
    <div class="page__loader"></div>
</template>


<style>
.page__loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--text-color);
  z-index: 100;
  pointer-events: none;
  opacity: 0;
}
</style>
<script>
export default {
    name: 'BannerNew',
}
</script>