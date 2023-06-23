<script setup>
import PortfolioCard from '../components/PortfolioCard.vue';
</script>

<template>
    <div class="container">
        <div class="heading">
            <h2>My Work</h2>
        </div>
        <PortfolioCard></PortfolioCard>
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
</style>