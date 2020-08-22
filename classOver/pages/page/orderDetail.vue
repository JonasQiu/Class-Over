<template>
	<view>
		<view class="" v-if="isNav">
      <!-- 校安，选择开通几个学期 -->
      <view class="" v-if="plat==0">

      </view>
      <!-- 公需课，统计用户在活动业务页选择的课程 -->
      <view class="" v-else-if="plat==1">

      </view>
      <!-- 选择是否开通短信通知服务 -->
      <view class="">

      </view>
      <!-- 提交订单 ,弹窗提示联系客服,支付订单金额,支付成功跳出交易成功窗口-->
      <view class="">

      </view>
      <!-- 判断是否交易成功 -->
      <view class="" v-if="isSuccess">

      </view>
      <!-- 悬浮回到首页(平台选择),返回上一个页面,回到顶部 -->
      <float-nav-to></float-nav-to>
		</view>
    <view v-else class="noNav" @click="navToHome">
      <h1>请点击我,进行登录</h1>
    </view>
	</view>
</template>

<script>
	export default {
    onLoad(e) {
      this.plat=e.plat;
      this.chooseClass=e.chooseClass;
      this.isNav=e.isNav;
    },
		data() {
			return {
				plat:null,
        chooseClass:null,
        isSuccess:false,
        isNav:false
			}
		},
		methods: {
      navToHome(){
        uni.navigateTo({
          url:`../index/index`
        })
      }
		}
	}
</script>

<style>
.noNav{
  padding-top: 30vh;
}
</style>
