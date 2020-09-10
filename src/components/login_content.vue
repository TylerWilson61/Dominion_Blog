<template>
  <div class="login-info">
    <h1>{{ msg }}</h1>
    <p>
      Stay up to date with all things Dominion and the happenings of the NYC financial scene</p>

      <div id = 'forms-center'>
    <form id = "user-entry">
      <input placeholder="username:" type="text" v-model="usnm" required/>
    
    </form>

    <form id = "pswd-entry">
      <input placeholder="password:" type="password" v-model="pswd" required/>
    </form>

    </div>

    <button v-on:click="check_login"> login </button>
    <button v-on:click="check_register"> register </button>
    
    <div id = "server-msgs">
      <p v-if="login_failed_pswd">Incorrect username or password. Please try again or register an account.</p>
      <p v-if="login_failed_usnm">This user does not exist. Please register an account.</p>
      <p v-if="register_failed">This username already exists. Please try another.</p>
      <p v-if="register_verified">Success! You can now log in with your account.</p>
    </div>
  </div>
   

</template>

<script>

//display msg on register fail/success
//route to hom on login success
//display msg on login fail
import axios from 'axios'
export default {
  name: 'login_content',

  data (){
      return {
        msg:"Dominion Blog",
        usnm:"",
        pswd:"",
        login_failed_pswd:false,
        login_verified:false,
        login_failed_usnm:false,
        register_failed:false,
        register_verified:false,
        id:""

      }
  },
  methods: {

    check_login: function () {
      
      axios.get('http://localhost:3000/profile?name=' + this.usnm)
      .then((response) => {
        if (response["data"].length == 0){
          this.login_failed_usnm = true
        }
        else{
        var db_pswd = response["data"][0]["password"]
        if (this.pswd != db_pswd){
          this.reset_msg()
          this.login_failed_pswd = true
        }
        else {
          this.reset_msg()
          this.login_verified = true
          window.$cookies.set("author", this.usnm)
          window.$cookies.set("logged_in", "true")
          this.$router.push("/home")


        }}
      })
      .catch((error) => {
        console.log(error)
        this.reset_msg()
        this.login_failed_usnm = false

      })
      

    },
    check_register: function () {
      axios.get('http://localhost:3000/profile?name=' + this.usnm)
      .then((response) => {
        if (response["data"].length == 1){
          this.reset_msg()
          this.register_failed = true
        }
        else {
          this.reset_msg()
          this.register_verified = true
          this.create()
        }
        

      })
      .catch((error) => {
        console.log(error)
    
      })
    },

    create: function () {

      axios.get('http://localhost:3000/profile')
      .then((response) => {
        this.id = response["data"].length + 1
      })
      .catch((error) => {
        console.log(error)
      })


      axios.post('http://localhost:3000/profile', {
        name: this.usnm,
        password: this.pswd,
        id:this.id
      })
      .then((response) => {
        this.reset_msg()
        this.register_verified = true
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        this.reset_msg()
        this.register_failed = true
      })
    },

    reset_msg: function () {
        this.login_failed_pswd =false
        this.login_verified =false
        this.login_failed_usnm =false
        this.register_failed =false
        this.register_verified =false
    }






  }
}
           //enter key fix
            //not ideal ~ fix later
           window.onkeydown=function(event){
           if(event.keyCode==13){
            if(event.preventDefault){
                event.preventDefault();
                }
            return false;
        }
    }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

#user-entry{
  padding-right: 81px;
}
#pswd-entry{
  padding-right: 80px;
}

.login-info {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
    cursor: pointer; 
    box-shadow: 3px 3px rgba(0,0,0,0.3);
    border-radius: 5px;
    transition: 0.4s ease-out;
    border:0px;
    margin-right:10px;
     
}

button:hover {
    opacity:.8;
 box-shadow: 4px 4px rgba(0,0,0,0.5);
}

#forms {
  margin: 0 auto;
 
  /* border: dotted red; */

}

#forms-center {
  margin: 0 auto;
  width: 155px;
  padding-bottom: 20px;
}



</style>
