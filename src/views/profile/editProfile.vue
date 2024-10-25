<template>
  <div class=" god">
    <div class="row d-flex justify-content-evenly" id="son">
      <div class="col-12 col-sm-8" id="main">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phone Number</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">User Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" required>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" required>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-12 col-sm-3" id="side">
        <div class="sub-menu-wrap" id="subMenu" >
          <div class="user-info">
            <img src="../../assets/user-shape.png">
            <br>
            <h2>Lionel Messi</h2>
          </div>
          <hr>
          <div class="sub-menu">

            <a href="/profile" class="sub-menu-link " >
              <img src="../../assets/user-shape.png">
              <p>داشبورد</p>
              <span> > </span>
            </a>
            <a href="/profile/editProfile" class="sub-menu-link active">
              <img src="../../assets/font-selection-editor.png">
              <p>ویرایش پروفایل</p>
              <span> > </span>
            </a>
            <a href="/profile/foodTrainProgram" class="sub-menu-link">
              <img src="../../assets/list-with-dots.png">
              <p>برنامه غذایی و تمرینی</p>
              <span> > </span>
            </a>
            <a href="#" class="sub-menu-link">
              <img src="../../assets/sign-out-option.png">
              <p>خروج</p>
              <span> > </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {

  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style scoped>
.god{
  background: rgba(47,0,1,0.65);
  width: 100%;
  min-width: 300px;
  display: flex;
  justify-content: space-evenly;
  min-height: 100vh;
  z-index: 0;
}
#son{
  width: 90%;
}
#side,#main{
  margin: 50px 0;
  border-radius: 20px;
  box-shadow: 3px 13px 19px 4px rgba(0, 0, 0, 0.7);
}
#side{
  background:rgba(0,0,0,0.65);
  position: relative;
  min-height: 500px;

}
#main{
  background:rgba(0,0,0,0.55);
  min-height: 500px;
  color: white;
  padding: 10px 5%;
}
form input{
  background: #cccccc;
}
.sub-menu-wrap{
  direction: rtl;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: max-height 0.5s;
  margin-bottom: 500px;
  padding-right: 5px;
  margin-left: -8px;
}

.sub-menu{

  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;
}
.user-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.user-info h2{
  font-weight: 500;
  font-size: 20px;
  color: white;
}
.user-info img{
  width: 40px;
  border-radius: 50%;
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
  font-size: 1.4rem;
  font-weight: bold;
}
.sub-menu-link img{
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 5px;
  margin:0 10px;
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
@media (max-width: 1000px) {
  .user-info h2{
    font-weight: 500;
    font-size: 15px;
  }
  .sub-menu-link p{
    font-size: 1rem;
  }
  .sub-menu-link img{
    width: 25px;
    margin:0 5px;
  }
  #son{
    width: 90%;
  }
  .sub-menu-link span{
    font-size: 15px;
  }
}
</style>