<template>
    <div class="div-bg-white">
        <div class="row" v-if="validated == true">
            <div class="col-12 col-md-6 mb-3">
                <div>
                    <span>Destinantion wallet</span>
                    <b-form-input v-model="form.to" placeholder="Enter a destination wallet" />
                </div>
                <div class="mt-3">
                    <span>Amount to transfer</span>
                    <b-form-input v-model="form.quantity" placeholder="Amount to transfer" />
                </div>
                <div class="mt-3">
                    <h5>Fee transaction: 1USD</h5>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <CardWallet :wallet="wallet" />
            </div>
            <div class="col-6 mt-2">
                <b-button variant="link" class="w-100 btn-lg" @click="$emit('close')">
                    <span style="color:black">Cancel</span>
                </b-button>
            </div>
            <div class="col-6 mt-2">
                <ButtonAction lg="true" block="true" :disabled="form.quantity == null || form.to == null" :loading="loading" loadingTx="Sending..." title="Confirm transaction" @click="onSubmit"/>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12 col-md-6 offset-md-3">
                <h3 class="mb-4">
                    Check your email and paste the verification code below
                </h3>
                <b-form-input placeholder="KJASFS" v-model="validate.code"/>
                <div class="text-right mt-4">
                    <ButtonAction lg="true" :loading="loading" loadingTx="Sending..." title="Validate code" @click="checkCode"/>
                </div>
            </div>
        </div>
        <b-modal size="lg" centered hide-footer title="Transaction hash" v-model="showHash">
            <h3>Broadcasting transaction</h3>
            You will receive an email confirmation when the transaction is processed
            <div class="text-right mt-3">
                <b-button variant="primary" class="btn-lg" @click="showHash = false">
                    Okay, close it
                </b-button>
            </div>
        </b-modal>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import CardWallet from '../CardWallet.vue'
export default {
    props: {
        wallet: {
            required: true
        }
    },
    components: {
        CardWallet
    },
    data() {
        return {
            validated: false,
            loading: false,
            showHash: false,
            txHash: false,
            form: {
                to: null,
                quantity: null,
                wallet_id: null
            },
            validate: {
                code: null
            }
        }
    },
    created () {
        this.form.wallet_id = this.wallet.id
        this.loading = true
        this.sendValidation().then(() => {
            this.loading = false
        })
    },
    methods: {
        ...mapActions('wallet', ['sendTransaction']),
        ...mapActions('auth', ['sendValidation', 'validateCode', 'saveLocation']),
        checkCode () {
            this.loading = true
            this.validateCode(this.validate).then(() => {
                this.validated = true
                this.loading = false
            })
            this.loading = false
        },
        onSubmit () {
            this.loading = true
            this.sendTransaction(this.form).then(response => {
                this.loading = false
                this.txHash = response
                this.$emit('close')
                this.showHash = true
            })
        }
    }
}
</script>