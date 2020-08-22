<template>
  <!-- 弹窗提醒 -->
	<block>
		<view class='cys-tips-class cys-toptips' :class="['cys-'+type,show?'cys-top-show':'']">{{msg}}</view>
	</block>
</template>

<script>
	export default {
		name: "cysTips",
		data() {
			return {
				timer: null,
				show: false
			};
		},
		props: {
			isTips: {
				type: Boolean,
				default() {
					return false
				}
			},
			duration: {
				type: Number,
				default() {
					return 2000
				}
			},
			type: {
				type: String,
				default() {
					return 'green'
				}
			},
			msg: {
				typep: String,
				default() {
					return ''
				}
			}
		},
		watch: {
			isTips(bl) {
				this.showTips()
			}
		},
		methods: {
			showTips: function() {
				clearTimeout(this.timer);
				this.show = true;
				this.timer = setTimeout(() => {
					this.show = false;
					clearTimeout(this.timer);
					this.timer = null;
				}, this.duration);
			}
		}
	}
</script>

<style>
	.cys-toptips {
		width: 100%;
		padding: 18upx 30upx;
		box-sizing: border-box;
		position: fixed;
		z-index: 9999;
		color: #fff;
		font-size: 30upx;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		word-break: break-all;
		opacity: 0;
		transform: translateZ(0) translateY(-100%);
		transition: all 0.3s ease-in-out;
	}

	.cys-top-show {
		transform: translateZ(0) translateY(0);
		opacity: 1;
	}

	.cys-primary {
		background: #5677fc;
	}

	.cys-green {
		background: #19be6b;
	}

	.cys-warning {
		background: #FF0000;
	}

	.cys-danger {
		background: #ed3f14;
	}

	.cys-translucent {
		background: rgba(0, 0, 0, 0.7);
	}
</style>
