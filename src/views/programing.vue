<template>
  <div class="mainNav">

      <ul class="nav nav-underline nav-tabs justify-content-center" id="ul">
        <li class="nav-item">
          <a class="nav-link  " aria-current="page" href="#" @click="activate($event)">DAY 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="activate($event)">DAY 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="activate($event)">DAY 3</a>
        </li>

      </ul>
    <button class="btn btn-primary" @click="addDay">Add Day</button>
  </div>
  <router-view></router-view>
  <add-program></add-program>
</template>
<script>
import addProgram from '../components/addProgram.vue'
export default {
  components:{addProgram},
  data(){
    return{
      a:document.getElementsByClassName('nav-link'),
    }
  },
  methods:{
    addDay(){
      let ul=document.getElementById('ul');
      let li=document.createElement('li');
      li.innerHTML=    `
         <li class="nav-item">
          <a class="nav-link" href="#" @click="activate($event)" style="color: rgba(12, 5, 7, 0.65);">DAY ${ul.children.length+1}</a>
        </li>
      `
      ul.appendChild(li);
    },
    activate(e){
      Array.from(this.a).forEach(el=>{el.classList.remove('active');});
      e.target.classList.add('active');
    }
  },
  computed:{

  },
  mounted() {

  }

}
</script>
<style scoped>
.mainNav{
  display: flex;
  justify-content: center;
}
.mainNav button{
  margin-left: 50px;
}
.mainNav ul li{
  margin-left: 30px;
}
.mainNav ul li a{
  color: rgba(12, 5, 7, 0.65);
}
.nav-link.active{
font-size: 18px;
  transition: .2s font-size ease-in;
}
</style>