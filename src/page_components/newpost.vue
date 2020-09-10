<template>

<div id = "newpost">
    <Header/>
    <Body />
</div>
    
</template>

<script>
import Header from '../layout/header'
import Body from "../components/newpost_body"

export default {
    components: {
        Header,
        Body
    },
    name: "newpost",
    data(){
        return {

        }
        
    },
    mounted: function () {
        this.check_loggedin()
    },
    methods: {
        check_loggedin: function () {
            console.log('cookie value', window.$cookies.get("logged_in"))
            if (window.$cookies.get("logged_in") != "true"){
                console.log('here')
                this.$router.push("/")
            }

        }
    }
}



</script>

<style scoped>
#newpost * {
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>