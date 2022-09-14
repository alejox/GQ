<template>
    <div>
        <div class="row">
            <div class="col-12">
                <span>Name</span>
                <b-form-input v-model="form.name"/>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Price</span>
                <b-form-input v-model="form.price"/>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <span>Months</span>
                <b-form-input v-model="form.months"/>
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
                <b-form-group label="Pay Montly">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.payment_monthly" :aria-describedby="ariaDescribedby" name="some-radios" value="1">Enable </b-form-radio>
                        <b-form-radio v-model="form.payment_monthly" :aria-describedby="ariaDescribedby" name="some-radios" value="0">Disable</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="col-12 col-sm-6 pt-4">
                <b-form-group label="Enable Membership">
                    <b-form-radio-group>
                        <b-form-radio v-model="form.is_enable" :aria-describedby="ariaDescribedby" name="some-radios" value="1">Enable </b-form-radio>
                        <b-form-radio v-model="form.is_enable" :aria-describedby="ariaDescribedby" name="some-radios" value="0">Disable</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </div>
            <div class="text-right mt-3">
                <b-button variant="secondary" class="mr-3">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Uploading plan" title="Create plan" @click="onSubmit" v-if="!membership"/>
                <ButtonAction :loading="loading" loadingTx="Uploading plan" title="Update plan" @click="onUpdate" v-else/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['membership'],
    data () {
        return {
            form: {
                name: null,
                price: null,
                months: null,
                payment_monthly: 0,
                is_enable: 1,
                image: null
            },
            loading: false
        }
    },
    created () {
        if(this.membership) {
            this.form = this.membership
        }
    },
    methods: {
        ...mapActions('plan', ['storePlan', 'updatePlan']),
        changeFiles(){
            this.form.image = this.$refs.image.files[0]
        },
        onSubmit () {
            this.loading = true
            const formData = new FormData()
                formData.append('name', this.form.name)
                formData.append('image', this.form.image)
                formData.append('price', this.form.price)
                formData.append('months', this.form.months)
                formData.append('payment_monthly', this.form.payment_monthly)
                formData.append('is_enable', this.form.is_enable)
            
            this.storePlan(formData).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        },
        onUpdate () {
            this.loading = true
            const formData = new FormData()
                formData.append('id', this.form.id)
                formData.append('name', this.form.name)
                formData.append('image', this.form.image)
                formData.append('price', this.form.price)
                formData.append('months', this.form.months)
                formData.append('payment_monthly', this.form.payment_monthly)
                formData.append('is_enable', this.form.is_enable)
            
            this.updatePlan({data: formData, id: this.form.id}).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        }
    }
}
</script>