<template>
    <div class="div-bg-white">
        <div class="row">
            <div class="col-md-6 mb-3">
                Select Token
                <b-form-select v-model="form.asset_id" class="mb-3">
                    <b-form-select-option :value="asset.id" v-for="asset in assets" :key="asset.id">{{ asset.name }}</b-form-select-option>
                </b-form-select>
            </div>
            <div class="col-md-6 mb-3">
                <span>Percentage anual</span>
                <b-form-input v-model="form.percentage" />
            </div>
            <div class="col-md-6 mb-3">
                <span>Minimum invest</span>
                <b-form-input v-model="form.minimum" />
            </div>
            <div class="col-md-6 mb-3">
                <span>Period (Days)</span>
                <b-form-input v-model="benefit" v-on:keyup.enter="addBenefit()"/>
            </div>
            {{ form.days }}
            <!-- <div class="col-12 col-sm-6 col-md-4" v-for="(benefit, index) in form.days" :key="benefit">
                <span class="click" @click="deleteBenefit(index)">
                    {{ benefit.name }}
                </span>
            </div> -->
        </div>
        <div class="text-right mt-3">
            <b-button variant="link" class="mr-3" @click="$emit('close')">
                Cancel
            </b-button>
            <ButtonAction :disabled="form.asset_id == null" :loading="loading" loadingTx="Creating..." title="Confirm Staking" @click="onSubmit()" v-if="isEdit == false" />
            <ButtonAction :disabled="form.asset_id == null" :loading="loading" loadingTx="Creating..." title="Update Staking" @click="onUpdate()" v-else />
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: ['staking'],
    data () {
        return {
            loading: false,
            form: {
                asset_id: null,
                percentage: null,
                minimum: null,
                days: [],
                is_enable: 1
            },
            isEdit: false,
            benefit: null
        }
    },
    created () {
        if(this.staking) {
            this.form = this.staking
            this.isEdit = true
        }
        this.getAssets()
    },
    methods: {
        ...mapActions('staking', ['storeStaking', 'updateStaking']),
        ...mapActions('wallet', ['getAssets']),
        onSubmit() {
            this.loading = true
            this.form.days = JSON.stringify(this.form.days)
            this.storeStaking(this.form).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        },
        onUpdate() {
            this.loading = true
            this.updateStaking(this.form).then(() => {
                this.loading = false
                openNotification()
                this.$emit('close')
            })
        },
        addBenefit() {
            this.form.days.push({name: this.benefit})
            this.benefit = null
        },
        deleteBenefit(index){
            this.form.days.splice(index, 1)
        }
    },
    computed: {
        ...mapState('wallet', ['assets'])
    }
}
</script>