<template>
    <div>
        <section>
            <ContainerBanner/>
        </section>
        <section class="my-courses">
        <h3 class="title">
            My courses
        </h3>
            <div class="scrolling-wrapper mt-4" v-if="loadingSubs == false">
                <div class="card-scroll" v-for="sub in subscriptions" :key="sub.id">
                    <CardProgress :sub="sub" />
                </div>
            </div>
            <Loading v-else/>
        </section>
        <section class="mt-5">
            <div class="row">
                <div class="col-6">
                    <h3 class="title">Courses</h3>
                </div>
                <div class="col-6 col-sm-3 offset-sm-3">
                    <b-form-input placeholder="Search Course"/>
                </div>
            </div>
            <div v-if="loading == false">
                <div class="row" v-if="courses.length > 0">
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3" v-for="course in courses" :key="course.id">
                        <CardCourse :course="course" />
                    </div>
                </div>
                <Empty v-else />
            </div>
            <Loading v-else />
        </section>
    </div>
</template>
<script>
import CardProgress from './CardProgress.vue'
import CardCourse from './CardCourse.vue'
import CardCategory from './CardCategory.vue'
import ContainerBanner from './ContainerBanner.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        CardProgress,
        CardCourse,
        CardCategory,
        ContainerBanner
    },
    data () {
        return {
            loading: false,
            loadingSubs: false
        }
    },
    created () {
      this.getData()
      this.getSubscriptions()
    },
    methods: {
      ...mapActions('academy', ['getCourses', 'getSubscribed']),
      getData () {
        this.loading = true
        this.getCourses().then(() => {
            this.loading = false
        })
      },
      getSubscriptions () {
        this.loadingSubs = true
        this.getSubscribed().then(() => {
            this.loadingSubs = false
        })
      }
    },
    computed: {
        ...mapState('academy', ['courses', 'categories', 'subscriptions'])
    }
}
</script>