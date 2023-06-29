<script setup>
import { supabase } from '../supabase'

var nMPhotoImg = ""
var lHPhotoImg = ""

const fetchNMPhotoImg = async () => {
    const { data: nMPhotoData } = supabase
        .storage
        .from('images')
        .getPublicUrl('Header.jpg')

    nMPhotoImg = nMPhotoData.publicUrl

    const { data: lHPhotoData } = supabase
        .storage
        .from('images')
        .getPublicUrl('lighthouse.png')

    lHPhotoImg = lHPhotoData.publicUrl
}

fetchNMPhotoImg()
</script>

<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <a href="https://novamaephotography.netlify.app/" style="cursor: pointer; text-decoration: none;"
                target="_blank">
                <div class="card">
                    <img :src="nMPhotoImg" class="card-img-top" alt="Photography Image">
                    <div class="card-body text-center">
                        <h5 class="card-title">Nova Mae Photography</h5>
                        <p class="card-text">
                            This is a photography website I built for a client using VueJs, Bootstrap, and Supabase.
                            Supabase contains all images for the site. Bootstrap was used in creating the navbar
                            and will be used to display specific photo sessions upon the next release.
                        </p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col">
            <div class="card">
                <img :src="lHPhotoImg" class="card-img-top" alt="Lighthouse Image">
                <div class="card-body text-center">
                    <h5 class="card-title">Lighthouse ~ <span style="color: red;"><i>Coming soon..</i></span></h5>
                    <p class="card-text">
                        Built using ASP.Net Core and Bootstrap. This site was originally created in ASP.Net and is
                        being converted to .Net Core. It will be using MongoDB as the database, but currently it is
                        being developed using SSMS (SQL Server Management Studio).
                    </p>
                </div>
            </div>
        </div>
        <!-- <div class="col">
            <div class="card">
                <img :src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style scoped>
.card {
    animation: fade-in 2.5s;
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