<template>
    <div class="container">
		<input type="radio" name="slider" id="item-1" checked>
		<input type="radio" name="slider" id="item-2">
		<input type="radio" name="slider" id="item-3">
		<div class="cards">
			<label class="card-slider" :for="'item-' + (index + 1)" :id="'song-' + (index + 1)" v-for="(course, index) in top_courses" :key="course.id">
				<CardCourseBanner :course="course" />
			</label>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CardCourseBanner from './CardCourseBanner.vue'
export default {
    components: {
        CardCourseBanner
    },
	created () {
		this.getData()
	},
	methods: {
		...mapActions('academy', ['getTopCourses']),
		getData () {
			this.loading = true
			this.getTopCourses().then(() => {
				this.loading = false
			})
		}
	},
	computed: {
		...mapState('academy', ['top_courses'])
	}
}
</script>
<style scoped>
input[type=radio] {
	 display: none;
}
 .card-slider {
	 position: absolute;
	 width: 60%;
	 height: 100%;
	 left: 0;
	 right: 0;
	 margin: auto;
	 transition: transform 0.4s ease;
	 cursor: pointer;
}
 .container {
	 width: 100%;
	 max-width: 1200px;
	 max-height: 600px;
	 height: 400px;
	 transform-style: preserve-3d;
	 display: flex;
	 justify-content: center;
	 flex-direction: column;
	 align-items: center;
}
 .cards {
	 position: relative;
	 width: 100%;
	 height: 100%;
	 margin-bottom: 20px;
} 
 img {
	 width: 100%;
	 height: 100%;
	 border-radius: 10px;
	 object-fit: cover;
}
 #item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
	 transform: translatex(-65%) scale(0.8);
	 opacity: 0.4;
	 z-index: 0;
}
 #item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
	 transform: translatex(65%) scale(0.8);
	 opacity: 0.4;
	 z-index: 0;
}
 #item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
	 transform: translatex(0) scale(1);
	 opacity: 1;
	 z-index: 1;
}
 #item-1:checked ~ .cards #song-1 img, #item-2:checked ~ .cards #song-2 img, #item-3:checked ~ .cards #song-3 img {
	 box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
}
 
</style>