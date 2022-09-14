<template>
    <div>
        <div v-if="loading == false">
            <div class="row text-center" v-if="uniqueAssets.length > 0">
                
                <div class="col-sm-4 p-3 click" v-for="asset in uniqueAssets" :key="asset.id" @click="selectAsset(asset)">
                    <b-card class="shadow" img-top :class="form.currency == asset.currency ? 'active' : '' ">
                        <img :src="asset.image" alt="" class="w-100 shadow widthImg" style="border-radius:20px; max-height:100px;">
                        <b-card-text>
                            <div class="text-center mt-3" style="font-weight: 600">
                                {{ asset.name }}
                            </div>
                        </b-card-text>
                    </b-card>
                </div>
            </div>
            <div v-else class="text-center pt-4 mb-5">
                <h3>You can only create one wallet for each token </h3>
            </div>
        </div>
        <Loading v-else />
        <div class="text-right mt-3 row">
            <div class="col-6">
                <b-button variant="link text-black" size="lg" class="mr-3 w-100" @click="$emit('close')">
                    Cancel
                </b-button>
            </div>
            <div class="col-6">
                <ButtonAction :disabled="uniqueAssets.length < 1" lg="true" block="true" :loading="loading" loadingTx="Uploading wallet" title="Create wallet" @click="onSubmit"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    data () {
        return {
            loading: false,
            form: {
                currency: null,
                currency_id: null
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('wallet', ['getAssets', 'storeWallet']),
        getData () {
            this.loading = true
            this.getAssets().then(() => {
                this.loading = false
            })
        },
        onSubmit () {
            this.loading = true
            this.storeWallet(this.form).then(() => {
                openNotification()
                this.loading = false
                this.$emit('close')
            })
        },
        selectAsset(asset) {
            this.form.currency = asset.currency
            this.form.currency_id = asset.id
        }
    },
    computed: {
        ...mapState('wallet', ['assets', 'wallets']),
        ...mapGetters('wallet', ['uniqueAssets'])
    }
}
</script>
<style scoped>

    .shadow{
        box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 37%) !important;
    }

</style>