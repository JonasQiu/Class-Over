<template>
  <view class="animation-scale-up wrap">
    <back></back>
    <view class="in-wrap">
        <view v-if="isNav">
          <h1>{{plat==0?'绑定安全教育平台账号':'公需课平台'}}</h1>
          <view class="input-wrap">
            <view class="phone-text">账号：</view>
            <input type="text" @input="inputAccount" :value="account" class="input" placeholder="请输入账号"></input>
          </view>
          <view class="input-wrap">
            <view class="pass-text">密码：</view>
            <input type="text" @input="inputPassWord" password :value="password"  class="input" placeholder="请输入密码"></input>
          </view>
          <view class="input-wrap" v-if="plat==1">
            <view class="pass-text">验证码：</view>
            <input type="text" @input="inputsecurityCode" :value="securityCode" class="input" placeholder="请输入验证码"></input>
          </view>
          <button @click="bindUser" class="bg-blue bind">绑定</button>
          </form>
        </view>
        <view v-else class="noNav" @click="navToHome">
          <h1>请点击我,进行登录</h1>
        </view>
      </view>

  </view>
</template>

<script>
  // 该页面的账号密码、验证码进行本地缓存，下次获取到文本上
  let cookieVal=null;
  let key=null;
	export default {
    onLoad(e) {
      // 获取参数的平台，用于判断是哪个平台,0:安全教育平台，1:公需课平台
      this.plat=e.plat;
      this.isNav=e.isNav;
      // 获取本地缓存
      key = JSON.parse(localStorage.getItem('bindUserAccount'))
      if(key){
        if(this.plat==0){
          this.account=key[0].account;
          this.password=key[0].password;
        }
        if(this.plat==1){
          this.account=key[1].account;
          this.password=key[1].password;
          this.securityCode=key[1].securityCode;
        }
      }
      // 判断是否存在cooike,用于下次自动登录
      // cookieVal=getCookie()
      // console.log(cookieVal)
    },
		data() {
			return {
        plat:null,
        account:'',
        password:'',
        securityCode:'',
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
      // 判断平台类型，根据账号，密码，或验证码，通过则绑定跳转,且将账号，密码，或验证码进行本地缓存，在onload上获取
      bindUser(e){
        // 先判断本次账号是否和本地缓存的账号相同
       if(key && key.account==this.account){
         if(this.plat==0){//安全教育平台
             uni.navigateTo({
               url:`../page/activePage?plat=0&isNav=${this.isNav}`
             })
          }else{//公需课平台
             uni.navigateTo({
               url:`../page/activePage?plat=1&isNav=${this.isNav}`
             })
          }
         return;
       }else{
          let setStorage=[{},{}]
          if(this.plat==0){//安全教育平台
          // 设置安全教育平台的缓存
              setStorage[0].account=this.account;
              setStorage[0].password=this.password;
              if(key && key[1].account){
                setStorage[1].account=key[1].account;
                setStorage[1].password=key[1].password;
                setStorage[1].securityCode=key[1].securityCode;
              }
              localStorage.setItem('bindUserAccount',JSON.stringify(setStorage))
            if(this.account&&this.password){
              uni.navigateTo({
                url:`../page/activePage?plat=0&isNav=${this.isNav}`
              })
            }else{
              alert('绑定失败')
              return;
            }
          }
          if(this.plat==1){//公需课平台
          // 设置公需课的缓存
            setStorage[1].account=this.account;
            setStorage[1].password=this.password;
            setStorage[1].securityCode=this.securityCode;
            if(key && key[0].account){
              setStorage[0].account=key[0].account;
              setStorage[0].password=key[0].password;
            }
            localStorage.setItem('bindUserAccount',JSON.stringify(setStorage))
            if(this.account && this.password && this.securityCode){
              uni.navigateTo({
                url:`../page/activePage?plat=1&isNav=${this.isNav}`
              })
            }else{
              alert('绑定失败')
              return;
            }
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
  h1{
    text-align: center;
    font-size: 35px;
    margin-bottom: 8vh;
    color: #666;
    letter-spacing: 8px;
  }
  .wrap{
    /* margin-top: 5vh; */
    position: fixed;
    top: 5vh;
    right: 7vw;
    left: 7vw;
    height: 90vh;
    border-radius: 40px;
    padding:0 6vw;
    background-color: rgba(255,255,255,.1);
    box-shadow: -8px -8px 30px -10px #ddd, 16px 16px 30px -10px rgba(0, 0, 0, .15);
    border:1px solid #ddd;
  }
  .in-wrap{
    margin-top: 10vh;
    margin-bottom: vh;
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
    margin-bottom: 5vh;
    border:1px solid #007AFF;
    padding-left: 4vw;
    border-radius: 70px;
  }
  .bind{
    margin-top: 7vh;
    border-radius: 70px;
  }
  .noNav{
    text-align: center;
    padding-top: 30vh;
  }
</style>
