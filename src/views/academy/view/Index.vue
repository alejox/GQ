<template>
    <div>
        <div>
            <div class="row">
                <div class="col-12 col-sm-7 col-md-9">
                    <Video :image="course.image"/>
                    <div class="text-left mt-3">
                        <h2 class="text-white">
                            Contenido
                        </h2>
                        <Sections :course_id="course.id" />
                    </div>
                </div>
                <div class="col-12 col-sm-5 col-md-3">
                    <b-card>
                        <h2>
                            ${{ course.price }}/usd
                        </h2>
                        <h4>
                            {{ course.name }}
                        </h4>
                        <p>
                            {{course.description}}
                        </p>
                        <b-button variant="primary" size="lg" class="w-100" :to="{ name: 'Take-Course', params: {id: course.id, name: course.name } }" v-if="course.price == 0">
                            Start course
                        </b-button>
                        <b-button variant="primary" size="lg" class="w-100" @click="modalPurchase = true" v-else>
                            Buy it
                        </b-button>
                    </b-card>
                </div>
            </div>
        </div>
        <b-modal centered hide-footer :title="course.name" v-model="modalPurchase">
            <Purchase :course="course" />
        </b-modal>
    </div>
</template>
<script>
import Video from './Video.vue'
import Sections from './Sections.vue'
import Purchase from '../Purchase.vue'
import { mapActions, mapState } from 'vuex'
export default {
    props: ['id', 'name'],
    data () {
        return {
            modalPurchase: false,
            loading: false
        }
    },
    components: {
        Purchase,
        Sections,
        Video
    },
    created () {
        this.getData()
    },
    methods: {
        ...mapActions('academy', ['getCourse']),
        getData(){
            this.loading = true
            this.getCourse(this.id).then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('academy', ['course'])
    }
}
</script>