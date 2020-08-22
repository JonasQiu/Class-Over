<template>
	<view>
		<button @click="showTips('success')">成功</button>
		<button @click="showTips('warning')">失败</button>
		<tip :isTips="isTips" :msg="msg" :type="type"></Tip>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isTips: false,
				msg: '',
				type: ''
			}
		},
		methods: {
			showTips(type) {
				if (type === 'success') {
					this.msg = '成功'
					this.type = 'green'
				} else if (type === 'warning') {
					this.msg = '失败'
					this.type = 'warning'
				}
				this.isTips = !this.isTips
			}
		}
	}
</script>
