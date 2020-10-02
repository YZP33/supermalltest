<template>
	<div>
		<!-- Cars Data -->
		<Cars/>
		<!-- Map地图 -->
		<Map/>
		<!-- 导航 -->
		<Navbar/>
		<!-- 会员 -->
		<!-- <div id="children-view" :class="[show ? 'open' : '']"> -->
		<div id="children-view" :class="{open: show}">
			<router-view/>
		</div>
	</div>
</template>
<script>
//npm方式
import Map from "../amap";
import Cars from "../cars";
import Navbar from "@c/navbar";
export default {
	name: "Index",
	components: {Map,Cars,Navbar},  // 这是个函数，ES6的对象优化写法
	data() {
		return {
			// show: false
		}
	},
	computed: {
		show() {
			const router = this.$route;
			// console.log(router);
			return router.name === "Index" ? false : true;
		}
	},
	// watch: {
	// 	"$route": {
	// 		handler(newValue) {
	// 			const routerName = newValue.name;
	// 			this.show = routerName === "Index" ? false : true;
	// 		}
	// 	}
	// }
}
</script>
<style lang="scss">
#children-view {
	position: fixed;
	top: 0;
	bottom: 0;
	right: -600px;
	z-index: 101;
	width: 410px;
	background-color: #34393f;
	transition: all .3s ease 0s;
	&.open{
		right: 0;
	}
}
</style>