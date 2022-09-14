<template>
    <div>
        <div class="row">
            <!-- <div class="col-12 col-sm-10">
                <Stats />
            </div> -->
            <div class="col-12 col-sm-2 text-right pt-2 offset-sm-10">
                <b-button variant="primary" size="lg" @click="modalCreate = !modalCreate">
                    Create course
                </b-button>
            </div>
        </div>
        <div v-if="loading == false">
            <div class="row mt-4" v-if="courses.length > 0">
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3" v-for="course in courses" :key="course.id">
                    <CardCourse :course="course" />
                </div>
            </div>
            <Empty type="card" v-else/>
        </div>
        <Loading v-else/>
        <b-modal title="Creating course" size="lg" v-model="modalCreate" hide-footer centered>
            <Form @close="modalCreate = false"/>
        </b-modal>
    </div>
</template>
<script>
import Stats from './Stats.vue'
import CardCourse from './CardCourse.vue'
import Form from './Form.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        Stats,
        Form,
        CardCourse
    },
    data () {
        return {
            loading: false,
            modalCreate: false
        }
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('academy', ['getCourses']),
        getData () {
            this.loading = true
            this.getCourses().then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('academy', ['courses'])
    }
}
</script>