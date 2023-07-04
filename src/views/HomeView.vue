<script setup>
import { RouterLink } from 'vue-router'
import WorkHistory from '../components/WorkHistory.vue';
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import {
  Scene, PerspectiveCamera, WebGLRenderer, TorusKnotGeometry, MeshStandardMaterial, Mesh, PointLight, AmbientLight,
  TextureLoader
} from 'three';
import { ref, onMounted } from 'vue';

const background = ref(null);
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer;

camera.position.setZ(30);
camera.position.setX(-3);

onMounted(() => {
  renderer = new WebGLRenderer({
    canvas: background.value
  });

  renderer.setPixelRatio(devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
});

const geometry = new TorusKnotGeometry(9.025, 2.7027, 300, 20, 2);
const material = new MeshStandardMaterial({ color: 0x96d4f3 });
const torusKnot = new Mesh(geometry, material);
scene.add(torusKnot);

const pointLight = new PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const bgTexture = new TextureLoader()
  .load('https://images.pexels.com/photos/7130494/pexels-photo-7130494.jpeg?auto=compress&cs=tinysrgb&w=400');
scene.background = bgTexture;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  let initialSet = 25;

  camera.position.z = t * -0.001 + initialSet;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.005;
  torusKnot.rotation.z += 0.01;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame(animate);

  if (renderer) {
    renderer.render(scene, camera);
  }
}

animate();
</script>

<template>
  <canvas ref="background"></canvas>
  <main>
    <header>
      <h1>Chris McDonald</h1>
      <p>Welcome to my portfolio</p>
    </header>
    <blockquote>
      <p>"Because the world will never take my heart" - MCR</p>
    </blockquote>
    <section>
      <AboutMe></AboutMe>
    </section>
    <section class="light">
      <Projects></Projects>
    </section>
    <blockquote>
      <p>The best way out is always through <br>-Robert Frost</p>
    </blockquote>
    <section class="left">
      <WorkHistory></WorkHistory>
    </section>
    <blockquote>
      <p>Thank you for visiting my site!</p>
      <RouterLink to="/skills" id="skill-btn" class="btn btn-outline-dark btn-lg">
        Click to view my skills
      </RouterLink>
    </blockquote>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  color: white;
  z-index: 99;
  position: absolute;
  margin: 0px auto;
  padding: 120px 0px;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(12, 1fr);
}

h1,
h2,
h3,
blockquote {
  font-weight: 700;
  font-style: normal;
}

h1,
h2,
h3 {
  text-transform: uppercase;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
}

header {
  background: var(--dark-bg);
  grid-column: 2 / span 5;
  font-size: 2.5rem;
  padding: 2rem;
  margin-bottom: var(--space);
  opacity: var(--transparency);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

section {
  grid-column: 2 / 8;
  padding: 1rem;
  background: var(--dark-bg);
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: var(--space);
  opacity: var(--transparency);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

blockquote {
  color: black;
  background-color: white;
  margin: 0;
  padding: 25px;
  grid-column: 2 / span 9;
  margin-bottom: var(--space);
  border-radius: var(--radius);
  opacity: var(--transparency);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

blockquote p {
  font-size: 4rem;
  display: inline;
  line-height: 1;
}

.left {
  grid-column: 6 / 12;
}

#skill-btn {
  margin-top: 50px;
}

@media (max-width: 940px) {
  header {
    font-size: 1.5rem;
  }

  blockquote p {
    font-size: 2rem;
    grid-column: 2 / span 10;
  }

  header,
  blockquote,
  section,
  .left {
    box-shadow: var(--shadow-mobile);
    grid-column: 2 / span 10;
  }
}
</style>