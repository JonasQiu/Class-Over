<template>
	<view class="float">
		<!-- 回到首页 -->
    <view class="text-gray cuIcon-homefill" @click="navHome"></view>
    <!-- 返回顶部 -->
    <view class="text-gray cuIcon-top" @click="goTop" v-if="isTop"></view>
    <!-- 回到上一个页面，包括不小心回到首页，想回到刚刚那个页面 -->
    <view class="text-gray cuIcon-pullleft" @click="navNext"></view>
    <!-- 回到下一个页面，包括不小心回到首页，想回到刚刚那个页面 -->
    <view class="text-gray cuIcon-pullright" @click="navPrev"></view>
	</view>
</template>

<script>
	export default {
    props:{
      isTop:Boolean,
      default:false
    },
		data() {
			return {

			}
		},
		methods: {
      // 去选择平台页面
      navHome(e){
        uni.navigateTo({
          url:'../page/choosePlat'
        })
      },
      // scroll回到顶部
      goTop(e){
        // 父组件使用方法:v-on:goTop="getTop",函数:getTop(e){
        // this.scrollTop=e
        // }
        uni.$emit(goTop,0)
      },
      // 去路由的上一个地方
      navNext(e){
        console.log(getCurrentPages())
        uni.navigateBack({
          delta:getCurrentPages().length-1
        })
      },
      // 去路由的下一个地方
      navPrev(e){
        uni.navigateBack({
          delta:getCurrentPages().length+1
        })
      }
		}
	}
</script>

<style>
  .float{
    width: 35px;
    text-align: center;
    display: flex;
    font-size: 30px;
    flex-direction: column;
    color: #FFFFFF;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    right: 10px;
    bottom: 50px;
  }
</style>
