<template>
    <div>
        <b-card>
            <router-link :to="{ name: 'Manage-Course', params: { id: course.id, name: course.name } }">
                <b-card-img :src="apiUrl + '/uploads/courses/'+course.image" alt="Image" class="rounded-0"></b-card-img>

                <div class="plan-name">
                    {{ course.name }}
                </div>
                <div class="plan-price mt-2 mb-2">
                    <span>${{ course.price }}</span>/usd
                </div>
                <div class="custom-badged mb-2" v-if="course.category">
                    {{ course.category.name }}
                </div>
                <!-- <div class="videos-quantity mb-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 15.75H3.75C2.925 15.75 2.25 15.075 2.25 14.25V6C2.25 5.17125 2.92125 4.5 3.75 4.5H14.25C15.075 4.5 15.75 5.175 15.75 6V14.25C15.75 15.0788 15.0788 15.75 14.25 15.75Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25548 8.05657L10.9847 9.67057C11.3297 9.87457 11.3297 10.3741 10.9847 10.5781L8.25548 12.1921C7.90373 12.3998 7.45898 12.1463 7.45898 11.7383V8.51032C7.45973 8.10232 7.90448 7.84882 8.25548 8.05657V8.05657Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.58691 4.5V3.75C3.58691 2.92125 4.25816 2.25 5.08691 2.25H12.9132C13.7419 2.25 14.4132 2.92125 14.4132 3.75V4.5" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    20 Sections | 30 Lessons
                </div>
                <div class="video-date">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 2V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 9H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.01268 12.7285C6.87468 12.7285 6.76268 12.8405 6.76368 12.9785C6.76368 13.1165 6.87568 13.2285 7.01368 13.2285C7.15168 13.2285 7.26368 13.1165 7.26368 12.9785C7.26368 12.8405 7.15168 12.7285 7.01268 12.7285" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0127 12.7285C11.8747 12.7285 11.7627 12.8405 11.7637 12.9785C11.7637 13.1165 11.8757 13.2285 12.0137 13.2285C12.1517 13.2285 12.2637 13.1165 12.2637 12.9785C12.2637 12.8405 12.1517 12.7285 12.0127 12.7285" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.0127 12.7285C16.8747 12.7285 16.7627 12.8405 16.7637 12.9785C16.7637 13.1165 16.8757 13.2285 17.0137 13.2285C17.1517 13.2285 17.2637 13.1165 17.2637 12.9785C17.2637 12.8405 17.1517 12.7285 17.0127 12.7285" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.01268 16.7285C6.87468 16.7285 6.76268 16.8405 6.76368 16.9785C6.76368 17.1165 6.87568 17.2285 7.01368 17.2285C7.15168 17.2285 7.26368 17.1165 7.26368 16.9785C7.26368 16.8405 7.15168 16.7285 7.01268 16.7285" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0127 16.7285C11.8747 16.7285 11.7627 16.8405 11.7637 16.9785C11.7637 17.1165 11.8757 17.2285 12.0137 17.2285C12.1517 17.2285 12.2637 17.1165 12.2637 16.9785C12.2637 16.8405 12.1517 16.7285 12.0127 16.7285" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    10 Estudiantes
                </div> -->
            </router-link>
            <div class="mt-3 row">
                <div class="col-6">
                    <b-button variant="secondary" class="w-100" @click="modalDelete = !modalDelete">
                        Delete
                    </b-button>
                </div>
                <div class="col-6">
                    <b-button class="w-100" variant="primary" @click="modalEdit = !modalEdit">
                        Edit
                    </b-button>
                </div>
            </div>
        </b-card>
        <b-modal title="Edit course" size="lg" centered hide-footer v-model="modalEdit">
            <Form :course="course" @close="modalEdit = false" />
        </b-modal>
        <b-modal centered hide-footer title="Delete course" v-model="modalDelete">
            <h4>
                Sure you want delete?
            </h4>
            <div class="text-right">
                <b-button variant="secondary" class="mr-3" @click="modalDelete = false">
                    Cancel
                </b-button>
                <ButtonAction :loading="loading" loadingTx="Deleting course" title="Delete course" @click="confirmeDelete(course.id)"/>
            </div>
        </b-modal>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Form from './Form.vue'
export default {
    props: ['course'],
    components: {
        Form
    },
    data () {
        return {
            modalEdit: false,
            modalDelete: false,
            loading: false
        }
    },
    methods: {
        ...mapActions('academy', ['updateCourse', 'destroyCourse']),
        confirmeDelete (id) {
            this.loading = true
            this.destroyCourse(id).then(() => {
                this.loading = false
            })
        }
    },
}
</script>
<style scoped>
    a{
        color: white !important;
        text-decoration: none !important;
    }
    .plan-name{
        font-weight: 300;
        font-size: 22px;
        line-height: 32px;
    }
    .plan-price{
        font-weight: 300;
        font-size: 22px;
        line-height: 32px;
    }
    .plan-price span {
        font-weight: 700;
        font-size: 26px;
        line-height: 32px;
    }
</style>