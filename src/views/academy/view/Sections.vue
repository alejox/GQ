<template>
    <div>
        <div v-if="loading == false">
            <div class="mt-3" v-for="section in sections" :key="section.id">
                <h6 class="section-title">
                    {{ section.name }}
                </h6>
                <b-card class="mb-3" v-for="lesson in section.lessons" :key="lesson.id">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21H7C5.895 21 5 20.105 5 19V11C5 9.895 5.895 9 7 9H17C18.105 9 19 9.895 19 11V19C19 20.105 18.105 21 17 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 17.09V14.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5303 13.2197C12.8232 13.5126 12.8232 13.9874 12.5303 14.2803C12.2374 14.5732 11.7626 14.5732 11.4697 14.2803C11.1768 13.9874 11.1768 13.5126 11.4697 13.2197C11.7626 12.9268 12.2374 12.9268 12.5303 13.2197" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 9V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {{ lesson.name }}
                </b-card>
            </div>
        </div>
        <Loading v-else />
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data () {
        return {
            loading: false
        }
    },
    methods: {
        ...mapActions('section', ['getSections']),
        getData () {
            this.loading = true
            this.getSections(this.id).then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('section', ['sections'])
    }
}
</script>
<style scoped>
    .section-title{
        font-size: 22px;
        line-height: 32px;
        color: white;
    }
</style>