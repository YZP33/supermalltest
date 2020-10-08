<template>
	<div class="header-back">
		<div class="back">
			<i class="icon"></i>
			<h4 class="title">{{ column }}</h4>
		</div>
	</div>
</template>
 
<script>
export default {
    name: 'Back',
    props: {
    	column: {
    		type: String,
    		default: ""
    	}
    },
	data() {
		return {

		}
	}
}
</script>
 
<style lang="scss" scoped>
.header-back {
	position: relative;
	padding-bottom: 147px;
}
.back {
	position: absolute;
	top: 21px;
	left: 0;
	right: 0;
	height: 40px;
	// background-color: #fff;
	line-height: 40px;
}
.title {
	font-size: 16px;
	margin-left: 33px;
	color: #fff;
}
.icon {
	width: 40px;
	height: 40px;
	position: absolute;
	left: 0;
	top: 0;
	// background-color: #fff;
	border-radius: 0;
	&:before {
		position: absolute;
		top: 12px;
		left: 0;
		content: "";
		display: block;
		width: 12px;
		height: 12px;
		border-left: 2px solid #00a3ff;
		border-top: 2px solid #00a3ff;
		@include webkit(transform, rotate(-45deg));
		cursor: pointer;

	}


}
</style>
