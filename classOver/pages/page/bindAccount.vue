<template>
  <view>
    <view class="wrap" v-if="isNav">
        <h1>{{plat==0?'绑定安全教育平台账号':'公需课平台'}}</h1>
        <view class="input-wrap">
          <view class="phone-text">账号：</view>
          <input type="text" @input="inputAccount"   class="input" placeholder="请输入账号"></input>
        </view>
        <view class="input-wrap">
          <view class="pass-text">密码：</view>
          <input type="text" @input="inputPassWord" password  class="input" placeholder="请输入密码"></input>
        </view>
        <view class="input-wrap" v-if="plat==1">
          <view class="pass-text">验证码：</view>
          <input type="text" @input="inputsecurityCode"  class="input" placeholder="请输入验证码"></input>
        </view>
        <button @click="bindUser" class="bg-blue bind">绑定</button>
        </form>
      </view>
    <view v-else class="noNav" @click="navToHome">
      <h1>请点击我,进行登录</h1>
    </view>
  </view>
</template>

<script>
  let cookieVal=null;
	export default {
    onLoad(e) {
      // 获取参数的平台，用于判断是哪个平台,0:安全教育平台，1:公需课平台
      this.plat=e.plat;
      this.isNav=e.isNav;
      // 判断是否存在cooike,用于下次自动登录
      // cookieVal=getCookie()
      // console.log(cookieVal)
    },
		data() {
			return {
        plat:null,
        account:null,
        password:null,
        securityCode:null,
        isNav:false
			}
		},
		methods: {
      // 获取账号
      inputAccount(e){
        this.account=e.detail.value;
      },
      // 获取密码
      inputPassWord(e){
        this.password=e.detail.value;
      },
      // 获取验证码
      inputsecurityCode(e){
        this.securityCode=e.detail.value;
      },
      // 判断平台类型，根据账号，密码，或验证码，通过则绑定跳转
      bindUser(e){
       if(this.plat==0){//安全教育平台
         if(this.account&&this.password){
          uni.navigateTo({
            url:`../page/activePage?plat=0&isNav=${this.isNav}&isNav=${this.isNav}`
          })
         }else{
           alert('绑定失败')
         }
       }else{//公需课平台
         if(this.account&&this.password&&this.securityCode){
          uni.navigateTo({
            url:`../page/activePage?plat=1&isNav=${this.isNav}`
          })
         }else{
           alert('绑定失败')
         }
       }
      },
      // 获取cookie
      getCookie(name){
      		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      		if(arr=document.cookie.match(reg))
      		return unescape(arr[2]);
      		else
      		return null;
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
  h1{
    height: 20vh;
    line-height: 20vh;
    text-align: center;
  }
  .wrap{
    padding: 0 4vw;
    padding-top: 5vh;
  }
  .input-wrap{
    font-size: 18px;
    color: #007AFF;
  }
  .phone-text,.pass-text{
    padding-left: 2vw;
    height: 5vh;
    line-height: 5vh;
  }
  .input{
    color: #000;
    height: 6vh;
    margin-bottom: 2vh;
    border:1px solid #007AFF;
    padding-left: 4vw;
    border-radius: 10px;
  }
  .bind{
    margin-top: 4vh;
  }
  .noNav{
    padding-top: 30vh;
  }
</style>
