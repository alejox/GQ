<template>
    <b-card>
        <h3>Referral link</h3>
        <Copy :address="'https://myb7academy.com/#/auth/signup/' + user.username" />
    </b-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>