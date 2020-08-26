<template>
  <view class="wrap animation-scale-up" >
    <view class="in-wrap">
      <h3>欢迎</h3>
      <view class="input-wrap">
        <view class="phone-text">手机号：</view>
        <input type="text" @input="inputPhone"  name="phone" :value="phone" class="input" placeholder="请输入手机号"></input>
      </view>
      <view class="input-wrap">
        <view class="pass-text">通行码：</view>
        <input type="text" @input="inputPassNum" password name="passNum" :value="passNum" class="input" placeholder="请输入通行码"></input>
      </view>
      <button @click="loginUser" class="bg-blue login">登录</button>
      </view>
  </view>
</template>

<script>
  // 根据手机号、通行码，通过则绑定跳转,且将手机号、通行码进行本地缓存，在onload上获取
  let key=null;
export default {
  data () {
    return {
      phone: '',
      passNum: '',
      // 判断是否有通行码
      isNav: false
    }
  },
  onLoad() {
    // 获取本地缓存
    key = JSON.parse(localStorage.getItem('loginUserAccount'))
    console.log(key)
    if(key){
      this.phone=key.phone;
      this.passNum=key.passNum;
    }
  },
  methods: {
    // 获取手机号
    inputPhone (e) {
      this.phone = e.detail.value
    },
    // 获取通行码
    inputPassNum (e) {
      this.passNum = e.detail.value
    },
    // 根据手机号，通行码，验证，通过则登录跳转
    loginUser (e) {
      if(key && this.phone==key.phone){
        this.isNav = true
        uni.navigateTo({
          // url带参传递，是否有通行码，来确定页面是否展示
          url: `../page/choosePlat?isNav=${this.isNav}`
        })
      }else{
        let setStorage={}
        if (this.phone && this.passNum) {
          this.isNav = true;
          setStorage.phone=this.phone;
          setStorage.passNum=this.passNum;
          localStorage.setItem('loginUserAccount',JSON.stringify(setStorage))
          uni.navigateTo({
            // url带参传递，是否有通行码，来确定页面是否展示
            url: `../page/choosePlat?isNav=${this.isNav}`
          })
        } else {
          alert('请先登录')
          return;
        }
      }
    }
  }
}
</script>

<style>
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
  h3{
    text-align: center;
    font-size: 45px;
    margin-bottom: 10vh;
    color: #666;
    letter-spacing: 8px;
  }
  .in-wrap{
    margin-top: 10vh;
    margin-bottom: 3vh;
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
  .login{
    margin-top: 7vh;
    border-radius: 70px;
  }
</style>
