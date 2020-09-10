<template>
<div>
    <h1 id = "title"> Add a New Post </h1>
<form id = "txtbox">
    <label> Title: </label>
    <input type="text" v-model.lazy="title" required/>
    <label>Content: </label>
    <textarea v-model="content"></textarea>
</form>
<div id = "preview">
    <h3>Preview</h3>
    <p>title: {{ title }}</p>
    <p>post:</p>
    <p>{{ content }}</p>
</div>
<div id = 'btn'>
<button v-on:click.once="create()">create post </button>
</div>
<div id = "success-msg" v-if="show">
    <p>success!</p>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
 
    name: "newpost_body",
    data(){
        return {
        title:"",
        content:"",
        author: "",
        show: false,
        id: ""}
        
    },
    methods: {
        create: function () {
            this.author = window.$cookies.get("author")
            axios.get("http://localhost:3000/posts")
            .then((response) =>{
                this.id = response["data"].length + 1
                //throws error if i dont use within function
                console.log(this.id)
            
            })
            .catch((error) =>{
                console.log(error)
            });
    
            
            axios.post("http://localhost:3000/posts", {
                title:this.title,
                content:this.content,
                author:this.author,
                id:this.id
            })
            .then((response) => {
                console.log(response)
                
            })
            .catch((error) => {
                console.log(error)
            });

           //success events
           this.title = ""
           this.content = ""
           this.show = true

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
}

}
    
}
</script>

<style scoped>



#txtbox {
    margin: 20px auto;
    max-width: 500px;
}

#title {
    text-align: center;
}
label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea{
    display:block;
    width:100%;
}
button {
     margin-right:10px;
    border-width: 0;
     font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-width: 0;
    cursor: pointer; 
    box-shadow: 3px 3px rgba(0,0,0,0.2);
    border-radius: 5px;
     transition: 0.4s ease-out;
    
}
button:hover{
 opacity:.8;
 box-shadow: 4px 4px rgba(0,0,0,0.3);
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    margin: 20px auto;
    max-width: 500px;

}

#btn {
    margin: 20px auto;
    max-width: 500px;
    
}

#success-msg {
    margin: -42px auto;
    max-width: 200px;
    transition: 2s;
    transition: ease-in 2s;
    opacity: .7;
    

}
</style>