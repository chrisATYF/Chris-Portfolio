<script setup>
import { supabase } from '../supabase'

var nMPhotoImg = ""

const fetchNMPhotoImg = async () => {
    const { data: nMPhotoData } = supabase
        .storage
        .from('images')
        .getPublicUrl('Header.jpg')

    nMPhotoImg = nMPhotoData.publicUrl
}

fetchNMPhotoImg()
</script>

<template>
    <div class="portfolio-sites">
        <a class="card-link" href="https://novamaephotography.netlify.app/" target="_blank">
            <div class="site-card">
                <img class="web-img" :src="nMPhotoImg" />
                <div class="card-text">
                    <p>Nova Mae Photography</p>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.portfolio-sites {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.site-card {

    background-color: lightgray;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 3px darkgray;
}

.web-img {
    padding: 5px;
    height: 250px;
    object-fit: contain;
    border-radius: 15px;
}

.card-text {
    text-align: center;
}

.card-link {
    text-decoration: none;
    color: black;
}

@media (max-width: 524px) {
    .web-img {
        height: 200px;
    }
}
</style>