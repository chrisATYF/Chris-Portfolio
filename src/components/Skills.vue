<template>
    <div class="container">
        <!-- <h4>Languages/Frameworks:</h4>
        <p>ASP.Net MVC, .NET Web API, C#, SQL, HTML, CSS, Javascript, JQuery, Vuejs, Reactjs,
            Angularjs, C++</p>
        <h4>Software/Other:</h4>
        <p>Sql Server Management Studio, Tidal Workload Automation, Tortoise SVN, Visual Studio,
            Aginity DB, Supabase, RESTful APIs, Cloud Architecture, Microsoft Office</p> -->
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