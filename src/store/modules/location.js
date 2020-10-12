const state = {
	selfLocation: true
}
// 通过mutations才能改state里的值
const mutations = {
	SELF_LOCATION(state) {
		state.selfLocation = !state.selfLocation;
	}
}
const actions = {}
const getters = {}

export default {
	// 关键字定义模块化,命名空间
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}