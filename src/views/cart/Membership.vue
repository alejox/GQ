<template>
    <div>
        <b-card>
            <b-card-img :src="apiUrl + '/uploads/plans/' + membership.image" alt="Image" class="rounded-0"></b-card-img>

            <div class="plan-name">
                {{ membership.name }}
            </div>
            <div class="plan-price mt-2 mb-2">
                <span>${{ membership.price }}</span>/usd
            </div>
        </b-card>
    </div>
</template>
<script>
export default {
    props: ['membership'],
    data () {
        return {
            modalPurchase: false
        }
    }
}
</script>
<style scoped>
    .plan-name{
        font-weight: 300;
        font-size: 22px;
        line-height: 32px;
    }
    .plan-price{
        font-weight: 300;
        font-size: 36px;
        line-height: 40px;
    }
    .plan-price span {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
    }
</style>