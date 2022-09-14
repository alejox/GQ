<template>
    <div>
        <b-card>
            <b-card-img :src="apiUrl + '/uploads/plans/'+plan.image" alt="Image" class="rounded-0"></b-card-img>

            <div class="plan-name">
                {{ plan.name }}
            </div>
            <div class="plan-price mt-2">
                <span>${{plan.price}}</span>/usd
            </div>
            <div class="mt-2">
                <b-button class="w-100" variant="primary" @click="modalPurchase = true">
                    Buy It
                </b-button>
            </div>
        </b-card>
        <b-modal centered title="Buy a plan" hide-footer v-model="modalPurchase">
            <Purchase :plan="plan" @close="modalPurchase = false" />
        </b-modal>
    </div>
</template>
<script>
import Purchase from './Purchase.vue'
export default {
    props: ['plan'],
    components: {
        Purchase
    },
    data () {
        return {
            modalPurchase: false
        }
    },
    methods: {

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