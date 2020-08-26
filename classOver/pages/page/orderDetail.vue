<template>
	<view>
    <view v-if="isNav">
      <loading v-if="isLoading"></loading>
      <view v-else>
        <!-- 校安，选择开通几个学期 -->
        <view class="" v-if="plat==0">
          校安
        </view>
        <!-- 公需课，统计用户在活动业务页选择的课程 -->
        <view class="" v-else-if="plat==1">

        </view>

        <!-- 选择是否开通短信通知服务 -->
        <view class="is-open-msg">

        </view>

        <!-- 提交订单 ,弹窗提示联系客服,支付订单金额 -->
        <view class="send-order bg-cyan" @click="sendOrder">
          
        </view>

        <!-- 判断是否交易成功,支付成功跳出交易成功窗口 -->
         <tip :isTips="isSuccess" :msg="msg" :type="type"></Tip>

        <!-- 悬浮回到首页(平台选择),返回上一个页面,回到顶部 -->
        <float-nav-to></float-nav-to>
      </view>
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
      // 加载完毕，更改isLoading
      setTimeout(()=>{
        this.isLoading=false
      },1000)
    },
		data() {
			return {
				plat:null,
        chooseClass:null,
        isSuccess:false,
        isNav:false,
        isLoading:true,
        msg:'',
        type:''
			}
		},
		methods: {
      // 点我回到首页
      navToHome(){
        uni.navigateTo({
          url:`../index/index`
        })
      },
      // 发送订单
      sendOrder(){
        // 检测订单是否支付成功
        if (this.type === 'success') {
					this.msg = '支付成功'
					this.type = 'green'
				} else if (this.type === 'warning') {
					this.msg = '支付失败'
					this.type = 'warning'
				}
      }
		}
	}
</script>

<style>
.noNav{
  text-align: center;
  padding-top: 30vh;
}
</style>
