<template>
    <div class="auth-template bg-img">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 pt-5 mt-5 mb-5">
                <router-view />
            </div>
        </div>
    </div>
</template>
<style>
    .bg-img{
        background-image: url('/images/auth.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        filter: brightness(90%);
    }
    .auth-template{
        max-width: 100%;
        overflow-x: hidden;
    }
</style>