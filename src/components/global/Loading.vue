<template>
    <div class="row">
        <div class="col-12 col-sm-4 col-lg-3 mb-3" v-for="index in items" :key="index">
            <b-card v-if="type == 'card'">
                <b-skeleton-img></b-skeleton-img>
                <b-skeleton />
                <b-skeleton />
                <b-skeleton />
            </b-card>
            <b-card v-if="type == 'table'">
                <b-skeleton-table
                :rows="5"
                :columns="4"
                :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </b-card>
            <b-skeleton v-if="type != 'table' && type != 'card'" :type="type" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            default: 4,
            type: Number
        },
        type: {
            default: 'card'
        }
    }
}
</script>