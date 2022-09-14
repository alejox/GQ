<template>
    <b-card class="bg-secondary">
        <div class="course-name" v-if="sub.course">
            {{ sub.course.name }}
        </div>
        <div class="course-category mt-2 mb-2">
            {{ sub.course.category }}
        </div>
        <div class="videos-quantity mb-2">
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 15.75H3.75C2.925 15.75 2.25 15.075 2.25 14.25V6C2.25 5.17125 2.92125 4.5 3.75 4.5H14.25C15.075 4.5 15.75 5.175 15.75 6V14.25C15.75 15.0788 15.0788 15.75 14.25 15.75Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25548 8.05657L10.9847 9.67057C11.3297 9.87457 11.3297 10.3741 10.9847 10.5781L8.25548 12.1921C7.90373 12.3998 7.45898 12.1463 7.45898 11.7383V8.51032C7.45973 8.10232 7.90448 7.84882 8.25548 8.05657V8.05657Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.58691 4.5V3.75C3.58691 2.92125 4.25816 2.25 5.08691 2.25H12.9132C13.7419 2.25 14.4132 2.92125 14.4132 3.75V4.5" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            20 Videos
        </div>
        <div class="progress-course row">
            <div class="col-9 pt-2">
                <b-progress height="8px" :value="sub.advance" max="100" />
            </div>
            <div class="col-3 text-left">
                {{ sub.advance }}%
            </div>
        </div>
        <b-button variant="outline-light" class="w-100 mt-3" :to="{ name: 'Take-Course', params: {id: sub.course.id , name: sub.course.name } }">
            Go to course
        </b-button>
    </b-card>
</template>
<script>
export default {
    props: ['sub']
}
</script>
<style scoped>
    .course-name{
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
    }
    .course-category{
        border-radius: 10px;
        background-color: rgba(227, 200, 122, 0.1);
        padding: 4px 8px;
        font-weight: 500;
        font-size: 12px;
        color: rgba(227, 200, 122, 1);
        display: inline-block;
    }
    .videos-cuantity{
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
    }
</style>