<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue';

onMounted(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const isNavbarVisible = window.getComputedStyle(navbarCollapse).getPropertyValue('display') !== 'none';

            if (isNavbarVisible) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand"><img class="logo" src="../../public/C.png"></RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item me-2">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item me-2">
                        <RouterLink class="nav-link" to="/portfolio">Portfolio</RouterLink>
                    </li>
                    <li class="nav-item me-2">
                        <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.logo {
    height: 45px;
    width: 45px;
}
</style>