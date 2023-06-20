<template>
    <div class="welcome-container">
        <div class="summary">
            <p></p>
        </div>
    </div>
</template>

<style scoped>
.welcome-container {
    display: flex;
    text-align: center;
    width: 100%;
    margin: auto;
}

.summary {
    letter-spacing: 3px;
}

@media (max-width: 768px) {
    .welcome-container {
        font-size: 20px;
    }

    .summary {
        letter-spacing: 1px;
        margin-bottom: 65px;
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