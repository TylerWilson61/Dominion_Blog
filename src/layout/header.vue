<template>
<!-- As a link -->
<header class = "header">
<div id = "nav"><img src = "../assets/logo.jpeg" width="50" height="50"></div>
<div id = "nav"><h3><a href = "/home" >home</a> </h3></div>
<div id = "nav"><h3><a href = "/new"> new post</a> </h3></div>
<div id = "nav" class = 'logout' v-on:click="logout"><h3><a href = "/"> log out</a></h3></div>
</header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        logout: function () {
            window.$cookies.set("logged_in", "false")
        }
    }
    
}
</script>

<style scoped>

.header {
    background: #333;
    color: #fff;
    text-align: left;
    padding:20px;
    /* width:100%; */
    margin-bottom: 50px;
    margin-top: 0px;

    

    
}

#nav {
    display:inline-block;
    padding-right: 50px;
    vertical-align:bottom;
 

}

.header a {
    color: #fff;
    padding-right: 5px;
}

a {
     text-decoration:none
}
body {
  margin-top: 0;
}

.logout {
    float:right;
}


</style>