<template>
	<div class="user-container">
		<Back column="安全设置"/>
		<ul class="group-links">
			<router-link to="aa" tag="a" class="arrow">
				修改登录密码
			</router-link>
			<router-link to="aa" tag="a" class="arrow">
				设置资金密码
			</router-link>
			<router-link to="aa" tag="a" class="arrow">
				绑定手机号
			</router-link>
			<router-link to="aa" tag="a" class="arrow">
				绑定银行号
			</router-link>
		</ul>	
	</div>

</template>
<script>
//npm方式
export default {
	name: "User",
	data() {
		return {}
	}
}
</script>
<style lang="scss">
</style>