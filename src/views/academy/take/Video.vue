<template>
    <div class="video-container">
        <video controls v-if="type == 'vide' || type == 'video'">
            <source :src="apiUrl + '/uploads/courses/take/' + video" type="video/mp4">
        </video>
        <div v-else>
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe :src="'https://player.vimeo.com/video/' + video +'?h=ae5b2c3597&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title=""></iframe></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['video', 'type']
}
</script>
<style scoped>
    .video-container{
        border-radius: 20px;
    }
    video {
        width: 100%;
        height: auto;
    }
</style>