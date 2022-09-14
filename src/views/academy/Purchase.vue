<template>
    <div>
        <div class="price">
            <h2>
                <b>{{ course.price }}</b>/usd
            </h2>
        </div>
        <div class="pros">
            <div class="custom-badged mb-2" v-if="course.category">
                {{ course.category.name }}
            </div>
            <div>
               {{ course.description }}
            </div>
        </div>
        <div class="mt-4">
            <h3>
                Payment methods
            </h3>
            <div class="row">
                <!-- <div class="col-4 mb-3" @click="form.payment_method = 'usdt'">
                    <img :class="form.payment_method == 'usdt' ? 'pay-active' : ''" src="@/assets/icons/usdt.png" class="w-100 click" alt="">
                </div>
                <div class="col-4 mb-3" @click="form.payment_method = 'bsc'">
                    <img :class="form.payment_method == 'bsc' ? 'pay-active' : ''" src="@/assets/icons/bsc.png" class="w-100 click" alt="">
                </div>
                <div class="col-4 mb-3" @click="form.payment_method = 'btc'">
                    <img :class="form.payment_method == 'btc' ? 'pay-active' : ''" src="@/assets/icons/btc.png" class="w-100 click" alt="">
                </div>
                <div class="col-4 mb-3" @click="form.payment_method = 'ltc'">
                    <img :class="form.payment_method == 'ltc' ? 'pay-active' : ''" src="@/assets/icons/ltc.png" class="w-100 click" alt="">
                </div>
                <div class="col-4 mb-3" @click="form.payment_method = 'usdte'">
                    <img :class="form.payment_method == 'usdte' ? 'pay-active' : ''" src="@/assets/icons/usdt.png" class="w-100 click" alt="">
                </div>
                <div class="col-4 mb-3" @click="form.payment_method = 'eth'">
                    <img :class="form.payment_method == 'eth' ? 'pay-active' : ''" src="@/assets/icons/eth.png" class="w-100 click" alt="">
                </div> -->
            </div>
        </div>
        <div class="text-right mt-4">
            <b-button variant="secondary" class="mr-3" @click="$emit('close')">
                Cancel
            </b-button>
            <ButtonAction :disabled="form.payment_method == null" :loading="loading" loadingTx="Uploading signal" title="Confirm purchase" @click="onSubmit"/>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['course'],
    data () {
        return {
            form: {
                title: null,
                price: null,
                payment_method: null,
                model: 'Course',
                model_id: null
            },
            loading: false
        }
    },
    created () {
        if(this.course) {
            this.form.title = this.course.name
            this.form.price = this.course.price
            this.form.model_id = this.course.id
        }
    },
    methods: {
        ...mapActions('cart', ['storeCart']),
        onSubmit () {
            this.loading = true
            this.storeCart(this.form).then(response => {
                this.loading = false
                openNotification()
                this.$emit('close')
                this.$router.push({ name: 'Cart', params: { id: response.id } })
            })
        }
    }
}
</script>
<style scoped>
    .pay-active{
        border: 5px solid #13DC38;
        border-radius: 20px;
    }
</style>