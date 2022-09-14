<template>
    <div>
        <div class="row pt-5">
            <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mb-5">
            </div>
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <div class="">
                        <b-button variant="outline-primary" class="w-100 mb-3" @click="modalSection = !modalSection">
                            New Section
                        </b-button>
                    </div>
                    <div v-if="loading == false">
                        <div v-if="sections.length > 0">
                            <Section :section="section" :visible="section.id == sections[0].id ? true : false " v-for="section in sections" :key="section.id"/>
                        </div>
                        <Empty v-else/>
                    </div>
                    <Loading v-else />
                </div>
        </div>
        <b-modal title="Creating Section" v-model="modalSection" centered hide-footer>
            <FormSection :course_id="id" @close="modalSection = false" />
        </b-modal>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Section from './Section.vue'
import FormSection from './FormSection'
export default {
    props: ['id', 'name'],
    components: {
        Section,
        FormSection
    },
    data () {
        return {
            loading: false,
            modalSection: false
        }
    },
    created () {
        this.getData()
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
</style>