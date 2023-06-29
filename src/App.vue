<script setup>
import { RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
</script>

<template>
  <main>
    <Nav></Nav>
    <RouterView />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}
</style>