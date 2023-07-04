<template>
    <div class="container">
        <div class="img-container">
            <img src="../../public/404duck.jpg" alt="Baby duck" class="error-img">
        </div>
        <div class="heading-container">
            <h4 class="title">Page not found</h4>
            <p class="content">
                Maybe check that your url is correct..
            </p>
        </div>
    </div>
</template>

<style scoped>
.img-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.error-img {
    margin: 0 auto;
    height: 400px;
    width: 450px;
    object-fit: scale-down;
}

.title {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .5rem;
}

.content {
    text-align: center;
}

@media (max-width: 492px) {
    .error-img {
        width: 100%;
    }
}
</style>