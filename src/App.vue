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
body {
  overflow: hidden;
  margin-bottom: 25px;
}
</style>