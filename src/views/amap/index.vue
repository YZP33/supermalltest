<template>
	<div class="amap-wrap">
		<el-amap vid="amapContainer" :events="events" class="amap-demo">
		</el-amap>
	</div>
</template>
<script>
//npm方式
import {AMapManager, lazyAMapApiLoaderInstance} from "vue-amap";
export default {
	name: "Amap",
	data() {
		return {
			map: null,
			zoom: 11,
			events: {}
		}
	},
	mounted() {
		lazyAMapApiLoaderInstance.load().then(() => {
			this.map = new AMap.Map('amapContainer', {
				zoom: this.zoom,
				center: [121.499855,31.237651]
			});
		});
	}
}
</script>
<style lang="scss">
.amap-wrap {height: 100vh;}
</style>