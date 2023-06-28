<script setup>
import { ref } from 'vue';

const isChecked = ref(false);

const toggleInput = () => {
    isChecked.value = false;
};
</script>

<template>
    <a href="#" class="logo-link">
        <img src="../../public/C.png" class="logo" />
    </a>
    <input v-model="isChecked" class="mobile-menu" id="mobile-menu" type="checkbox">
    <label class="btn-text" for="mobile-menu"><span class="btn-line"></span></label>
    <nav class="nav">
        <ul class="menu">
            <li>
                <RouterLink class="nav-link" @click="toggleInput" to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink class="nav-link" @click="toggleInput" to="/portfolio">Portfolio</RouterLink>
            </li>
            <li>
                <RouterLink class="nav-link" @click="toggleInput" to="/contact">Contact</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.logo {
    height: 35px;
    width: 35px;
    vertical-align: unset;
}

.logo-link {
    display: inline-block;
    color: var(--white);
    font-size: 60px;
    margin-left: 20px;
}

.btn-text {
    cursor: pointer;
    float: right;
    padding: 40px 20px;
}

.btn-line {
    background: var(--white);
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
}

.btn-line::before,
.btn-line::after {
    background: var(--white);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
}

.btn-line::before {
    top: 5px;
}

.btn-line::after {
    top: -5px;
}

.mobile-menu {
    display: none;
}

.mobile-menu:checked~nav {
    max-height: 100%;
}

.mobile-menu:checked~.btn-text .btn-line {
    background: transparent;
}

.mobile-menu:checked~.btn-text .btn-line::before {
    transform: rotate(-45deg);
    top: 0;
}

.mobile-menu:checked~.btn-text .btn-line::after {
    transform: rotate(45deg);
    top: 0;
}

.nav {
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    overflow: hidden;
    max-height: 0;
}

.menu a {
    display: block;
    padding: 30px;
    color: var(--white);
}

.menu a:hover {
    background-color: var(--gray);
}

@media (min-width: 768px) {
    .nav {
        max-height: none;
        top: 0;
        position: relative;
        float: right;
        width: fit-content;
        background-color: transparent;
    }

    .menu li {
        float: left;
    }

    .menu a:hover {
        background-color: transparent;
        color: var(--gray);
    }

    .btn-text {
        display: none;
    }
}
</style>