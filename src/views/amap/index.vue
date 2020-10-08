<template>
	<div class="amap-wrap">
		<el-amap vid="amapContainer" :amap-manager="amapManager"  :zoom="zoom" :events="events" class="amap-demo">
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
		</el-amap>
	</div>
</template>
<script>
//npm方式
import {AMapManager, lazyAMapApiLoaderInstance} from "vue-amap";

let amapManager = new AMapManager() // 新建生成地图画布
export default {
	name: "Amap",
	data() {
		let self = this
		return {
			map: null,
			amapManager,
			center: [121.499855,31.237651],
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
		}
	},
	methods: {
		initPage() {
			this.map = amapManager.getMap();

			// 地图加载完成
			this.$emit("callback", {
				function: "loadMap"
			})

	        var geolocation = new AMap.Geolocation({
	            enableHighAccuracy: true,//是否使用高精度定位，默认:true
	            timeout: 10000,          //超过10秒后停止定位，默认：5s
	            buttonPosition:'RB',    //定位按钮的停靠位置
	            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
	            markerOptions: {
	            	content: " "
	            }
	        });
	        this.map.addControl(geolocation);
	        geolocation.getCurrentPosition((status,result) => {
	            if(status=='complete'){
	            	console.log("11111111");
	                const lng = result.position.lng;
	                const lat = result.position.lat;
	                this.circle[0].center = [lng,lat];
	            }else{
	                // onError(result)
	                console.log("222222");
	    //             alert(JSON.stringify(result));
					// document.getElementById('tip').innerHTML = '定位失败';
	            }
	        });

			// let marker = new AMap.Marker({
			// 	position: [121.499855,31.237651]
			// });
			// // 覆盖物	
			// marker.setMap(this.map);
			// console.log('11111111');
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
	}
}
</script>
<style lang="scss">
.amap-wrap {height: 100vh;}
</style>