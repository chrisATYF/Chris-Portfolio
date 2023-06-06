<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="nav" role="navigation">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/skills">Skills</RouterLink>
        <RouterLink class="nav-item" to="/experience">Experience</RouterLink>
        <RouterLink class="nav-item" to="/education">Education</RouterLink>
        <RouterLink class="nav-item" to="/contact">Contact</RouterLink>
        <span class="nav-indicator"></span>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    display: inline-flex;
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: white;
}

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

.nav-indicator {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    transition: .4s;
    height: 5px;
    z-index: 1;
    border-radius: 8px 8px 0 0;
}
</style>