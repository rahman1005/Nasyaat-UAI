<template>
  <div class="login">
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form class="login-body">
        <div class="login-padding">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" v-model="input.username" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" v-model="input.password"/>
            
            <label class="form-label" for="form3Example4">Password</label>
          </div>

      

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn color-login btn-lg"
              style="padding-left:1.5rem; padding-right: 2.5rem; padding-bottom: 2.5rem;" @click="login">Login</button>
            <!-- <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p> -->
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
 
</section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'login-admin',
    data(){
        return{
            admin:{},
            input:{
                username:null,
                password:null
            },
        };
    },
    methods:{
        setData(data){
            this.admin=data;
        },
        login(){
            if(this.input.username != this.admin[0].username){
                alert("Username anda Salah")
            } if (this.input.password != this.admin[0].password) {
                alert("Password anda Salah")
            } else {
                 this.$router.push({path: "/dashboard"})
            }
            
        }
    },
    mounted(){
        axios
        .post("http://localhost:5000/login")
        .then((response)=> this.setData(response.data))
        .catch((error)=> console.log(error));

    }
}
</script>

<style>

</style>