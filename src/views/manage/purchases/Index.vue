<template>
    <div>
        <section>
            <b-card>
                <div class="row">
                    <div class="col-12 col-md-5 mb-3">
                        <MainCard />
                    </div>
                    <div class="col-12 col-md-7 mb-3">
                        <Chart />
                    </div>
                </div>
            </b-card>
        </section>
        <section class="mt-5">
            <Transactions />
        </section>
    </div>
</template>
<script>
import MainCard from './MainCard.vue'
import Transactions from './Transactions.vue'
import Chart from './Chart.vue'
export default {
    components: {
        MainCard,
        Chart,
        Transactions
    }
}
</script>