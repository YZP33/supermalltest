<template>
	<div>
		<section class="cars-item">
			<header>
				<h4 class="cars-logo">
					<img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
					<span class="name">Mustang 2019款</span>
				</h4>
				<p class="cars-attr">
					<span>新能源汽车 5坐</span>
				</p>
			</header>
			<div class="cars-content">
				<div class="info">
					<div>
						<h4 class="car-number">闽 B765NB</h4>
						<div>
							<ul class="car-electric active-li-3">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>	
							<p class="distance">
								<sub>约</sub>
								<strong>600</strong>
								<sub>公里</sub>
							</p>
						</div>
					</div>
				</div>
				<img src="../../assets/images/pic001.jpg" alt="">
			</div>
			<footer>
				<a href="javascript: void(0);" class="parking-link">某某停车场</a>
			</footer>
		</section>
		<section class="cars-item cars-detailed" :style="'height:' + height">
			<h4 class="column">
				某某停车场
				<i class="close"></i>
			</h4>

			<header>
				<h4 class="cars-logo">
					<img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
					<span class="name">Mustang 2019款</span>
				</h4>
				<p class="cars-attr">
					<span>新能源汽车 5坐</span>
				</p>
			</header>
			<img src="../../assets/images/pic001.jpg" alt="" width="100%">
			<div class="clearfix">
				<div class="pull-left fs-24">闽 B765NB</div>
				<p class="distance pull-right">
					<sub>约</sub>
					<strong>600</strong>
					<sub>公里</sub>
				</p>
			</div>
			<div class="cars-electric-box">
				<div class="p-r">
					<span class="e-high" style="width: 80%;"></span>
					<span class="e-bg"></span>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
//npm方式
export default {
	name: "CarList",
	props: {
		height: {
			type: String,
			default: "257px"
		}
	}
}
</script>
<style lang="scss">
	@import "./index.scss";
</style>