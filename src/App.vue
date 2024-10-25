<template>
  <div class="body">
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">دنبال چه چیزی هستید ؟</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <form class="form-control d-flex" style="border: none">
                <button class="btn btn-outline-danger" type="submit" id="button-addon1"> <img src="@/assets/magnifying-glass.png" /></button>
                <input type="text" class="form-control" style="direction: rtl" placeholder="جست و جو کنید" aria-label="Example text with button addon" aria-describedby="button-addon1">
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>

          </div>
        </div>
      </div>
    </div>
    <div class="god">
      <div class="logo">LOGO</div>
      <div id="signUp" class="p-2 m-2"><a href="/Log">ثبت نام <img src="@/assets/user-shape.png"></a></div>
      <div id="logIn" class="p-2 m-2"><a href="/Log">ورود <img src="@/assets/sign-in.png"></a></div>

      <div id="nav" class="d-flex align-items-center justify-content-between " @mouseleave="removeMenu" >
        <div class="icons">
          <div class=" " id="searchIcon" data-bs-toggle="modal" data-bs-target="#exampleModal">

            <img src="@/assets/magnifying-glass.png" />
            <img src="@/assets/search.png">
          </div>

          <div  id="callBox">
            <img src="@/assets/telephone-symbol-button.png" />
            <img src="@/assets/telephone-symbol-button-gold.png">
          </div>
          <div  id="basketBox">
            <img src="@/assets/shopping-cart-black-shape.png" />
            <img src="@/assets/shopping-cart-black-shape-gold.png">
          </div>
          <div >
          <div id="profile" @mouseover="addMenu">
            <img src="@/assets/user-shape.png">
            <span>user info</span>
          </div>
            <div class="sub-menu-wrap" id="subMenu" >
              <div class="sub-menu">
                <div class="user-info">
                  <img src="@/assets/user-shape.png">
                  <h2>Lionel Messi</h2>
                </div>
                <hr>
                <a href="/profile" class="sub-menu-link">
                  <img src="@/assets/user-shape.png">
                  <p>داشبورد</p>
                  <span> > </span>
                </a>
                <a href="/profile/editProfile" class="sub-menu-link">
                  <img src="@/assets/font-selection-editor.png">
                  <p>ویرایش پروفایل</p>
                  <span> > </span>
                </a>
                <a href="/profile/foodTrainProgram" class="sub-menu-link">
                  <img src="@/assets/list-with-dots.png">
                  <p>برنامه غذایی و تمرینی</p>
                  <span> > </span>
                </a>
                <a href="/" class="sub-menu-link">
                  <img src="@/assets/sign-out-option.png">
                  <p>خروج</p>
                  <span> > </span>
                </a>
              </div>
            </div>

        </div>
        </div>
        <div class="d-md-none justify-content-end mx-5 ">
          <img src="@/assets/menu.png" id="menu" @click="showTime">
        </div>



        <ul class=" d-none d-md-flex">
          <li class=" m-2 "><a href="/" class="active">صفحه اصلی <div><img src="@/assets/home.png" ></div></a></li>
          <li class=" m-2"><a href="/learningpackage"><div><img src="@/assets/arrow-down-sign-to-navigate.png"></div> مکمل های غذایی</a>
            <ul class="row row-cols-1">
              <li><a href="">پروتئین وی</a></li>
              <li><a href="">کراتین</a></li>
              <li><a href="">گینر</a></li>
              <li><a href="">سایر موارد</a></li>
            </ul>
          </li>
          <li class=" m-2"><a href="/articles"><div><img src="@/assets/arrow-down-sign-to-navigate.png"></div>اخبار و مقالات</a>
            <ul class="row row-cols-1">
              <li><a href="">اخبار</a></li>
              <li><a href="">مقالات تغذیه</a></li>
              <li><a href="">مقالات تمرینی</a></li>
              <li><a href="">سایر موارد</a></li>
            </ul>
          </li>
          <li class=" m-2"><a href="/programing"><div><img src="@/assets/arrow-down-sign-to-navigate.png"></div>برنامه تمرینی </a>
            <ul class="row row-cols-1">
              <li><a href="">درخواست برنامه تمرینی</a></li>
              <li><a href="">درخواست برنامه غذایی</a></li>
              <li><a href="">برنامه های دریافتی</a></li>
              <li><a href="">راهنما</a></li>
            </ul>
          </li>

          <li class=" m-2"><a href="/counseling">مشاوره</a></li>
        </ul>


      </div>
    </div>
    <div id="secondMenu" class="d-md-none " ref="secondMenu">
      <img src="@/assets/cross-mark-on-a-black-circle-background.png" @click="TimeUp" id="close">

      <ul class="">
        <li class=" m-2 "><a href="/" class="active"><div><img src="@/assets/home.png" ></div>صفحه اصلی </a></li>
        <li class=" m-2"><a   @click="acordionLearn"><div><img src="@/assets/down-filled-triangular-arrow.png" ref="Btn1"></div> مکمل های غذایی </a>
          <div class="">
            <ul class="row row-cols-1 " ref="learnBtn">
              <li><a href="">دوره ۱</a></li>
              <li><a href="">دوره ۲</a></li>
              <li><a href="">دوره ۳</a></li>
              <li><a href="">دوره ۴</a></li>
            </ul>
          </div>
        </li>
        <li class=" m-2"><a  @click="acordionArt" ><div><img src="@/assets/down-filled-triangular-arrow.png" ref="Btn4"></div>اخبار و مقالات</a>
          <ul class="row row-cols-1 " ref="art-btn">
            <li><a href="/articles">دوره ۱</a></li>
            <li><a href="">دوره ۲</a></li>
            <li><a href="">دوره ۳</a></li>
            <li><a href="">دوره ۴</a></li>
          </ul>
        </li>
        <li class=" m-2"><a @click="acordionBoors"><div><img src="@/assets/down-filled-triangular-arrow.png" ref="Btn2"></div>برنامه تمرینی</a>
          <ul class="row row-cols-1" ref="boorsBtn">
            <li><a href="">دوره ۱</a></li>
            <li><a href="">دوره ۲</a></li>
            <li><a href="">دوره ۳</a></li>
            <li><a href="">دوره ۴</a></li>
          </ul>
        </li>

        <li class=" m-2"><a href="">مشاوره</a></li>
      </ul>
    </div>


    <div class="main">
    <router-view/>
    </div>
    <div class="footer justify-content-end">
      <div class="">

        <div class="row row-cols-2">
          <a class="col"> اخبار و مقالات</a>
          <a class="col">مکمل های غذایی</a>
          <a class="col">برنامه تمرینی</a>
          <a class="col">مشاوره</a>
        </div>
      </div>
      <div class="social  ">
        <h3>ارتباط با ما</h3>
        <img src="@/assets/twitter.png">
        <img src="@/assets/telegram.png">
        <img src="@/assets/instagram.png">
        <img src="@/assets/linkedin.png">
        <img src="@/assets/whatsapp.png">
      </div>




    </div>
  </div>
