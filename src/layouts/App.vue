<template>
    <div :class="$route.name">
        <Sidebar />
        <div class="home">
            <Navbar />
            <Breadcum />
            <AlertErrors />
            <router-view class="router mt-4 mb-5 pb-5"/>
        </div>
        <Footer class="footer mt-5" />
    </div>
</template>
<script>
import Sidebar from '../components/layout/Sidebar.vue'
import Navbar from '../components/layout/Navbar.vue'
import Breadcum from '../components/layout/Breadcum.vue'
import Footer from '../components/layout/Footer.vue'
export default {
    components: {
        Sidebar,
        Navbar,
        Breadcum,
        Footer
    }
}
</script>

<style scoped>
.router{
    height: 100%;
}

.home{
    min-height: calc(100% - 200px);
}
</style> 

