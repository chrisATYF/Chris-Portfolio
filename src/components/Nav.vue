<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-item" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-item" to="/skills">Skills</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-item" to="/experience">Experience</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-item" to="/education">Education</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-item" to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav-item {
    color: black;
    padding: 20px;
    text-decoration: none;
    transition: .3s;
    margin: 0 6px;
    z-index: 1;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    position: relative;
    letter-spacing: 2px;

    &:before {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: black;
        border-radius: 8px 8px 0 0;
        opacity: 0;
        transition: .3s;
    }
}

.nav-item:not(.is-active):hover:before {
    opacity: 1;
    bottom: 0;
}


.nav-item:not(.is-active):hover {
    color: #333;
}
</style>