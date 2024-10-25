<template>
  <div class="body">
    <div class="container" ref="container">
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>ایجاد حساب</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i> </a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i> </a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i> </a>
          </div>
          <span>یا از حساب های کاربری خود استفاده کنید</span>
          <input type="text" placeholder="Name" ref="SignUpName" required>
          <input type="email" placeholder="Email" ref="SignUpEmail" required>
          <input type="password" placeholder="password"  @blur="checkPass"   ref="SignUpPass" required>
          <div class="alert alert-danger" role="alert" v-show="showAlert" style="font-size: 10px;margin: 1px;padding: 1px">
            حداقل ۶ کاراکتر شامل حروف بزرگ و کوچک و عدد
          </div>
          <button type="submit" @click="SignupBtn()">ثبت نام کنید</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>وارد شوید</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i> </a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i> </a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i> </a>
          </div>
          <span>یا از حساب های کاربری خود استفاده کنید</span>
          <input type="email" placeholder="Email" ref="SignUpEmail" required>
          <input type="password" placeholder="password" @blur="checkPass"   ref="SignUpPass"  required>
          <div class="alert alert-danger" role="alert" v-show="showAlert" style="font-size: 10px;margin: 1px;padding: 1px">
            حداقل ۶ کاراکتر شامل حروف بزرگ و کوچک و عدد
          </div>
          <a href="#" class="forgot">کلمه عبور خود را فراموش کرده اید؟</a>
          <button type="submit" @click="SignupBtn()">وارد شوید</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>خوش آمدید</h1>
            <p>حساب کاربری دارید ؟ </p>
            <button class="ghost" id="signIn" @click="doLeft">ورود</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>!سلام</h1>
            <p>اگر حساب کاربری ندارید ابتدا ثبت نام کنید .</p>
            <button class="ghost" id="signUp" @click="doRight">ثبت نام</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {

  data() {
    return {
      showAlert:false,
    }
  },
  methods:{
    doLeft(){
      this.$refs.container.classList.remove("right-panel-active")
    },
    doRight(){
      this.$refs.container.classList.add("right-panel-active")
    },
    checkPass(event){
      let t=event.target.value;
      let p=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      if(!p.test(t)){
        this.showAlert=true
      }else {
        this.showAlert=false
      }
    },
    SignupBtn(){
      if (this.$refs.SignUpPass.value==""){
        this.$refs.SignUpPass.classList.add('redBorder')
      }else {
        this.$refs.SignUpPass.classList.remove('redBorder')
      }
      if (this.$refs.SignUpEmail.value==""){
        this.$refs.SignUpEmail.classList.add('redBorder')
      }else {
        this.$refs.SignUpEmail.classList.remove('redBorder')
      }
      if (this.$refs.SignUpName.value==""){
        this.$refs.SignUpName.classList.add('redBorder')
      }else {
        this.$refs.SignUpName.classList.remove('redBorder')
      }
    },

  }
}
</script>

<style scoped>
.body{
  background: linear-gradient(109.6deg, rgb(6, 2, 2) 32.4%, rgb(137, 30, 47) 98.8%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: -20px 0 50px ;
  z-index: 2;
}
h1{
  font-weight: bold;
  margin: 0;
}
h2{
  text-align: center;
}
p{
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;

}
span{
  font-size: 12px;
}
a{
  color:#333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}
button{
  border-radius: 20px;
  border: 1px solid #ff4828;
  background-color: #ff4828;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

}
button:active{
  transform:scale(.95);
}
button:focus{
  outline: none;
}
button.ghost{
  background-color: transparent;
  border-color: #ffffff;
}
form{
  background-color: floralwhite;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}
input{
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}
.redBorder{
  box-shadow: 0px 0px 5px red;
}
.container{
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,.28),0 10px 10px rgba(0,0,0,.22) ;
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}
.form-container{
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
.sign-in-container{
  left: 0;
  width: 50%;
  z-index: 2;

}
.container.right-panel-active .sign-in-container{
  transform: translateX(100%);
}
.sign-up-container{
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}
.container.right-panel-active .sign-up-container{
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}
@keyframes show {
  0%, 49.99%{
    opacity: 0;
    z-index: 1;
  }
  50%, 100%{
    opacity: 1;
    z-index: 5;
  }
}
.overlay-container{
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}
.container.right-panel-active .overlay-container{
  transform: translateX(-100%);
}
.overlay{
  background: #ff416c;
  background: -webkit-linear-gradient(to right,#ff4828,#ff416c);
  background: linear-gradient(to right,#ff4828,#ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

}
.container.right-panel-active .overlay{
  transform: translateX(50%);
}
.overlay-panel{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}
.overlay-left{
  transform: translateX(-20%);
}
.container.right-panel-active .overlay-left{
  transform: translateX(0);
}
.overlay-right{
  right: 0;
  transform: translateX(0);
}
.container.right-panel-active .overlay-right{
  transform: translateX(20%);
}
.social-container{
  margin: 20px 0;
}
.social-container a{
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
.forgot{
  font-size: 10px;
}
@media (max-width: 700px) {
  h1{
    font-size: 20px;
  }
  .container{
    max-width: 90%;
  }
  form{
    padding: 0 5px;
  }
  p{
    font-size: 12px;
  }
  span{
    font-size: 10px;
  }
  a{
    font-size: 10px;
  }
  button{
    font-size: 10px;
  }

}
</style>