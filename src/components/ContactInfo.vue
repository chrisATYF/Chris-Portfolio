<template>
    <div class="contact">
        <h3>Contact Me</h3>
        <p>Sherwood, AR 72120</p>
        <p>(501) 765-2757</p>
        <p>chris.developer009@gmail.com</p>
        <a class="btn btn-lg btn-outline-light" href="https://github.com/chrisATYF" role="button" target="_blank">To My
            GitHub</a>
    </div>
</template>

<style scoped>
h3,
h4,
p,
a {
    text-align: center;
    color: white;
    letter-spacing: 3px;
    text-decoration: none;
}

.contact {
    margin: 25px;
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
</style>