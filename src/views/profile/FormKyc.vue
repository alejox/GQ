<template>
    <div class="h-100">
        <b-card class="h-100">
            <h4>
                Kyc Verification - {{ splitBread(type) }}
            </h4>
            <div :class="!kycLast.id == false || last == 'Level-0' ? '' : 'blurred' ">
                <div v-if="kycInfo.id && kycInfo.type == type" class="text-center">
                    <img src="@/assets/images/confeti.png" class="w-100" alt="">
                    <h5 class="mt-3">
                        Complete validation, we will respond by mail
                    </h5>
                </div>
                <div v-else>
                    <div class="row text-left mt-5">
                        <div class="col-12 mb-3" v-if="type == 'Level-1'">
                            <span>Email</span>
                            <b-form-input placeholder="1298123" v-model="form.email" />
                        </div>
                        <div class="col-12 mb-3" v-if="type == 'Level-1'">
                            <span>Number phone</span>
                            <b-form-input placeholder="1298123" v-model="form.phone" />
                        </div>
                        <div class="col-12 mb-3" v-if="type == 'Level-3'">
                            <span>Identification Number</span>
                            <b-form-input placeholder="1298123" v-model="form.identification" />
                        </div>
                        <div class="col-12 mb-3" v-if="type == 'Level-2'">
                            <span>Country Residence</span>
                            <country-select className="form-control" v-model="form.country" topCountry="US" />
                        </div>
                        <div class="col-12 mb-3" v-if="type == 'Level-2'">
                            <span>City of residence</span>
                            <b-form-input placeholder="New York" v-model="form.city" />
                        </div>
                        <div class="col-12 mb-3" v-if="type == 'Level-2'">
                            <span>Address of residence</span>
                            <b-form-input placeholder="Fith Avenue" v-model="form.address" />
                        </div>
                        <div class="col-12 mt-4" v-if="type == 'Level-3'">
                            <span>Document image</span>
                            <input
                                type="file"
                                class="form-control rounded-xs"
                                ref="image"
                                placeholder="Your Password"
                                @change="changeFiles"
                            />
                        </div>
                    </div>
                    <div class="text-right mt-3" v-if="!kycLast.id == false || last == 'Level-0'">
                        <ButtonAction :loading="loading" lg="true" loadingTx="Sending verification" title="Send verification" @click="onSubmit"/>
                    </div>
                </div>
            </div>
        </b-card>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: ['type', 'last'],
    data () {
        return {
            loading: false,
            form: {
                document: null,
                country: null,
                email: null,
                phone: null,
                identification: null,
                city: null,
                address: null,
                image: null,
                type: null
            },
            kycInfo: {},
            kycLast: {}
        }
    },
    created () {
        this.getLast()
        this.form.type = this.type
        this.getVerificateKyc(this.type).then(response => {
            this.kycInfo = response
        })
    },
    methods: {
        ...mapActions('auth', ['verificateKyc', 'getUserInfo', 'getVerificateKyc']),
        getLast () {
            this.getVerificateKyc(this.last).then(response => {
                this.kycLast = response
            })
        },
        changeFiles(){
            this.form.image = this.$refs.image.files[0]
        },
        onSubmit() {
            this.loading = true

            const formData = new FormData()
            formData.append('document', this.form.document)
            formData.append('country', this.form.country)
            formData.append('email', this.form.email)
            formData.append('phone', this.form.phone)
            formData.append('identification', this.form.identification)
            formData.append('city', this.form.city)
            formData.append('address', this.form.address)
            formData.append('image', this.form.image)
            formData.append('type', this.form.type)

            this.verificateKyc(formData).then(() => {
                this.getUserInfo()
                this.getVerificateKyc(this.type).then(response => {
                    this.kycInfo = response
                    this.$emit('loaded', response.id)
                })
                openNotification()
                this.loading = false
            })
        },
        splitBread (name) {
            return name.replace(/-/g, ' ');
        }
    },
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>
<style>
    .img-user img{
        border-radius: 50%;
        width: 100px !important;
        height: 100px !important;
    }
    .blurred{
        filter: blur(4px);
    }
</style>