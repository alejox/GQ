<template>
    <div class="container">
        <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
        >
            {{ category.name }}
        </b-form-checkbox>
    </div>
</template>
<script>
export default {
    props: ['category']
}
</script>
<style scoped>
    .container{
        padding: 12px 16px;
        background: rgba(255, 255, 255, 0.1);
        opacity: 0.8;
        border-radius: 8px;
        color: #ffffff;
    }
    
</style>