</template>
<script>
import Home from "@/components/Home.vue";
export default {
components:{Home},
  data(){
    return{

    }
  },
  methods:{
    showTime(){
      this.$refs.secondMenu.style.right="0"

    },
    TimeUp(){
      this.$refs.secondMenu.style.right="-250px"

    },
    acordionLearn(){
      this.$refs.learnBtn.classList.toggle('sec-show');
      this.$refs.Btn1.classList.toggle('rotate')
    },
    acordionBoors(){
      this.$refs.boorsBtn.classList.toggle('sec-show');
      this.$refs.Btn2.classList.toggle('rotate')
    },
    acordionDigi(){
      this.$refs.digiBtn.classList.toggle('sec-show');
      this.$refs.Btn3.classList.toggle('rotate')
    },
    acordionArt(){
      this.$refs["art-btn"].classList.toggle('sec-show');
      this.$refs.Btn4.classList.toggle('rotate')
    },
    addMenu(){
      let subMenu=document.getElementById("subMenu");
      subMenu.classList.add('open-menu');
    },
    removeMenu(){
      let subMenu=document.getElementById("subMenu");
      subMenu.classList.remove('open-menu');
    }




  },

}
</script>
<style scoped>

.body{
  position: relative;
  width: 100%;
  overflow: hidden;
}
.main{
  min-height:60vh;
}
.god{
  width: 100%;
  box-sizing: border-box;
  min-height: 25vh;
  background: linear-gradient(109.6deg, rgb(6, 2, 2) 32.4%, rgb(137, 30, 47) 98.8%);
  background-position: center;
  background-size: cover;
  min-width: 300px;
  z-index: 3;
  position: relative;
  display: flex;
  justify-content: center;

}
#nav{
  background-image: linear-gradient(rgba(0,8,51,.5),rgba(0,8,51,.1)),url("assets/robert-katzki-fyHkeWGOpHM-unsplash.jpg") ;
  background-size:cover;
  flex-wrap: nowrap;
  position: relative;
  width: 98%;
  min-width: 300px;
  height: 60px;
  margin-top: 10vh;

  box-shadow: 0 14px 28px rgba(0,0,0,.28),0 10px 10px rgba(0,0,0,.22) ;

  border-radius: 5px;

}

