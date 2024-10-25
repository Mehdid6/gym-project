<template>
  <div class="modal fade" id="addWorkoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">تمرین مورد نظر را وارد کنید .</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit" class="needs-validation">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Workout Title </label>
              <div class="col-sm-9 has-validation">
                <input v-model="title" type="text" class="form-control" id="inputEmail3" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-3 col-form-label">Workout Details</label>
              <div class="col-sm-9 has-validation">
                <textarea v-model="details" type="text" class="form-control" id="inputPassword3" required></textarea>
              </div>
            </div>


            <button type="submit" class="btn btn-success " >Add this workout</button>



            <button type="button" class="btn btn-secondary float-end" data-bs-dismiss="modal">بستن</button>

            <div class="alert alert-success" role="alert" v-show="showAlert" style="font-size: 15px;margin: 5px;padding: 1px ;width: 60px">
              DONE✅
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  <div class="add-btn " id="searchIcon" data-bs-toggle="modal" data-bs-target="#addWorkoutModal">
    <button class="btn btn-primary">add workout</button>
  </div>

  <div class="program">

    <div v-if="workouts.length">
      <div v-for="workout in workouts" :key="workout.id">
        <singleWorkout :workout="workout"  @delete="handleDelete"/>
      </div>
    </div>
  </div>

</template>
<script>
import singleWorkout from '../components/singleWorkout.vue'
export default {
  components:{singleWorkout},
  data(){
    return{
      workouts:[],
      title:'',
      details:'',
      showAlert:false,
    }
  },
  mounted() {
    fetch('http://localhost:3000/program')
        .then(res => res.json())
        .then(data => this.workouts = data)
        .catch(err => console.log(err.message));
  },
  methods:{
    handleDelete(id){
      this.workouts=this.workouts.filter(item=>item.id !== id)
    },
    handleSubmit(){
      if (this.title.length>2&&this.details.length>2){
        let workout={
          title:this.title,
          details:this.details
        }
        fetch('http://localhost:3000/program',{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(workout)
        })
        this.title="";
        this.details='';
        this.showAlert=true;
        setTimeout(()=>this.showAlert=false,3000)
      }
      fetch('http://localhost:3000/program')
          .then(res => res.json())
          .then(data => this.workouts = data)
          .catch(err => console.log(err.message));



    }
  }

}
</script>
<style scoped>
.program{
  display: flex;
  justify-content: center;
}
.add-btn{
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>