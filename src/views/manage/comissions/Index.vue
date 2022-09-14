<template>
    <div>
        <Comissions />
        <Transactions/>
    </div>
</template>
<script>
import Comissions from './Comissions.vue'
import Transactions from './Transactions.vue'
export default {
    components: {
        Comissions,
        Transactions
    }
}
</script>