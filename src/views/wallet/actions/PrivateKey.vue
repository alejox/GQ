<template>
    <div class="bg-white">
        <div v-if="isOkay == false">
            <div class="row">
                <div class="col-12 col-md-6 offset-md-3">
                    <h3 class="mb-4">
                        Check your email and paste the verification code below
                    </h3>
                    <b-form-input placeholder="KJASFS" v-model="form.code"/>
                </div>
            </div>
            <div class="row mt-5">
                    <div class="col-6">
                        <b-button variant="link" class="w-100 text-black btn-lg" @click="$emit('close')">
                            Cancel
                        </b-button>
                    </div>
                    <div class="col-6">
                        <ButtonAction lg="true" :loading="loading" block="true" loadingTx="Validation code" title="Validate code" @click="checkCode"/>
                    </div>
                </div>
        </div>
        <div v-else>
            <h3>Copy the private key</h3>
            <Copy colored="true" :address="pvKey" class="mt-3"/>
            <div class="text-right mt-3">
                <b-button variant="primary" class="btn-lg" @click="$emit('close')">
                    Okay, close it
                </b-button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['wallet_id'],
    data () {
        return {
            loading: false,
            isOkay: false,
            form: {
                id: null,
                code: null
            },
            pvKey: null
        }
    },
    created () {
        this.loading = true
        this.form.id = this.wallet_id
        this.sendValidation().then(() => {
            this.loading = false
        })
    },
    methods: {
        ...mapActions('auth', ['sendValidation']),
        ...mapActions('wallet',['validateCode']),
        checkCode () {
            this.loading = true
            this.validateCode(this.form).then(response => {
                this.pvKey = response
                this.isOkay = true
                this.loading = false
            })
        }
    }
}
</script>