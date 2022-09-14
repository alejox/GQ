<template>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div style="height:100vh">
                <img :src="'/pdf/fees/fee (' + (x + 1) + ').jpg'" class="w-100" alt="Privacy" loading="lazy" v-for="x in 8" :key="x">
            </div>
        </div>
    </div>
</template>
