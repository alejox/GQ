<template>
    <div class="breadcum">
        <h3>
            {{ splitBread($route.name) }}
        </h3>
    </div>
</template>
<script>
export default {
    methods: {
        splitBread (name) {
            return name.replace(/-/g, ' ');
        }
    }
}
</script>