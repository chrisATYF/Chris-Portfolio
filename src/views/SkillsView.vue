<script setup>
import Skills from '../components/Skills.vue';
import AboutSite from '../components/AboutSite.vue';
import { supabase } from '../supabase.js';

var backgroundVid = ""
var foregroundImg = ""
var skillImg = ""

const fetchDB = async () => {
    const { data: bgVid } = supabase
        .storage
        .from('videos')
        .getPublicUrl('blueVid.mp4')

    backgroundVid = bgVid.publicUrl

    const { data: fgImg } = supabase
        .storage
        .from('images')
        .getPublicUrl('computer.png')

    foregroundImg = fgImg.publicUrl

    const { data: skillImgData } = supabase
        .storage
        .from('images')
        .getPublicUrl('skillBg.jpg')

    skillImg = skillImgData.publicUrl
}

fetchDB()
</script>

<template>
    <div class="wrapper">
        <header>
            <video autoplay loop muted playsinline style="pointer-events: none;" id="bgVid" class="background">
                <source :src="backgroundVid" type="video/mp4" />
            </video>
            <img :src="foregroundImg" class="foreground">
            <h1 class="title">My Skills</h1>
        </header>
        <section>
            <div class="main-heading">
                <Skills></Skills>
            </div>
            <div class="skill-area">
                <div class="skill-img" v-bind:style="{ 'background-image': 'url(' + skillImg + ')' }">
                    <h3 class="skill-heading">About This Site</h3>
                </div>
                <AboutSite></AboutSite>
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
    height: calc(100vh - 100px);
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
    width: 100%;
    transform: translateZ(-10px) scale(2);
}

.foreground {
    transform: translateZ(-5px) scale(1.5);
    animation: fade-in 2.5s;
}

.background,
.foreground {
    position: absolute;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.title {
    padding: 100px;
    font-size: 7rem;
    color: white;
    text-shadow: 0 0 5px black;
    text-transform: uppercase;
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

.skill-area {
    margin-bottom: 15px;
    padding: 15px;
}

.skill-heading {
    padding: 50px 200px;
    border-radius: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: rgba(255, 255, 255, 0.763);
    color: black;
}

.skill-img {
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

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 5rem;
    }

    .skill-heading {
        padding: 50px 70px;
        letter-spacing: 2px;
    }

    .skill-img {
        background-attachment: scroll;
    }
}
</style>