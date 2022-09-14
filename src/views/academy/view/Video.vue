<template>
    <div class="video-container">
        <img class="w-50" :src="apiUrl + '/uploads/courses/'+image" alt="">
    </div>
</template>
<script>
export default {
    props: ['image']
}
</script>
<style scoped>
    .video-container{
        border-radius: 20px;
    }
</style>