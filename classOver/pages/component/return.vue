<template>
	<!-- 是否返回 -->
  <view class="return text-white" v-if="isShow" @click="backTo">
    <text class="cuIcon-back"></text>
  </view>
</template>

<script>
	export default {
		data(){
      return{
        // 返回键是否显示
        isShow: false
      }
    },
    mounted() {
      if (getCurrentPages().length > 1) {
        this.isShow=true
      }
    },
    /**
     * 组件的方法列表
     */
    methods: {
      backTo(e) {
        uni.navigateBack({
          delta: 1
        });
      },
    }
	}
</script>

<style>
  /* 返回上一步 */
  .return {
    z-index: 9999;
    position: fixed;
    width: 70rpx;
    height: 70rpx;
    line-height: 70rpx;
    text-align: center;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    border-radius: 50%;
    top: 7px;
    left: 10px;
    font-size: 40rpx;
  }
</style>
