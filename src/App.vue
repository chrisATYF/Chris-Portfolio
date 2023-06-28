<script setup>
import { RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
</script>

<template>
  <main>
    <header class="header">
      <Nav></Nav>
    </header>
    <RouterView />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

:root {
  --white: #f9f9f9;
  --black: #36383F;
  --gray: #85888C;
}

body {
  background-color: var(--white);
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

ul {
  list-style: none;
}

.header {
  background-color: var(--black);
  box-shadow: 1px 1px 5px 0px var(--gray);
  position: sticky;
  top: 0;
  width: 100%;
}
</style>