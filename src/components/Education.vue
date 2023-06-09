<template>
    <div class="school">
        <h4>Bachelors of Arts, Evangel University Online, Springfield Missouri</h4>
        <p>October 2022 - Current Student</p>
        <p>Spring 2023 Dean's List</p>
        <h4>UCA Arkansas Coding Academy, Conway, Arkansas</h4>
        <p>January 2018 - July 2018</p>
        <p>6 Month coding bootcamp for C#/SQL Web development</p>
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

.school {
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