<template>
    <div class="bg-white">
        <div class="row mt-5">
            <div class="col-6 col-sm-2 img-user">
                <img :src="'https://myelv.apimastercode.com/uploads/users/' + user.image " class="w-100" alt="">
            </div>
            <div class="col-6 col-sm-6 offset-sm-1 pt-2">
                <span>Change image</span>
                <input
                    type="file"
                    class="form-control rounded-xs"
                    ref="image"
                    placeholder="Your Password"
                    @change="changeFiles"
                />
            </div>
        </div>
        <div class="row text-left mt-5">
            <h4 class="mb-3">
                Edit Personal Information
            </h4>
            <div class="col-12 col-sm-6 mt-3">
                <span>Username</span>
                <b-form-input placeholder="Juan José" v-model="user.username" />
            </div>
            <div class="col-12 col-sm-6 mt-3">
                <span>Names</span>
                <b-form-input placeholder="Juan José" v-model="user.names" />
            </div>
            <div class="col-12 mt-3">
                <span>Email</span>
                <b-form-input placeholder="test@as.com" v-model="user.email" />
            </div>
            <div class="col-12 col-sm-6 mt-3">
                <span>Country</span>
                <country-select className="form-control" v-model="user.country" topCountry="US" />
            </div>
            <div class="col-12 col-sm-6 mt-3">
                <span>Number phone</span>
                <b-form-input placeholder="124123" v-model="user.phone" />
            </div>
            <div class="col-12 mt-3">
                <b-form-select v-model="user.membership_id">
                    <b-form-select-option :value="membership.id" v-for="membership in memberships" :key="membership.id"> {{ membership.name }}</b-form-select-option>
                </b-form-select>
            </div>
            <div class="col-12 text-right mt-3">
                <ButtonAction :loading="loading" lg="true" loadingTx="Uploading info" title="Update info" @click="onSubmit"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: ['userEdit'],
    data () {
        return {
            loading: false,
            user: {
                id: null,
                username: null,
                image: null,
                names: null,
                email: null,
                country: null,
                phone: null,
                membership_id: null
            }
        }
    },
    created () {
        if(this.userEdit) {
            this.user = this.userEdit
        }
    },
    methods: {
        ...mapActions('membership', ['getMemberships']),
        ...mapActions('auth', ['updateUser', 'getUserInfo']),
        changeFiles(){
            this.user.image = this.$refs.image.files[0]
        },
        onSubmit() {
            this.loading = true

            const formData = new FormData()
            formData.append('username', this.user.username)
            formData.append('image', this.user.image)
            formData.append('names', this.user.names)
            formData.append('email', this.user.email)
            formData.append('country', this.user.country)
            formData.append('phone', this.user.phone)
            formData.append('membership_id', this.user.membership_id)

            this.updateUser({data: formData, id: this.user.id}).then(() => {
                this.getUserInfo()
                openNotification()
                this.$emit('close')
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('membership', ['memberships'])
    }
}
</script>
<style>
    .img-user img{
        border-radius: 50%;
        width: 100px !important;
        height: 100px !important;
    }
</style>