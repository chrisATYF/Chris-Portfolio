<template>
    <div class="welcome-container">
        <div class="summary">
            <p class="paragraph">
                Hello there! My name is Chris McDonald. I have been building web apps for about 5 years and I love
                the creativity behind web development.
            </p>
            <!-- <h4 class="title">Skills</h4> -->
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

.title {
    margin-top: 100px;
    text-transform: uppercase;
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
    .paragraph {
        font-size: 25px;
    }
}
</style>