<template>
    <div>
        <b-card>
            <b-card-img src="/images/package.png" alt="Image" class="rounded-0"></b-card-img>

            <div class="plan-name">
                Basic
            </div>
            <div class="row" style="font-size:14px">
                <div class="col-6">
                    Price
                </div>
                <div class="col-6 text-right">
                    100
                </div>
                <div class="col-6">
                    End Date
                </div>
                <div class="col-6 text-right">
                    2023-07-20
                </div>
            </div>
            <div class="mt-2">
                <b-progress value="10" max="100" show-progress animated></b-progress>
            </div>
        </b-card>
    </div>
</template>
<script>
import Line from './Lines.vue'
export default {
    props: ['membership'],
    components: {
        Line
    },
    data () {
        return {
            modalPurchase: false
        }
    },
    methods: {
        calcChart(price) {
            let chartArray = [price]
            chartArray.unshift(price * 0.36)
            chartArray.unshift(price * 0.36)
            chartArray.unshift(price * 0.07)

            return chartArray
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
        font-size: 26px;
        line-height: 40px;
    }
    .plan-price span {
        font-weight: 700;
        font-size: 30px;
        line-height: 48px;
    }
</style>