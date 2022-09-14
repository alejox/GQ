<template>
    <div class="div-bg-white">
        <div class="row">
            <div class="col-12 col-sm-6">
                <span>Name</span>
                <b-form-input v-model="form.name"/>
            </div>
            <div class="col-12 col-sm-6">
                <b-form-group label="Type">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.type" :aria-describedby="ariaDescribedby" name="some-radios" value="Buy">Buy </b-form-radio>
                        <b-form-radio v-model="form.type" :aria-describedby="ariaDescribedby" name="some-radios" value="Sell">Sell</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="col-12 pt-4">
                <span>Upload image</span>
                <input
                type="file"
                class="form-control rounded-xs"
                ref="image"
                placeholder="Your Password"
                @change="changeFiles"
                />
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Win</span>
                <b-form-input v-model="form.win"/>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Loss</span>
                <b-form-input v-model="form.loss"/>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Total</span>
                <b-form-input v-model="form.total"/>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Total Profit</span>
                <b-form-input v-model="form.total_profit"/>
            </div>
            <div class="text-right mt-3">
                <b-button variant="secondary" class="mr-3">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Uploading signal" title="Create signal" @click="onSubmit"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            form: {
                name: null,
                image: 'asf',
                type: null,
                win: null,
                loss: null,
                total: null,
                total_profit: null
            },
            loading: false
        }
    },
    methods: {
        ...mapActions('signal', ['storeSignal']),
        changeFiles(){
            this.form.image = this.$refs.image.files[0]
        },
        onSubmit () {
            this.loading = true
                const formData = new FormData()
                formData.append('name', this.form.name)
                formData.append('image', this.form.image)
                formData.append('type', this.form.type)
                formData.append('win', this.form.win)
                formData.append('loss', this.form.loss)
                formData.append('total', this.form.total)
                formData.append('total_profit', this.form.total_profit)
            
            this.storeSignal(formData).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        }
    }
}
</script>