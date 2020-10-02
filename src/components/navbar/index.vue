<template>
	<div class="navbar">
		<ul>
			<li><i class="icon icon-help"></i></li>
			<li><i class="icon icon-search"></i></li>
			<li>
				<a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
			</li>
			<li><i class="icon icon-location"></i></li>
			<li><i class="icon icon-user"></i></li>
		</ul>
	</div>
</template>
<script>
//npm方式
export default {
	name: "Navbar",
	data() {
		return {}
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
	}
}
.select-car-btn {
	display: inline-block;
	width: 240px;
	height: 84px;
	margin: 0 17px;		
	border-radius: 100px;
	line-height: 84px;
	text-align: center;
	color: #fff;
	font-size: 26px;
	font-weight: 300;
	background-color: $color-main;

}
</style>