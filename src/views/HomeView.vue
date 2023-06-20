<script setup>
import Welcome from '../components/Welcome.vue';
import Skills from '../components/Skills.vue';
import { supabase } from '../supabase.js';

var backgroundVid = ""
var foregroundImg = ""
var skillImg = ""
var eduImg = ""

const fetchBGVid = async () => {
  const { data } = supabase
    .storage
    .from('videos')
    .getPublicUrl('blueVid.mp4')

  backgroundVid = data.publicUrl
}

const fetchFGImg = async () => {
  const { data } = supabase
    .storage
    .from('images')
    .getPublicUrl('computer.png')

  foregroundImg = data.publicUrl
}

const fetchSkillsImg = async () => {
  const { data } = supabase
    .storage
    .from('images')
    .getPublicUrl('skillBg.jpg')

  skillImg = data.publicUrl
}

const fetchEduImg = async () => {
  const { data } = supabase
    .storage
    .from('images')
    .getPublicUrl('eduBg.jpg')

  eduImg = data.publicUrl
}

fetchBGVid()
fetchFGImg()
fetchSkillsImg()
fetchEduImg()
</script>

<template>
  <div class="wrapper">
    <header>
      <video autoplay loop muted playsinline style="pointer-events: none;" id="bgVid" class="background">
        <source :src="backgroundVid" type="video/mp4" />
      </video>
      <img :src="foregroundImg" class="foreground">
      <h1 class="title">Welcome</h1>
    </header>
    <section>
      <div class="main-heading">
        <Welcome></Welcome>
      </div>
      <div class="skills-area">
        <div class="skills-img" v-bind:style="{ 'background-image': 'url(' + skillImg + ')' }">
          <h3 class="skills-heading">Skills</h3>
        </div>
        <Skills></Skills>
      </div>
      <div class="edu-area">
        <div class="edu-img" v-bind:style="{ 'background-image': 'url(' + eduImg + ')' }">
          <h3 class="edu-heading"></h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}

.wrapper::-webkit-scrollbar {
  width: 0.8em;
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
  width: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}

.background {
  object-fit: fill;
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
  padding: 100px;
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

.skills-area,
.edu-area {
  margin-bottom: 15px;
  padding: 15px;
}

.skills-heading {
  background-color: rgba(46, 46, 46, 0.763);
  color: white;
}

.skills-heading,
.edu-heading {
  padding: 50px 200px;
  border-radius: 25px;
  letter-spacing: 2px;
}

.edu-heading {
  background-color: rgba(255, 255, 255, 0.763);
  color: black;
}

.skills-img,
.edu-img {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
  border-radius: 25px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
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

  .skills-heading {
    padding: 50px 100px;
    letter-spacing: 2px;
  }

  .edu-heading {
    padding: 50px 70px;
    letter-spacing: 2px;
  }

  .skills-img,
  .edu-img {
    background-attachment: scroll;
  }
}
</style>