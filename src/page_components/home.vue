<template>

    <div class = "home">
    <Header />
    <h1>The #Freshest Blog Posts</h1>
    <hr>
    <Hbody />
    
    </div>
</template>

<script>
import Header from '../layout/header'
import Hbody from '../components/home_body'
export default {
    components:{
        Header,
        Hbody
    },
    name:'home',
    data (){
        return {
        }
    },
    mounted: function () {
        this.check_loggedin()
    },
    methods: {
        check_loggedin: function () {
            if (window.$cookies.get("logged_in") != "true"){
                this.$router.push("/")
            }

        }
    }
    
}
</script>

<style scoped>

.home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

h1 {
    text-align: center;
}
</style>