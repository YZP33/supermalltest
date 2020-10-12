<template>
	<div>
		<!-- Cars Data -->
		<!-- <Cars/> -->
		<!-- Map地图 -->
		<Map ref="map" :parking="parkingData" @callback="callbackComponent"/>
		<!-- 导航 -->
		<Navbar/>
		<!-- 会员 -->
		<!-- <div id="children-view" :class="[show ? 'open' : '']"> -->
		<div id="children-view" :class="{open: show}">
			<router-view/>
		</div>
		<!-- login -->
		<Login/>
	</div>
</template>
<script>
// npm方式
import Map from "../amap";
import Cars from "../cars";
import Navbar from "@c/navbar";
// 引入登录界面： api utils login
import Login from "./login";
import { Parking } from "@/api/parking";
export default {
	name: "Index",
	components: {Map,Cars,Navbar,Login},  // 这是个函数，ES6的对象优化写法
	data() {
		return {
			parkingData: []
		}
	},
	computed: {
		show() {
			const router = this.$route;
			// console.log(router);
			return router.name === "Index" ? false : true;
		}
	},
	mounted() {
		document.addEventListener('mouseup', (e)=>{
			const userCon = document.getElementById("children-view");
			if(userCon && !userCon.contains(e.target)) {
				// 路由的重复跳转会报错
				const routeName = this.$route.name;
				if(routeName === "Index") { return false; }
				this.$router.push({
					name: "Index"
				})
			}
		})
	},
	methods: {
		callbackComponent(params) {
			params.function && this[params.function](params.data);  
		},
		loadMap() {
			this.getParking();
		},
		getParking() {
			Parking().then(response => {
				const data = response.data.data;
				data.forEach(item => {
					item.position = item.lnglat.split(',');
					// 动态渲染img使用require
					item.content = "<img src='"+ require('@/assets/images/parking_location_img.png') +"' />";
					item.offset = [-35, -60];
					item.tOffset = [-30, -55];
					item.text = `<div style="width: 60px; font-size: 20px; color: #fff; line-height: 50px; text-align: center">${item.carsNumber}</div>`;
					item.events = {
						click: (e) => this.aaa(e)
					}
				});
				this.parkingData = data;
				// 父组件调用子组件方法
				// 用ref调用子组件的parkingData，把data传进去 
				// this.$refs.map.parkingData(data);
			})

		},
		aaa(e) {
			console.log(e.target.getExtData());
			this.$refs.map.handlerWalking(e);
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
	@include webkit(transition, all .3s ease 0s);
	@include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, .4));
	&.open{
		right: 0;
	}
}
</style>