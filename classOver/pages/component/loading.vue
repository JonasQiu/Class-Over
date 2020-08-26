<template>
  <!-- 整个页面正在加载 -->
    <view class='cu-load load-modal animation-scale-up' v-if="isToast">
    	<view class='gray-text'>加载中...</view>
    </view>
</template>

<script>
	export default {
    /**
       * 组件的属性列表
       */
    props: {
      title: {
        type: String
      },
      content: {
        type: String
      },
      isToast: {
        type: Boolean,
        default:true
      }
    },
    onLoad() {
      console.log(11)
    },
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
.modal{
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
  z-index: 999;
}
</style>
