<script setup>
import { RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
</script>

<template>
  <Nav class="nav"></Nav>
  <RouterView></RouterView>
</template>

<style>
:root {
  --dark-bg: rgba(15, 15, 15, 0.500);
  --space: 200px;
  --radius: 25px;
  --shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.500);
  --shadow-mobile: 2.5px 2.5px 5px 2.5px rgba(0, 0, 0, 0.500);
  font-weight: 400;
  font-style: normal;
}

body {
  overflow-x: hidden;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  z-index: 9999;
}
</style>