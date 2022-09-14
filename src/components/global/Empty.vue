<template>
    <div class="mt-3">
        <div class="size">
            {{ text }}
        </div>
        <Vue3Lottie :animationData="Empty" :height="300" :width="300" />
    </div>
</template>
<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import Empty from '@/assets/icons/empty.json'

export default {
  props: {
    text: {
      default: 'Nothing to show here'
    }
  },
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      Empty,
    }
  },
}
</script>
<style scoped>
    .size{
        font-size: 30px;
        color: white;
        text-align: center;
    }
</style>