#nav ul{
  width: 80%;
  margin-top:20px ;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: -35px;
}
#nav ul li{
  list-style: none;
  padding: 16px 0;
  position: relative;
  height: 100%;
  box-sizing: border-box;

}
#nav ul li a{
  color: black;

  font-size: 17px;
  text-decoration: none;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 3px;
  font-weight: bolder;
}

#nav ul li a img{
  width: 10px;
  margin-left: 2px;
}
#hm img{
  width: 20px;
}
#nav ul li a.active{
  font-size: 19px;
  color: white;
  transition: .2s;
  text-shadow: 4px 4px 10px black;
}
#nav ul li a.active img{
  width: 20px;
}
#nav ul li a:hover{
  color: white;
  transition: .2s;
  text-shadow: 4px 4px 10px black;
}
#nav ul li::after{
  content: '';
  width: 0%;
  height: 2px;

  background: white;
  display: block;
  margin: auto;
  opacity: 1;
  transition: .5s;
}
#nav ul li:hover::after{
  width: 100%;

}
#nav ul ul{
  position: absolute;
  top: 60px;
  right: 0;
  opacity: 0;
  transition: top .5s;
  visibility: hidden;

  width: 200px;
  background-image: linear-gradient(rgba(0,8,51,.5),rgba(0,8,51,.1)),url("assets/robert-katzki-fyHkeWGOpHM-unsplash.jpg") ;
  background-size:880%;
}

#nav ul li:hover >ul{
  opacity: 1;
  top:40px;
  visibility: visible;
}

#nav ul ul li{
  position: relative;
  margin: 0px;
  width: 150px;
  float: none;
  display: list-item;
  border-bottom: 1px solid black;
  width: 100%;
}
#menu{
  width: 35px;


  cursor: pointer;
}
#menu:hover{
  width: 40px;
}
#secondMenu{
  position: fixed;
  height: 900px;
  width: 250px;
  background: #1b1b1b;
  right: -250px;
  top: 0;
  z-index: 4;
  transition:.5s ease-in-out;
  display: block;


}
#secondMenu ul{
  width: 100%;
  height: 100%;
  list-style: none;
  background: #1b1b1b;


}

#secondMenu ul li ul li{
  border-bottom: 1px solid rgba(2555,255,255,.2);
  width: 100%;

}
#secondMenu ul li a,#secondMenu ul li button{
  color: white;
  margin: 0;
  text-decoration: none;
  font-weight: 600;
  padding-right: 30px;
  float: right;
  font-size: 18px;
  border-right: 3px solid transparent;
}
#secondMenu ul li ul li a{
  padding-right: 10px;
  margin:5px 0;
  font-size: 15px;
}
#secondMenu ul li ul{
  visibility: hidden;
  height: 0;
}
#secondMenu ul li ul.sec-show{
  visibility: visible;
  height: auto;

}
#secondMenu ul li a:hover{
  color: gold;
  background: #1e1e1e;
  border-right: 3px solid goldenrod;
}

#secondMenu ul li a img{
  width: 12px;
  margin-right: 8px;
  transition:.4s;

}
.rotate{
  transform: rotate(-180deg);
}

#secondMenu ul li a div{
  display: inline-block;
}

#close{
  width: 30px;
  background: crimson;
  padding: 3px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  cursor: pointer;
}
#secondMenu.showtime{
  display: block;
  right: 0;

}
#secondMenu.showOver{
  display: none;
  right: -250px;
}
#logIn,#signUp{
  background:rgba(255,255,255,.5);
  display: inline-block;
  border-radius:30px;
  float: right;
  cursor: pointer;
  font-size: 13px;
  position: absolute;
  font-weight: bold;
  transition: .2s;

}
#logIn{
  right: 10px;
}
#signUp{
  right: 80px;
}

