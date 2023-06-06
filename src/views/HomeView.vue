<script setup>
import Welcome from '../components/Welcome.vue';
</script>

<template>
  <div class="wrapper">
    <header>
      <video autoplay loop muted playsinline style="pointer-events: none;" id="bgVid" class="background">
        <source src="../../videos/blueVid.mp4" type="video/mp4" />
      </video>
      <img src="../../images/computer.png" class="foreground">
      <h1 class="title">Welcome</h1>
    </header>
    <section>
      <div class="main-heading">
        <h3>Web Developer</h3>
        <Welcome></Welcome>
      </div>
    </section>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}

.wrapper::-webkit-scrollbar {
  width: 0.5em;
}

.wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.wrapper::-webkit-scrollbar-thumb {
  background-color: #AFA8BA;
  border-radius: 35px;
}

.wrapper {
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  perspective: 10px;
}

header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}

.background {
  transform: translateZ(-10px) scale(2);
}

.foreground {
  transform: translateZ(-5px) scale(1.5);
}

.background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

.title {
  font-size: 7rem;
  color: white;
  text-shadow: 0 0 5px black;
}

section {
  font-size: 2rem;
  padding: 2rem;
  text-align: center;
  background-color: white;
  color: black;
}

.main-heading {
  margin-bottom: 15px;
  padding: 15px;
}

h3,
h4 {
  text-align: center;
  color: black;
}

@media (max-width: 768px) {
  .title {
    font-size: 5rem;
  }
}
</style>