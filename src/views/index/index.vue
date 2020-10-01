<template>
	<div class="amap-wrap">
		<el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
		</el-amap>
	</div>
</template>
<script>
export default {
	name:"index",
	data() {
		return {
			zoom: 11,
			center: [121.499855,31.237651]
		}
	}
}
</script>
<style lang="scss">
.amap-wrap {height: 100vh;}
</style>