<template>
  <div class="workout">
    <div class="actions">
      <h3 @click="toggleDetails">{{workout.title}}</h3>
      <div class="icons">
        <img src="../assets/font-selection-editor.png" class="edit">
        <img src="../assets/cross-mark-on-a-black-circle-background.png" class="delete" @click="deleteWorkout">
      </div>
    </div>
    <div class="details" v-show="showDetails">
      <p>{{workout.details}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['workout'],
  data(){
    return{
      showDetails:false,
      uri:'http://localhost:3000/program/'+this.workout.id,

    }
  },
  methods:{
    toggleDetails(){
      this.showDetails = !this.showDetails;
    },
    deleteWorkout(){
      fetch(this.uri,{method:'DELETE'})
          .then(()=> this.$emit('delete',this.workout.id))
          .catch(err => console.log(err.message));
    }
  }
}
</script>
<style scoped>
.workout{
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #8e1818;
  min-width: 400px;
}
h3{
  cursor: pointer;
}
.actions{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons img{
  width: 25px;
  margin-left: 10px;
  cursor: pointer;
  opacity: 60%;
}
.delete:hover{
  border-radius: 50%;
  box-shadow: 0 0 4px #8e1818;
  opacity: 100%;

}
.edit:hover{
  opacity: 100%;
}
</style>