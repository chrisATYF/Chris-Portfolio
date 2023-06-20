<script setup>
import { supabase } from '../supabase'

var nMPhotoImg = ""

const fetchNMPhotoImg = async () => {
    const { data: nMPhotoData } = supabase
        .storage
        .from('images')
        .getPublicUrl('novaMaeSite.png')

    nMPhotoImg = nMPhotoData.publicUrl
}

fetchNMPhotoImg()
</script>

<template>
    <div class="container">
        <div class="heading">
            <h2>My Work</h2>
        </div>
        <div class="portfolio-sites">
            <a class="card-link" href="https://novamaephotography.netlify.app/" target="_blank">
                <div class="site-card">
                    <div class="card-img">
                        <img class="web-img" :src="nMPhotoImg" />
                    </div>
                    <div class="card-text">
                        <p>Nova Mae Photography</p>
                    </div>
                </div>
            </a>
        </div>
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

.portfolio-sites {
    display: flex;
    width: 100%;
    margin: 0px;
}

.site-card {
    width: 200px;
    margin-left: 20px;
    background-color: aqua;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 3px darkgray;
}

.card-img {
    width: 100%;
}

.web-img {
    padding: 5px;
    width: 100%;
    height: 150px;
    object-fit: contain;
}

.card-text {
    width: 100%;
    text-align: center;
}

.card-link {
    text-decoration: none;
    color: black;
}
</style>