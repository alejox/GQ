<template>
    <b-card class="click" @click="$emit('select', membership)" :class="membership.id == active ? 'bg-active' : ''">
        <div class="text-center pt-3">
            <b-avatar src="https://i.ibb.co/Pwypqzn/VUSD.png" size="6rem"></b-avatar>
            <h2 class="mt-4">
                {{ membership.name }}
            </h2>
            <h6 class="mt-3">
                {{ membership.percentage }}%
            </h6>
        </div>
    </b-card>
</template>
<script>
export default {
    props: ['membership', 'active']
}
</script>
<style>
    .bg-active{
        background: linear-gradient(256.2deg, #F16B4D 0%, #F5CA5A 97.57%) !important;
        color: black !important;
    }
    .bg-active .card-body{
        color: black !important;
    }
</style>