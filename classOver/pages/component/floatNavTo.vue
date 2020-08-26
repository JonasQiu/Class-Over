<template>
	<view class="float bg-cyan">
		<!-- 回到首页 -->
    <view class=" cuIcon-home" @click="navHome"></view>
    <!-- 回到上一个页面，包括不小心回到首页，想回到刚刚那个页面 -->
    <view class=" cuIcon-pullleft" @click="navNext"></view>
    <!-- 回到下一个页面，包括不小心回到首页，想回到刚刚那个页面 -->
    <view class=" cuIcon-pullright" @click="navPrev"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
      // 去选择平台页面
      navHome(e){
        uni.navigateTo({
          url:'../page/choosePlat?isNav=true'
        })
      },
      // 去路由的上一个地方
      navNext(e){
        uni.navigateBack({
          delta:1
        })
      },
      // 去路由的下一个地方
      navPrev(e){
        uni.navigateBack({
          delta:-1
        })
      }
		}
	}
</script>

<style>
  .float{
    padding: 1vh 1vw;
    border-radius: 15px;
    text-align: center;
    font-size: 30px;
    color: #FFFFFF;
    position: fixed;
    right: 10px;
    bottom: 20vh;
  }
</style>
