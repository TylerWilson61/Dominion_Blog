<template>
<div id = "hbody">
   
   
   <div v-bind:key="post.id" v-for="post in posts" id = 'post'>
       <router-link :to="`/posts/${post.id}`"  tag="div">
       <h1> {{post.title}}</h1>
       <h3> By: {{post.author}} </h3>
       <p> <i>{{post.content.slice(0,30) + " ..."}} </i></p>
       </router-link>
  
   </div>


</div>
    
</template>

<script>
import axios from 'axios'
export default {
    name: "Hbody",
    data () {
        return {
            posts: []

        }
    },
    created: function() {
        this.get_posts()
    },
    methods: {
        
        get_posts: function (){
        
        axios.get("http://localhost:3000/posts")
        .then((response) => {
            this.posts = response["data"]
            this.posts = this.posts.reverse()

        })
        .catch((error) => {
            console.log(error);
        });
        }

    }
    
}
</script>

<style scoped>

#post {
    background: rgb(215, 208, 199);
    text-align: center;
    max-width: 500px;
    margin: 20px auto;
    padding-bottom:30px;
    padding-top:1px;
    box-shadow: 0px 7px 5px #707070;
    margin-bottom: 50px;
    
    
}

#post:hover {
    opacity:.5;
    transition: ease-in .5s;
    cursor:pointer;
}

h2 {
   line-height: 10%;
}

h3{
    line-height:50%;
    margin-top: 20px;
    margin-bottom: 50px;
}
h1{
    line-height:90%;
    padding-bottom: 0;
    margin-bottom: 0;
}


</style>