<template>
	<div class="navbar">
		<ul>
			<li><i class="icon icon-w-44 icon-help"></i></li>
			<li><i class="icon icon-w-44 icon-search"></i></li>
			<li>
				<a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
			</li>
			<li><i class="icon icon-w-44 icon-location" @click="selfLocation"></i></li>
			<li><i class="icon icon-w-44 icon-user" @click="toUser"></i></li>
		</ul>
	</div>
</template>
<script>
//npm方式
export default {
	name: "Navbar",
	data() {
		return {}
	},
	methods: {
		toUser() {
			this.$router.push({
				name: "User"
			})
		},
		selfLocation() {
			// 调用Vuex中的location模块中的SELF_LOCATION方法
			this.$store.commit("location/SELF_LOCATION")
		}
	}
}
</script>
<style lang="scss">
.navbar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 86px;
	text-align: center;
	li {
		display: inline-block;
	}
	.icon {
		vertical-align: middle;	
		margin: 0 17px;
		cursor: pointer;
		border-radius: 100px; 	
		background-color: $color_main;
	}
}

</style>