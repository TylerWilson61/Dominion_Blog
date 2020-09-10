<template>
    <div>
    <div id = "heading">
    <h1>{{ post.title }}</h1>
    <h3>By: {{ post.author}}</h3>
    </div>
    <hr>
    <div id = "content">
    <p>{{ post.content}}</p>
    </div>
    <div id = "btn-container" v-if="isauthor">
        <div id = "btn-center">
        <button id = "edit" @click="Showmodal_edit">edit</button>
        <button id = "delete" @click="Showmodal_dlt">delete</button>
        </div>
    </div>
        <transition name = "fade" appear>
            <div class = "modal-overlay" v-if="Showmodal" @click="Showmodal_off">
            </div>
        </transition>

            <div class = "modal" v-if="dlt_btn">
                
                <h3>Are You Sure You Want to Delete Your Post?</h3>
                <div id = "modal-content">
                <button @click="Showmodal_off"> cancel </button>
                <button v-on:click.once="dlt"> yes </button>
                </div>
                <p v-if="deleted">success!</p>
            </div>

            <div class = "modal" v-if="edit_btn">
                
                <h3>Edit Your Post Below:</h3>
                <textarea id = 'txtbox' v-model="post.content" />
                <div id = "modal-content">
                <button @click="Showmodal_off"> cancel </button>
                <button v-on:click="update_post"> save </button>
                </div>
                <p v-if="updated">success!</p>
            </div>


    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Viewcontent",
    data () {
        return {
            post: {},
            Showmodal:false,
            edit_btn:false,
            dlt_btn:false,
            deleted:false,
            updated:false,
            isauthor:false

        }

    },
    created: function (){
        this.getpost()
    },
    methods: {
        getpost: function (){
            var our_post = "http://localhost:3000/posts/" + this.$route.params.id
            axios.get(our_post)
            .then((response) => {
                this.post = response["data"]
                var logged_in = window.$cookies.get("author")
                if (logged_in == response["data"]["author"]){
                    this.isauthor = true;
                }
            })
            .catch((error) => {
                console.log(error)
                this.$router.push('/home')
            })
        },

        dlt: function () {
            var our_post = "http://localhost:3000/posts/" + this.$route.params.id
            axios.delete(our_post)
            .then((response) =>{
                console.log(response)
                this.deleted = true
            })
            .catch((error) => {
                console.log(error)
            })
        },
        Showmodal_edit: function () {
            this.Showmodal = true,
            this.edit_btn = true
        },
        Showmodal_dlt: function () {
            this.Showmodal = true,
            this.dlt_btn = true
        },
        Showmodal_off: function () {
            this.Showmodal = false,
            this.edit_btn = false,
            this.dlt_btn = false
        },
        update_post: function () {
            var our_post = "http://localhost:3000/posts/" + this.$route.params.id
            var entry = document.getElementById("txtbox").value
            axios.patch(our_post, {
                content: entry
            })
            .then((response) =>{
                console.log(response)
                this.updated = true
            })
            .catch((error) => {
                console.log(error)
            })}
            
            
        
    }
    
}
</script>

<style scoped>

#txtbox {
    width: 450px;
    height:200px;
    border: 1px dotted #ccc;
}

#modal-content {

    display: table;
    margin: auto 37%;
    width : 110px;
}
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 400px;
    border-radius: 16px;;
    background-color: white;
    padding: 25px;

    display:table
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity:0;
}


.modal-overlay {
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height:1000px;
    z-index: 98;
    background-color: rgba(0,0,0, 0.4);
   
    

}


#content {
    text-align: center;
    border: 1px dotted #ccc;
    max-width:470px;
    margin: 0 auto;
    background:#F5F5F5;
    border-radius: 5px;
}

h3 {
    line-height: 20%;
    margin-top: 15px;
    margin-left:10px;
}

h1 {
    margin-bottom: 0px;
    margin-left:10px;


}

#heading {
    background: rgb(237,237,237);
    border-radius: 20px;
    padding-bottom: 10px;
    text-align:center;
     margin: 20px auto;
    max-width:600px;
    margin-bottom:30px;
       box-shadow: 3px 3px rgba(0,0,0,0.2) 

}

hr{
    max-width:90%;
    margin-bottom: 100px;
}


#btn-container{
max-width:700px;
margin: 0 auto;
margin-top:10px;


}

#btn-center {
display: table;
margin: auto 70%;
width: 110px;


}

#edit {
   
  background: rgb(242, 219, 179);
 

}



#delete {
 
    background: rgb(209, 157, 136);

    
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

#comment-header {
    margin-top: 75px;
}

</style>