<script setup>
import { RouterView } from 'vue-router'
import NavBar from './views/layouts/NavBar.vue'
import FooterView from './views/layouts/FooterView.vue'
</script>

<template>
  <nav-bar />
  <RouterView />
  <FooterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.navbar{
  font-family: 'Sarabun', sans-serif;
}
</style>