#logIn img,#signUp img{
  width: 20px;
}
#logIn a,#signUp a{
  color: black;
  text-decoration: none;
}
#logIn:hover, #signUp:hover{
  font-size: 16px;
  box-shadow: 0 7px 40px darkcyan,0 5px 50px #58629b ;
}
#profile{
  background:rgba(255,255,255,.5);
  display: block;
  border-radius:30px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  transition: .2s;
  margin-left: 20px;
  padding: 5px;
  min-width: 110px;
}
#profile:hover{
  box-shadow: 0 2px 20px darkred,0 2px 30px crimson ;
}
#profile img{
  width: 20px;
  margin:0 10px;
}
.sub-menu-wrap{
  position: absolute;
  top: 80%;
  left: 150px;
  width: 320px;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s;
  z-index: 5;
}
.sub-menu-wrap.open-menu{
  max-height: 400px;
}
.sub-menu{
  background: white;
  padding: 20px;
  margin: 10px;
}
.user-info{
  display: flex;
  align-items: center;
}
.user-info h2{
  font-weight: 500;
  font-size: 20px;
}
.user-info img{
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.sub-menu hr{
  border: 0;
  height: 1px;
  width: 100%;
  background: #ccc;
  margin: 15px 0 10px;
}
.sub-menu-link{
  display: flex;
  align-items: center;
  text-decoration: none;
  color:#525252;
  margin: 12px 0;
}
.sub-menu-link p{
  width: 100%;
}
.sub-menu-link img{
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 5px;
  margin-right: 15px;
}
.sub-menu-link span{
  font-size: 22px;
  transition: transform 0.5s;
}
.sub-menu-link:hover span{
  transform: translateX(5px);
}
.sub-menu-link:hover p{
  font-weight: 600;
}
.logo{
  color: white;
  display: inline-flex;
  position:absolute;
  margin-top: 15px;
  left: 20px;
}
.icons{
  display: flex;
}
#searchIcon{
  margin-left: 20px;
}
#searchIcon img{
  width: 30px;
  cursor: pointer;
}
#searchIcon img:nth-child(2){
  display: none;
  transition: 5s;
}
#searchIcon:hover >:first-child{
  display: none;
}
#searchIcon:hover >:nth-child(2){
  display: block;

}
#button-addon1 img{
  width: 30px;
  transition: width .3s;
}
#button-addon1 img:hover{
  width: 35px;
}
#callBox{
  margin-left: 20px;

}
#callBox img{
  width: 30px;
  cursor: pointer;
}
#callBox img:nth-child(2){
  display: none;
  transition: 5s;
}
#callBox:hover >:first-child{
  display: none;
}
#callBox:hover >:nth-child(2){
  display: block;

}
#basketBox{
  margin-left: 20px;
}
#basketBox img{
  width: 30px;
  cursor: pointer;
}
#basketBox img:nth-child(2){
  display: none;
  transition: 5s;
}
#basketBox:hover >:first-child{
  display: none;
}
#basketBox:hover >:nth-child(2){
  display: block;

}
.footer{
  width: 100%;
  min-height: 20vh;
  background: linear-gradient(109.6deg, rgb(6, 2, 2) 32.4%, rgb(137, 30, 47) 98.8%);
  background-position: center;
  background-size: cover;
  min-width: 300px;
  display: flex;
  justify-content: right;
  padding-top: 5px;

}
.footer h4{
  color: white;
  margin-left: 80px;
}
.footer a{
  text-decoration: none;
  color: white;
  font-weight: bolder;

  cursor: pointer;
}
.footer a:hover{
  color: goldenrod;
}
.social{

}
.social h3{

  color: white;
  text-align: center;
}
.social img{
  width: 30px;
  margin: 5px;
  transition: width .2s;
}
.social img:hover{
  width: 35px;
  box-shadow: 0 7px 40px darkcyan,0 5px 50px #58629b ;
}
@media (max-width: 1000px) {
 .god{
   min-height: 10vh;
   padding-bottom: 20px;
 }
  #nav ul{
    width: 72%;
  }
  #nav ul li a {
    font-size: 16px;
    font-weight: bolder;
  }
  #nav ul li a.active{
    font-size: 18px;
  }
  .social img {
    width: 20px;
  }
  .social img:hover{
    width: 23px;
  }
  .sub-menu-wrap{
    left: 10%;
  }
  .footer h3,.footer h4{
    font-size: 20px;
  }
  .footer h4{
    margin-left: 50px;
  }
}
</style>
