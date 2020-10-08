<template>
	<div class="user-container">
		<Back column="安全设置"/>
		<div class="cars-form-ui">
			<el-form ref="form" :model="form">
				<el-form-item>
					<el-input v-model="originWord" placeholder="原始密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="newWord" placeholder="新密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="repeatWord" placeholder="确认密码"></el-input>
				</el-form-item>
				<el-form-item>
					<button type="button" class="button-vcode">获取验证码</button>
					<el-input v-model="vCode" placeholder="验证码"></el-input>
				</el-form-item>												
				<el-form-item>
					<el-button type="primary" @click="onSubmit" class="button-establish">立即创建</el-button>
					<!-- <el-button>取消</el-button> -->
				</el-form-item>
			</el-form>			
		</div>
	
	</div>

</template>
<script>
//npm方式
export default {
	name: "User",
	data() {
		return {
			originWord: "",
			newWord: "",
			repeatWord: "",
			vCode: "",

		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		}
	}
}
</script>
<style lang="scss">
</style>