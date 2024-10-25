

<template>
  <div class="body">

<div class="row d-flex justify-content-center align-items-center">
  <div class="col-1"></div>
  <div class="col-12 col-sm-8 m-2" id="main" >
    <div class="accordion mb-5 " id="accordionExample" data-bs-theme="dark">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           فهرست مطالب
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            آیا به تازگی تصمیم گرفته‌اید که ورزش کنید و به دنبال یک برنامه بدنسازی مبتدی می‌گردید؟ آیا چند ماهی است که ورزش می‌کنید و اکنون می‌خواهید برنامه‌تان را حرفه‌ای‌تر کنید؟ اصلا ویژگی‌های یک برنامه بدنسازی موثر و خوب چیست و ما باید با چه برنامه‌ای کار کنیم تا بهترین نتیجه را بگیریم؟

            در این مطلب، هم برای ورزشکاران مبتدی‌ها و هم برای ورزشکاران حرفه‌ای‌، یک نمونه برنامه بدنسازی می‌آوریم و جزییات برنامه را به طور کامل توضیح خواهیم داد.          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            درباره ما
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            جدیدترین ها
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    <h3>مکمل های غذایی</h3>

    <div class="slider">

      <div class="card-wrapper">

        <swiper
            :slidesPerView="ns"
            :spaceBetween="30"
            :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter:true,
    }"
            :pagination="{
      clickable: true,
    }"
            :modules="modules"
            class="mySwiper"
        >
          <swiper-slide>
            <div class="card">
              <div class="image-box">
                <img src="@/assets/robert-katzki-fyHkeWGOpHM-unsplash.jpg">
              </div>
              <div class="details">
                <h3>lorem lorem</h3>
                <h4>lorem lorem lorem lorem lorem lorem</h4>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="image-box">
                <img src="@/assets/robert-katzki-fyHkeWGOpHM-unsplash.jpg">
              </div>
              <div class="details">
                <h3>lorem lorem</h3>
                <h4>lorem lorem lorem lorem lorem lorem</h4>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="image-box">
                <img src="@/assets/robert-katzki-fyHkeWGOpHM-unsplash.jpg">
              </div>
              <div class="details">
                <h3>lorem lorem</h3>
                <h4>lorem lorem lorem lorem lorem lorem</h4>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="image-box">
                <img src="@/assets/robert-katzki-fyHkeWGOpHM-unsplash.jpg">
              </div>
              <div class="details">
                <h3>lorem lorem</h3>
                <h4>lorem lorem lorem lorem lorem lorem</h4>
              </div>
            </div>
          </swiper-slide>

        </swiper>
      </div>
    </div>
  </div>
  <div class="col-8 col-sm-2">
    <div class="news">
      <div class="sub-menu-wrap" id="subMenu" >
        <div class="title">
          <br>
          <h2>جدید ترین ها</h2>
        </div>
        <hr>
        <div class="sub-menu">

          <a href="/profile" class="sub-menu-link active" >
            <p>داشبورد</p>
            <span> > </span>
          </a>
          <a href="/profile/editProfile" class="sub-menu-link">
            <p>ویرایش پروفایل</p>
            <span> > </span>
          </a>
          <a href="/profile/foodTrainProgram" class="sub-menu-link">
            <p>برنامه غذایی و تمرینی</p>
            <span> > </span>
          </a>
          <a href="#" class="sub-menu-link">
            <p>خروج</p>
            <span> > </span>
          </a>
        </div>
      </div>
    </div>
  </div>

</div>

  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay ,FreeMode, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    setInterval(()=>{
      this.siz=window.innerWidth
      if (this.siz>=768){
        this.ns=3
      }else if(this.siz<768 &&this.siz>=576){
        this.ns=2
      }else {
        this.ns=1
      }
    },10)


  },

  data(){
    return{
      ns:"6",
      siz:"",

    }},
  setup() {
    return {
      modules: [Autoplay ,FreeMode, Pagination],
    };
  },
};
</script>
<style scoped>
.body{
  text-align: center;
  background: linear-gradient(109.6deg, rgb(6, 2, 2) 32.4%, rgb(137, 30, 47) 98.8%);
}
#main{
  color: white;
  margin: 50px 0;
  border-radius: 20px;
  box-shadow: 3px 13px 19px 4px rgba(0, 0, 0, 0.7);
  background:rgba(0,0,0,0.55);
  padding-top: 30px;
  z-index: 0;
  direction: rtl;
}
.slider{
  display: flex;
  justify-content: center;
}
.card-wrapper{
  border: 2px solid #ffffff;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;

}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card{
  width: 300px;
  min-width: 200px;
  border-radius: 8px;

  display: flex;
  margin-bottom: 50px;
  margin-top: 20px;
  box-shadow: 0 14px 28px rgba(0,0,0,.28),0 10px 10px rgba(0,0,0,.22) ;
  transition: .5s;

}
.card:hover{
  transform: translateY(-10px);
  box-shadow: 0 14px 28px rgba(0,0,0,.28),0 10px 50px rgba(0,0,0,.22) ;
}
.card .image-box{
  height: 200px;
}
.card .image-box img{
  height: 100%;
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.card .details{
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 15px;
}
.card .details h3{
  font-size: 15px;
  font-weight: 500;
}
.card .details h4{
  font-size: 12px;
  font-weight: 400;
}
 h3{
  color: white;
}
.slider-learning .card-wrapper{
  border: 2px solid #673ab7;
}
.slider-articles h3{
  color: white;
}
.slider-articles .card-wrapper{
  border: 2px solid #01ab97;
}
.news{
  margin: 50px 0;
  border-radius: 20px;
  box-shadow: 3px 13px 19px 4px rgba(0, 0, 0, 0.7);
  background:rgba(0,0,0,0.65);
  position: relative;
  min-height: 500px;
  min-width: 200px;
}

.sub-menu-wrap{
  direction: rtl;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-bottom: 500px;
  padding-right: 5px;
  margin-left: -8px;
}

.sub-menu{

  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
}
.title{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.title h2{
  font-weight: 500;
  font-size: 20px;
  color: white;
}
.sub-menu hr{
  border: 0;
  height: 3px;
  width: 100%;
  background: white;

}
.sub-menu-link{
  display: flex;
  align-items: center;
  text-decoration: none;
  color:white;
  border-bottom: rgba(199,199,199,0.86) 2px solid;
}

.sub-menu-link p{
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
}

.sub-menu-link span{
  font-size: 22px;
  transition: transform 0.5s;
}
.sub-menu-link:hover span,.sub-menu-link.active span{
  transform: translateX(-2px);
  color: goldenrod;
}
.sub-menu-link:hover p,.sub-menu-link.active p{
  color: goldenrod;
}
.sub-menu-link:hover img,.sub-menu-link.active img{
  background: goldenrod;
}
.sub-menu-link:hover,.sub-menu-link.active{
  border-bottom: goldenrod 2px solid;
}
@media (max-width: 1000px){
  .card-wrapper{
    width: 95%;
  }
}

</style>