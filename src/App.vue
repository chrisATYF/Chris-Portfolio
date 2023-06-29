<script setup>
import { RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
</script>

<template>
  <div>
    <main>
      <Nav></Nav>
      <RouterView />
    </main>
    <footer>&copy; Copyright 2023 Chris McDonald</footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>