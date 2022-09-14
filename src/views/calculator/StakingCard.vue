<template>
    <div>
        <b-card class="click" @click="$emit('staking', form)" :class="active == staking.id ? 'bg-active' : ''">
            <div class="card-title">
                <div class="d-flex" v-if="staking.asset">
                    <b-avatar :src="staking.asset.icon"></b-avatar>
                    <h4 class="pt-2" style="padding-left:10px">
                        {{ staking.asset.name }}
                    </h4>
                </div>
                <div class="row mt-4">
                    <div class="col-6">
                        <span>Time</span>
                        <h6>{{ staking.percentage }}%</h6>
                    </div>
                    <div class="col-6 text-right">
                        <span>Minimum</span>
                        <h6>{{ staking.minimum }}</h6>
                    </div>
                </div>
                <b-button variant="outline-primary" class="w-100 mt-4" size="lg" @click="$emit('staking', form)" v-if="showBtn == true">
                    Create Staking
                </b-button>
            </div>
        </b-card>
    </div>
</template>
<script>
export default {
    props: {
        staking: {
            required: true
        },
        showBtn: {
            default: true
        },
        day: {
            default: null
        },
        active: {
            default: null
        }
    },
    data () {
        return {
            form: {
                staking: null,
                days: 123
            }
        }
    },
    methods: {
        selectEmit(name) {
            this.form.days = name
            this.$emit('staking', this.form)
        }
    },
    created () {
        this.form.staking = this.staking
        if(this.day) {
            this.form.days = this.day
        }
    }
}
</script>
<style>
    .bg-active{
        background: linear-gradient(257.15deg, #4CE825 -13.38%, #2200F0 118.9%) !important;
    }
</style>