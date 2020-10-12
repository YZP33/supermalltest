<template>
	<div class="amap-wrap">
		<el-amap vid="amapContainer" :amap-manager="amapManager"  :zoom="zoom" :events="events" class="amap-demo">
			<!-- 覆盖物 - 圆 -->
			<el-amap-circle 
				v-for="item in circle"
				:key="item.id"
				:center="item.center" 
				:radius="item.radius" 
				:fillColor="item.color"
				:strokeColor="item.color"	
				:strokeOpacity="item.strokeOpacity"
				:strokeWeight="item.strokeWeight"
			>
			</el-amap-circle>
			<!-- 覆盖物 - 停车场 -->
			<el-amap-marker 
				v-for="(item, index) in parking" 
				:key="item.id" 
				:content="item.content"
				:position="item.position" 
				:offset="item.offset"
				:vid="index"
			>
			</el-amap-marker>
			<!-- 覆盖物 - 停车场 - 车辆数 -->
			<el-amap-marker
				v-for="(item, index) in parking"
				:key="item.id + '-2'"
				:content="item.text"
				:position="item.position" 
				:events="item.events"
				:offset="item.tOffset"
				:vid="index"
			>
			</el-amap-marker>
		</el-amap>
	</div>
</template>
<script>
//npm方式
import {AMapManager, lazyAMapApiLoaderInstance} from "vue-amap";
import {selfLocation} from "./location"
import {Walking} from "./walking"
let amapManager = new AMapManager() // 新建生成地图画布
export default {
	name: "Amap",
	data() {
		let self = this
		return {
			map: null,
			amapManager,
			center: [118.12464,24.458289],
			zoom: 18,
			events: {
				// o是高德地图的实例，通过这种方法可以将原生SDK和vue-amap结合起来使用
				init(o) {
					// 这样就可以使用高德地图原生的方法了
					lazyAMapApiLoaderInstance.load().then(() => {
						self.initPage(); // 初始化数据self指向this
					});
				}
			},
			circle: [
				{
					center: [118.12464,24.458289],
					radius: 4,
					color: "#393e43",
					strokeOpacity: "0.2",
					strokeWeight: "30"
				}
			]
			// parking: []
		}
	},
	methods: {
		initPage() {
			this.map = amapManager.getMap();

			//地图加载完成
			this.$emit("callback", {
				function: "loadMap"
			})

			this.selfLocation2();

			// let marker = new AMap.Marker({
			// 	position: [121.499855,31.237651]
			// });·	
			// // 覆盖物	
			// marker.setMap(this.map);
			// console.log('11111111');
		},
		selfLocation2() {
			selfLocation({
				map: this.map,
				complete: (val) => this.onComplete(val)
			})
		},
		onComplete(data) {
	        const lng = data.position.lng;
	        const lat = data.position.lat;	
	        this.circle[0].center = [ lng, lat ];
	        console.log([lng, lat])	
			console.log("获取当前位置成功");
		},
		handlerWalking() {
			Walking({
				map: this.map,
				position_start: [118.12464,24.458289],
				position_end: [118.098332,24.456609]
			})
		},
		error(err) {
			console.log("获取当前位置失败");
		},
		// parkingData(data) {
		// 	this.parking = data;
		// }
	},
	props: {
		parking: {
			type: Array,
			default: () => {[]}
		}
	},
	mounted() {
		// 高德地图原生SDK新建画布
		// lazyAMapApiLoaderInstance.load().then(() => {
		// 	this.map = new AMap.Map('amapContainer', {
		// 		zoom: this.zoom,
		// 		center: [121.499855,31.237651]
		// 	});
		// });
	},
	watch: {
		"$store.state.location.selfLocation": {
			handler(){
				this.selfLocation2();
			}
		}
	} 

}
</script>
<style lang="scss">
.amap-wrap {height: 100vh;}
</style>