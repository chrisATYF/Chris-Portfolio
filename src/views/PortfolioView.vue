<script setup>
import PortfolioCard from '../components/PortfolioCard.vue';
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="heading">
                <h3>Examples of my work</h3>
            </div>
            <PortfolioCard></PortfolioCard>
        </div>
        <div class="btm-space"></div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
}

.heading {
    text-align: center;
    padding: 45px;
}

body {
    margin: 0;
}

.wrapper::-webkit-scrollbar {
    width: 0.8em;
}

.wrapper::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.wrapper::-webkit-scrollbar-thumb {
    background-color: #AFA8BA;
    border-radius: 35px;
}

.wrapper {
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    perspective: 10px;
}

.btm-space {
    margin-bottom: 200px;
}
</style>