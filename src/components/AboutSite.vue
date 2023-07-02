<template>
    <div class="container">
        <p class="paragraph">
            This website was built using Vuejs. Threejs is used to create the background object on the home page.
            This site uses Supabase, a Firebase alternative, for storing and retrieving data. Also, for some of
            the styling Bootstrap5 is used.
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

    .paragraph {
        font-size: 20px;
    }
}

@media (max-width: 420px) {

    .paragraph {
        font-size: 20px;
    }
}
</style>