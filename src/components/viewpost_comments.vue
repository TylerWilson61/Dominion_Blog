<template>
<div>
<div id = "comment-header">
    <h1> Comments </h1>
    
</div>

<hr>

<div v-bind:key="comment.id" v-for="comment in comments" id = 'comments'>
       <p><i>  {{comment.author}}: </i></p>
       <p> {{comment.body}} </p>
   </div>

<div>
    <textarea placeholder="your thoughts..." id = "new_comment"></textarea>
    </div>
<div> 
    <button id = "add-comment" v-on:click="update_comments"> new comment </button>
    </div>


<div id = "comment-body">
    
</div>
</div>
    
</template>

<script>
import axios from 'axios'
export default {
    

    name:"Comments",
    data (){
        return {
            comments: [],
            id: "",
            postId: "",
            content: "",
            author: ""

        }
    },
    created: function () {
        this.load_comments()
        

    },
    methods: {


        load_comments: function () {
        this.postId = this.$route.params.id
        axios.get("http://localhost:3000/comments/?postId=" + this.postId)
        .then((response) => {
            this.comments = response["data"]

        })
        .catch((error) => {
            console.log(error);
        });
            

        },

        update_comments: function () {
            this.content = document.getElementById("new_comment").value
            if (this.content == ""){
                return 0;
            }
            this.author = window.$cookies.get("author")
            document.getElementById("new_comment").value = ""
            this.get_id()
        },

        get_id: function () {
            axios.get('http://localhost:3000/comments')
            .then((response) => {
                this.id = response["data"].length + 1
                this.send_post()
            })
            .catch((error) =>{
                console.log(error)
            })
        },

        send_post: function () {
            axios.post("http://localhost:3000/comments/", {
                id:this.id,
                postId:this.postId,
                body:this.content,
                author:this.author
            })
            .then((response) => {
                console.log(response)
                this.load_comments()
            })
            .catch((error) => {
                console.log(error)
            })
        }
        
        


            
        
    }
    
}
</script>

<style scoped>

#new_comment {
   width: 300px;
   height: 100px;
   margin-top: 100px;
}


#comment-header {
    margin-top: 75px;
    display:flex;
    flex-direction: row;
    margin-bottom:0px;

  
}

hr{
   max-width: 300px;
    margin: 0px;
}

h1 {
    margin-right: 20px;
    margin-bottom: 0;
}

#add-comment {
    height: 20px;
    /* margin: auto 0; */
    margin-bottom: 9px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    border-width: 0;

}
button {
    cursor: pointer; 
    box-shadow: 3px 3px rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: 0.4s ease-out;
     
}

button:hover {
    opacity:.8;
 box-shadow: 4px 4px rgba(0,0,0,0.3);
}

#comments {
    background: rgba(0,0,0,0.1);
  
    max-width:300px;
    margin: 0px;
    margin-bottom: 20px;
   
    box-shadow: 3px 3px 3px rgba(0,0,0,0.2);

}





</style>