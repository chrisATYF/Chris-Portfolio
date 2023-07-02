<script setup>
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
  .load('https://images.pexels.com/photos/7130544/pexels-photo-7130544.jpeg?auto=compress&cs=tinysrgb&w=400');
scene.background = bgTexture;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  let initialSet = 10;

  camera.position.z = t * -0.01 + initialSet;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.005;
  torusKnot.rotation.z += 0.01;

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
      <h1>🎸 Chris McDonald 🎸</h1>
      <p>Welcome to my portfolio</p>
    </header>
    <blockquote>
      <p>"Because the world will never take my heart" - MCR</p>
    </blockquote>
    <section>
      <h2>About me</h2>
      <p>
        I am a musician and have been one for 16 years. My instrument of choice is the guitar, but I can play piano,
        drums, mandolin and whatever instrument I need to play to get the job done!
      </p>
      <p>
        I first started building websites about 6 years ago after my dad suggested I look into a coding bootcamp
        called the Arkansas Coding Academy. I went ahead and paid the money to attend and I loved it from the start.
        The program was a 6-month course focusing on C#/SQL Web Development. By the end of the class we were very
        proficient in building fully funcitonal web apps using the ASP.Net framework.
      </p>
      <p>
        After a lot of work trying to get a job in the industry I finally got my break with a company called
        Merkle, Inc. I started as an intern before finally being hired on in a full position as a DevOps Developer.
        Sadly, after the events of 2020 and COVID-19 I was laid off from Merkle, Inc. After that I decided to
        focus on creating music and focusing on learning about the Bible and returning to university. Now, I am
        looking to make my way back into the tech field as a web developer.
      </p>
    </section>
    <section class="light">
      <h2>My projects</h2>
      <p>
        As a freelance web developer, I have built websites for small businesses to help establish their online
        presence. I have built a photography website, a website for a hauling company, and a website for a
        non-profit Christian ministry. I also have built a portfolio website to showcase these projects.
      </p>
      <h2>Accomplishments</h2>
      <p>
        I made the Dean's List at my university, Evangel University in Springfield, MO, and have held a 4.0 GPA.
      </p>
    </section>
    <blockquote>
      <p>The best way out is always through <br>-Robert Frost</p>
    </blockquote>
    <section class="left">
      <h2>Work history</h2>
      <h3>Freelance Web Developer</h3>
      <p>
        I build websites for small businesses using a mix of ASP.Net, Vue, React, and Angular. Depending on what
        the client needs.
      </p>
      <h3>DevOps Developer at Merkle, Inc</h3>
      <p>
        I worked mainly in Operations, all while training with the best developers that worked at Merkle and growing
        my skills as a professional developer.
      </p>
    </section>
    <blockquote>
      <p>Thank you for visiting my site!</p>
    </blockquote>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  color: white;
  /* z-index: 99; */
  position: absolute;
  margin: 0px auto;
  padding: 120px 0px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

h1,
h2,
h3,
blockquote {
  font-weight: 700;
  font-style: normal;
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
}

blockquote p {
  font-size: 4rem;
  display: inline;
  line-height: 1;
}

.left {
  grid-column: 6 / 12;
}

@media (max-width: 940px) {
  header {
    font-size: 1.5rem;
    grid-column: 2 / span 10;
  }

  h1 {
    font-size: 1rem;
  }

  blockquote p {
    font-size: 2rem;
  }

  section,
  .left {
    grid-column: 2 / span 10;
  }
}
</style>