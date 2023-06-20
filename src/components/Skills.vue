<template>
    <div class="container">
        <p>
            This site was built using the javascript library Vuejs. It uses Supabase which is a PostGreSQL database.
            It also uses the Bootstrap5 library for styling.
        </p>
    </div>
</template>

<style scoped>
h3,
h4,
p,
a {
    text-align: center;
    color: black;
    letter-spacing: 2px;
    text-decoration: none;
}

.container {
    margin: auto;
    padding: 25px;
    text-align: center;
    animation: fade-in 2s;
}

a {
    cursor: pointer;
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
    .container {
        margin: auto;
        padding: 25px 0;
    }

    h3,
    h4,
    p,
    a {
        font-size: 20px;
    }
}

@media (max-width: 420px) {

    h3,
    h4,
    p,
    a {
        font-size: 15px;
    }
}
</style>