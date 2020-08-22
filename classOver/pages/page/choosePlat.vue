<template>
  <view>
    <view class="content" v-if="isNav">
      <view class="item" @click="navToEdu" style="margin-bottom: 4vh;">安全教育平台</view>
      <view class="item" @click="navToPub">公需课平台</view>
    </view>
    <view v-else class="noNav" @click="navToHome">
      <h1>请点击我,进行登录</h1>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        isNav:false
			}
		},
    onLoad(e) {
      this.isNav=e.isNav;
    },
		methods: {
      navToEdu(){
        uni.navigateTo({
          url:`./bindAccount?plat=0&isNav=${this.isNav}`
        })
      },
      navToPub(){
        uni.navigateTo({
          url:`./bindAccount?plat=1&isNav=${this.isNav}`
        })
      },
      navToHome(){
        uni.navigateTo({
          url:`../index/index`
        })
      }
		}
	}
</script>

<style>
  .content{
    text-align: center;
    font-weight: 700;
    color: #1CBBB4;
    font-size: 50rpx;
    padding-top: calc(35vh);
  }
  .item {
    padding: 20rpx 10rpx;
    border: 2rpx solid rgb(241, 241, 241);
    margin: 0 auto 30rpx;
    width: 60%;
    background: #fff;
    box-shadow: 5rpx 10rpx 10rpx #ccc;
    border-radius: 50rpx;
  }
  .noNav{
    padding-top: 30vh;
  }
</style>
