<template>
    <div>
        <b-card>
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
                <div class="mt-4">
                    Duration
                </div>
                <div class="row mt-3">
                    <div class="col-3 mb-2" v-for="benefit in JSON.parse(staking.days)" :key="benefit">
                        <b-button class="w-100" size="lg" @click="selectDay(benefit.name)" :variant="form.days == benefit.name ? 'primary' : 'secondary'">
                            {{ benefit.name }} Days
                        </b-button>
                    </div>
                </div>
                <b-button variant="outline-primary" :disabled="active != staking.id" class="w-100 mt-4" size="lg" @click="$emit('staking', form)" v-if="showBtn == true">
                    Create Staking
                </b-button>
            </div>
        </b-card>
    </div>
</template>
<script>
export default {
    props: {
        active: {
            default: null
        },
        staking: {
            required: true
        },
        showBtn: {
            default: true
        },
        day: {
            default: null
        }
    },
    data () {
        return {
            form: {
                staking: null,
                days: null
            }
        }
    },
    created () {
        this.form.staking = this.staking
        if(this.day) {
            this.form.days = this.day
        }
    },
    methods: {
        selectDay(day) {
            if(this.form.days === day){
                this.form.days = null
                return
            }
            this.form.days = day
            this.$emit('emitSelected', this.staking.id)

        }
    }
}
</script>