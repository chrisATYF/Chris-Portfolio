<template>
    <div class="container">
        <div class="summary">
            <div class="title">
                <h2>A few of my skills</h2>
            </div>
            <div class="logo-container">
                <div class="logo-card">
                    <a href="https://vuejs.org" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="Vue.js logo">
                    </a>
                    <span class="label">VueJs</span>
                </div>
                <div class="logo-card">
                    <a href="https://dotnet.microsoft.com/apps/aspnet" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg" alt="ASP.Net logo">
                    </a>
                    <span class="label">Asp.Net</span>
                </div>
                <div class="logo-card">
                    <a href="https://getbootstrap.com" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
                            alt="Bootstrap logo">
                    </a>
                    <span class="label">Bootstrap</span>
                </div>
                <div class="logo-card">
                    <a href="https://github.com" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub logo">
                    </a>
                    <span class="label">GitHub</span>
                </div>
                <div class="logo-card">
                    <a href="https://code.visualstudio.com/" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
                            alt="Visual Studio Code logo">
                    </a>
                    <span class="label">Visual Studio Code</span>
                </div>
                <div class="logo-card">
                    <a href="https://supabase.com/" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" alt="Supabase logo">
                        <span class="label">Supabase</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://react.dev/" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React logo">
                        <span class="label">React</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://angular.io/" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" alt="Angular logo">
                        <span class="label">Angular</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="HTML logo">
                        <span class="label">HTML</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="CSS logo">
                        <span class="label">CSS</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="Javascript logo">
                        <span class="label">Javascript</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://jquery.com/" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" alt="JQuery logo">
                        <span class="label">JQuery</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://www.python.org/" target="_blank">
                        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python logo">
                        <span class="label">Python</span>
                    </a>
                </div>
                <div class="logo-card">
                    <a href="https://threejs.org/" target="_blank">
                        <img src="https://cdn.worldvectorlogo.com/logos/threejs-1.svg" alt="Threejs logo">
                        <span class="label">Threejs</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    text-align: center;
    width: 100%;
    margin: auto;
}

.summary {
    letter-spacing: 3px;
}

.logo-card img {
    max-width: 100%;
}

.logo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.logo-container a img {
    width: 100px;
    height: 100px;
}

.logo-container a,
.logo-container a span.label {
    text-decoration: none;
    color: black;
}

.logo-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    margin: 10px;
    box-shadow: 0px 0px 5px .5px gray;
    border-radius: 25px;
}

.label {
    display: block;
}

.title {
    text-align: center;
    margin-top: 25px;
}

@media (max-width: 768px) {
    .container {
        font-size: 20px;
    }

    .summary {
        letter-spacing: 1px;
        margin-bottom: 65px;
    }
}

@media (max-width: 571px) {
    .logo-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 420px) {
    .logo-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>