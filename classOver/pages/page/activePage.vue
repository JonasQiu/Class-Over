<template>
  <view>
    <view v-if="isNav">
      <!-- 整个页面加载中，由于切换导航需要此组件，则需要在切换组件的时候改变isLoading -->
      <loading v-if="isLoading"></loading>
      <!-- 加载完毕显示 -->
      <scroll-view v-else>
        <!-- 导航条 -->
        <scroll-view scroll-x class="bg-cyan text-white nav text-center">
          <view class="cu-item" :class="0==TabCur?'cur':''" @tap="tabSelect" data-id="0">
            <text class="cuIcon-camerafill text"></text><text>开通业务</text>
          </view>
          <view class="cu-item" :class="1==TabCur?'cur':''" @tap="tabSelect" data-id="1">
            <text class="cuIcon-clothesfill text"></text><text>查询业务</text>
          </view>
        </scroll-view>
        <!-- 开通服务。当前选择的id=0。根据平台的0/1，来确定是哪个平台 -->
        <view class="open-class" v-if="TabCur==0">
          <!-- 校安，展示活动信息列表 -->
          <view class="school-active" v-if="plat==0">
            校安，展示活动信息列表
          </view>
          <!-- 公需课，展示可选择的课程信息 -->
          <view class="public-choose-class" v-else-if="plat==1">
            公需课，展示可选择的课程信息
          </view>
        </view>
        <!-- 查询服务。当前选择的id=1。根据平台的0/1，来确定是哪个平台 -->
        <view class="search-class" v-else-if="TabCur==1">
          查询服务
        </view>
        <!-- 底部开通平台刷客服务 -->
        <view class="dealClass bg-cyan" @click="navToOpenClass">
          开通 <text style="font-size: 18px; margin: 0 3vw;">{{plat==0?'校园安全平台':'公需课平台'}}</text> 刷课服务
        </view>
        <!-- 悬浮回到首页(平台选择),返回上一个页面,回到顶部 -->
        <float-nav-to></float-nav-to>
      </scroll-view>
    </view>

    <view v-else class="noNav" @click="navToHome">      <h1>请点击我,进行登录</h1>    </view>
  </view>
</template>

<script>
	export default {
    onLoad(e) {
      // 获取参数的平台，用于判断是哪个平台,0:安全教育平台，1:公需课平台
      this.plat=e.plat;
      this.isNav=e.isNav;
      // 测试
      this.isFalse()
    },
		data() {
			return {
				plat:null,
        TabCur: 0,
        isNav:false,
        isLoading:true
			}
		},
		methods: {
      // 测试使用的,将isLoading改为false
      isFalse(){
        // 加载完毕，更改isLoading
        setTimeout(()=>{
          this.isLoading=false
        },1000)
      },
      // 导航栏选择
      tabSelect(e) {
      	this.TabCur = e.currentTarget.dataset.id;
      	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
        this.isLoading=true;
        // 测试
        this.isFalse()
      },
      // 跳转开通课程的详情页
      navToOpenClass(e){
        uni.navigateTo({
          // 校安的服务正常打开订单详情页
          // 公需课，则需要将本页面选择的课程在链接中，进行发送
          url:`./orderDetail?plat=${this.plat}&chooseClass=1&&isNav=${this.isNav}`
        })
      },
      // 点我回到首页
      navToHome(){
        uni.navigateTo({
          url:`../index/index`
        })
      }
		}
	}
</script>

<style>
.cu-item .text{
  padding-right: 2vw;
}
.noNav{
  text-align: center;
    padding-top: 30vh;
}
.dealClass{
  position: fixed;
  bottom: 2vh;
  border-radius: 20px;
  left: 0;
  right: 0;
  height: 7vh;
  text-align: center;
  margin: 0 2vw;
  line-height: 7vh;
}
</style>
