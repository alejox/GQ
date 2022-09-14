<template>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div style="height:100vh">
                <img :src="'/pdf/tyc/tyc (' + (x + 1) + ').jpg'" class="w-100" alt="Privacy" loading="lazy" v-for="x in 40" :key="x">
            </div>
        </div>
    </div>
</template>
