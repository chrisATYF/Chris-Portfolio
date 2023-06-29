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
            <div class="card">
                <img :src="nMPhotoImg" class="card-img-top" alt="Photography Image">
                <div class="card-body text-center">
                    <h5 class="card-title">Nova Mae Photography</h5>
                    <p class="card-text">
                        This is a photography website I built using VueJs, Bootstrap, and Supabase.
                    </p>
                    <a href="https://novamaephotography.netlify.app/" type="button" class="btn btn-light btn-lg"
                        target="_blank">Go
                        There</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img :src="lHPhotoImg" class="card-img-top" alt="Lighthouse Image">
                <div class="card-body text-center">
                    <h5 class="card-title">Lighthouse ~ <span style="color: red;"><i>Coming soon..</i></span></h5>
                    <p class="card-text">
                        Built using ASP.Net Core and Bootstrap
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